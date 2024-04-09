# F#: Making illegal states unrepresentable

*This blog post was [originally posted on my company website](https://softwarepassion.eu/fsharp-making-illegal-states-unrepresentable/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

Following [Property-based testing with F#](https://www.pluralsight.com/courses/fsharp-property-based-testing-introduction)
by Mark Seemann it annoyed me a bit that the generator did not involve the type itself in restricting what could be generated. I tried to figure out a nice way to do this. Then one day arrived the need for a string which would always contain a value – a NonEmptyString – because I like to make illegal states unrepresentable – [which is no new idea](https://fsharpforfunandprofit.com/posts/designing-with-types-making-illegal-states-unrepresentable/). Scott Wlaschin is brilliant. Period.

I eventually came up with this little piece of code:

```` F#
type NonEmptyString = private NonEmptyString of string
    with static member create value =
            match NonEmptyString.validate value with
            | true -> 
                NonEmptyString value 
                |> Some
            | false -> None

         static member validate value =
            String.IsNullOrEmpty value
            |> not

         static member primitiveValue value =
            let (NonEmptyString primitiveValue) = value
            primitiveValue

````

The code represents a string which cannot be null or empty, ever. You simply cannot construct it with an empty value. This also means, of course, that you always have to construct it using e.g. match with:

```` F#
let s = match NonEmptyString.create "somestring" with
    | None -> ... // you have to think of some error handling here!
    | Some value -> value
````

Now having the validate function makes it very easy to create a generator for FsCheck:

```` F#
type Generators =
    static member NonEmptyString() =
        {
            new Arbitrary() with
                override x.Generator =
                    Arb.Default.String()
                    |> Arb.filter(fun s -> NonEmptyString.validate s)
                    |> Arb.toGen
                    |> Gen.map(fun x -> match NonEmptyString.create x with | x -> x.Value)
        }
````
If you haven’t used [FsCheck](https://fscheck.github.io/FsCheck/) I strongly suggest that you give it a 
go. There is quite a steep learning code, but it is very much worth it.
