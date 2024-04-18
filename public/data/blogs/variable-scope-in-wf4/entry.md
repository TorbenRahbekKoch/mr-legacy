# Understanding Variable Scope in Workflow Foundation 4

*This blog post was [originally posted on my company website](https://softwarepassion.eu/understanding-variable-scope-in-workflow-foundation-4/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was with possibly a few additions, highlights, clarifications and corrections of typos. Is it really worth moving here? Probably not, but just for the
sake of completeness I went ahead and did it!

---

When creating you own activities in WF4 you can sometimes be surprised at how the variable scope works. At times it seems dysfunctional. On thing that really bit me is that **An activity cannot touch its own public variables**. This seems strangely illogical but that is really how it is. Try creating a simple Activity like this:



```` c#
using System.Activities;
using System.Collections.ObjectModel;

public class TestActivity : NativeActivity
{
    public InArgument<string> Value { get; set; }

    public Collection<Variable> Variables
    {
        get
        {
            if (variables == null)
                variables = new Collection<Variable>();

            return variables;
        }
    }

    protected override void Execute(NativeActivityContext context)
    {}

    private Collection<Variable> variables;
}

````

Drop it as the only activity in a workflow. Add a variable called test of type string on the activity. In properties try to use test variable for the Value property. You will get: *Compiler error(s) encountered processing expression "test". 'test' is not declared. It may be inaccessible due to its protection level.*

![Test Activity](/data/blogs/variable-scope-in-wf4/test-activity-1.png)

The variable *test* is not in the scope of the activity on which it is declared!

An activity can, on the other hand, access the variables of its parents. To see this drop in a Sequence and let TestActivity be a part of the Sequence. Then create *test* as a variable on Sequence instead. Again use *test* for the Value property. Now there is no problem. So an activity cannot access its own public variables but it can access its parent's public variables.

![Test Activity](/data/blogs/variable-scope-in-wf4/test-activity-2.png)

Now hear this: Implementation children cannot access any public variables. At all. To see this, create an activity like this:


```` C#
using System;
using System.Activities;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;

[Designer(typeof(TestActivityDesigner))]
public class TestActivity : NativeActivity
{
    public InArgument<string> Value { get; set; }

    public Collection<Variable> Variables
    {
        get
        {
            if (variables == null)
                variables = new Collection<Variable>();

            return variables;
        }
    }

    public Activity Body { get; set; }

    protected override void CacheMetadata(NativeActivityMetadata metadata)
    {
        metadata.SetVariablesCollection(Variables);
        metadata.AddImplementationChild(Body);
    }

    protected override void Execute(NativeActivityContext context)
    {
        context.ScheduleActivity(Body);
    }

    private Collection<Variable> variables;
}
````

Also create an ActivityDesigner with this body:

```` xml
<sap:ActivityDesigner.Resources>
    <DataTemplate x:Key="Collapsed">
        <StackPanel>
            <TextBlock>Drop activity here...</TextBlock>
        </StackPanel>
    </DataTemplate>
    <DataTemplate x:Key="Expanded">
        <StackPanel>
            <sap:WorkflowItemPresenter Item="{Binding Path=ModelItem.Body, Mode=TwoWay}"
                                    HintText="Drop activity here..." />
        </StackPanel>
    </DataTemplate>
    <Style x:Key="ExpandOrCollapsedStyle" TargetType="{x:Type ContentPresenter}">
        <Setter Property="ContentTemplate" Value="{DynamicResource Collapsed}"/>
        <Style.Triggers>
            <DataTrigger Binding="{Binding Path=ShowExpanded}" Value="true">
                <Setter Property="ContentTemplate" Value="{DynamicResource Expanded}"/>
            </DataTrigger>
        </Style.Triggers>
    </Style>
</sap:ActivityDesigner.Resources>
<Grid>
    <ContentPresenter Style="{DynamicResource ExpandOrCollapsedStyle}" Content="{Binding}" />
</Grid>
````

Create a workflow with the new TestActivity, and put a *test* variable on the TestActivity. Place an Assign activity on the TestActivity as shown:

![Test Activity](/data/blogs/variable-scope-in-wf4/test-activity-3.png)

As you can see, the *Body* of TestActivity cannot access the public variable *test*. You can even try to enclose all of it in a Sequence and move the *test* variable to the *Sequence* scope:

![Test Activity](/data/blogs/variable-scope-in-wf4/test-activity-4.png)

So an implementation child cannot access a public variable. Period. If you change the line:

```` C#
metadata.AddImplementationChild(Body);
````
to:

```` C#
metadata.AddChild(Body);
```` 

It will work, because *Body* is now a public child instead.

You can then choose to create an implementation variable called *test* and it will now work:

```` C#
protected override void CacheMetadata(NativeActivityMetadata metadata)
{
    metadata.SetVariablesCollection(Variables);
    metadata.AddImplementationChild(Body);
    testVariable = new Variable<string>("test", "42");
    metadata.AddImplementationVariable(testVariable);
}
````

The reason for the workflow foundation variable scope to work like this is probably that public variables are the means to pass values from one activity to another by using OutArgument and InArgument. This is actually a very flexible but at the same time a rather cumbersome approach. Not much *flow* in that.