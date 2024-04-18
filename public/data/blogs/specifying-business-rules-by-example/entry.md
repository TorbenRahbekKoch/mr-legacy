# Specifying Business Rules by Example

*This blog post was [originally posted on my company website](https://softwarepassion.eu/specifying-business-rules-by-example/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

One of the (many) benefits of using 
[Specification by Example](http://specificationbyexample.com/)
is that we get the business logic out in the open, being able to discuss it among developers, analysts, domain experts and users, instead of having it buried deep down in the code, wherefrom it can be rather hard to extract. And especially hard to extract non-manually.

But I think it is really hard and difficult to figure out from which perspective (some of) these business rules should be written. I mean, some business rules do belong in the abyss of the code, but other rules should most definitely be surfaced and be easy to extract as documentation.

To encourage some thoughts about this, I will describe my thoughts about a more general problem, which many systems will face. The problem, I think, is generic enough that the discussion it might spur will be useful in other situations.

We have some system (The System), which should be accessible by web (The Web Site) and mobile apps (The App). The System demands that Members do Create an Account. And for (more or less) obvious reasons The System has some requirements as to what makes up a Valid Username and a Valid Password.

I see the action of creating an account via The Website and The App as two different features (e.g. stories) of The System. So we would have two features for describing this, very much alike below (never mind that users really don't want the hazzle of 
creating accounts):

```` gherkin
Feature: Create Account on The Web site
    As a potential Member of The System
    I want to Create an Account on The Web Site 
    so that I can login and use the features of The System.
Feature: Create Account via The App
    As a potential Member of The System 
    I want to Create an Account in The App 
    so that I can login and use the features of The System.
````

I believe I have managed to describe these two features in a way that open up for writing Scenarios suitable for automatic testing. A Scenario for the first Feature could be:

```` gherkin
Scenario: Successfully Create Account on The Web Site
    Given a Valid Username that is not already in use and a Valid Password
    When The User asks The Web Site to Create the Account
    Then The Account is created by The System and the User is logged in as a Member of The System    

````
The Scenario for The App will be very much the same. And I figure that these Scenarios should be automatically tested through their corresponding UI.

My brain starts to heat up, though, when I think of the actual business requirements as to what makes up a Valid Username and a Valid Password. It should be obvious that these rules should be upheld no matter whether we create an account using The Web Site or The App. And since I will want the Create Account Scenarios above to be tested through UI, which is (very) slow, I don't want to list several examples of Usernames and Passwords, which then all should be tested through the UI.

The App will (obviously?) use a Rest API for creating and accessing account information. The REST Api will use an Account Application Service, which also will be used by The Web Site's server-side code (The Web Site could also use the REST Api AJAX-style, but for now we assume it doesn't). Note, that this also means that we want to - somehow - test the REST Api, using the same business rules, which would result in one more Feature, describing that Scenario.

So what I'm actually aiming at here is that I want the Account Application Service to be Specified by Example, as well. And I want this because the rules that describe what constitutes a Valid Username and Valid Password are business rules, open for discussion. They should not be buried in the code. At the same time we don't want to repeat the description of the business rules all over Features and Scenarios.

I cannot see a clear-cut way to this nicely and it may be that I'm using the wrong hammer (in this case 
[SpecFlow](https://specflow.org/), which may be hindering me thinking outside the famous box) for this or just my inexperience in Specification by Example shining through.

Since what I want to Specify is the Account Application Service I will call the users of the service for Consumers. What I have come up with is this:

```` gherkin
Feature: Validate Username and Password
    As a potential Consumer of The System's Account Application Service 
    I want The Account Application Service to Validate my Username and Password according to the Business Rules.
    so that I can create an account with a Valid Username and Valid Password 

A Valid User Name:
  1. Cannot begin with white space.
  2. Cannot end with white space.
  3. Must start with a Unicode letter
  4. Must consist of letters, digits and spaces.
  5. Is case insensitive.
  6. Is at least 3 characters long.
  7. Is at most 30 characters long.

A Valid Password:
  1. Can contain any Unicode character.
  2. Is at least 6 characters long.
  3. Is at most 40 characters long.
  4. Must have at least 6 different characters.

````

The details of the business rules is not what's at stake here. They should emerge out of the discussion of what is a Valid Username and Password, which is helped on the way by some examples:

```` gherkin
Scenario Outline: Validating Username
    When I give a <username>
    Then The Account Application Service responds with an answer detailing whether the Username is <valid>.

    Examples: 
    | username:string                            | valid:bool |
    | user1                                      | yes        |
    | aVeryVeryLongUserNameWhichShouldBeAccepted | yes        |
    | æøåÆØÅ1234567890                           | yes        |
    |  user with space in beginning              | no         |
````

The examples here might not be that exhaustive, I've only discussed them with myself ;) But the testing of this validation can be automated quite easily. And this will be the only Feature describing and testing the actual business rules regarding Valid Usernames and Passwords.

The Scenario Outline for Validating a Password would look just about the same. There should also be Scenario Outlines for Invalid Usernames and Passwords.

It is noteworthy, though, that the validation of Usernames and Passwords is not a User Story, it is - I think - more of an implementation detail. The same goes for the description of the REST Api.

For all the other tests (The Web Site, The App, REST Api) that need a Valid Username and Password (or invalid for that matter), it would be a good idea to have a TestHelper that supplies these, instead of dispersing the knowledge of Valid Usernames and Passwords over more tests than absolutely necessary.

I have chosen validation of Usernames and Passwords only as an example here. The business rules could have been anything else: financial rules, what ever. But where and how to describe the rules is still an issue.