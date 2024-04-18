# WCF Logging Configuration

*This blog post was [originally posted on my company website](https://softwarepassion.eu/testable-time/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was with possibly a few additions, highlights, clarifications and corrections of typos. Is it really worth moving here? Probably not, but just for the
sake of completeness I went ahead and did it!

---

**NOTE!** 

Microsoft now provides the [TimeProvider](https://learn.microsoft.com/en-us/dotnet/api/system.timeprovider) class from .NET 8 and onwards. **This article** is only here for (my)
historical correctness.

---

I was inspired by Mark Seeman’s `TimeProvider` class from 
[Dependency Injection in .NET](https://www.manning.com/books/dependency-injection-in-dot-net) which is an 
[Ambient Context](https://blog.ploeh.dk/page28/#6497bdfd47db433c92a6ec4fabfd4e92) for resolving the current date and time, but without the most prevalent shortcoming of `DateTime.Now` and `DateTime.UtcNow`: The lack of testability.

If you need to test how a class reacts to changes in date and/or time there is no way around having a testable `TimeProvider`. For this purpose I created a set of four classes, which interact nicely to allow for faking the time during a test. The most prominent is the `TimeProvider` class itself, because its the one that allows you to query the time, simply by calling UtcNow:

```` C#
var now = TimeProvider.UtcNow;
````

It is possible to change what TimeProvider returns from UtcNow by changing its Current TimeProvider with the help of the TimeSetter class:

```` C#
using (new TimeSetter(new DateTime(2012, 12, 12, 12, 12, 12)))
{
    // interesting test code…  
    TimeProvider.UtcNow // will now return 2012-12-12 12:12.12
}
TimeProvider.UtcNow // will now return whatever the actual current date and time is.
````


TimeSetter implements IDisposable to allow for an easy way to reset which TimeProvider is used by UtcNow. The default provider is:

```` C#
/// <summary>
/// DefaultTimeProvider implementation, which simply wraps a standard DateTime.UtcNow.
/// </summary>
internal class DefaultTimeProvider : TimeProvider
{
    private DefaultTimeProvider()
    {
    }

    public static DefaultTimeProvider Instance
    {
        get { return DefaultTimeProvider.instance; }
    }

    protected override DateTime RetrieveUtcNow()
    {
        return DateTime.UtcNow;
    }

    private static readonly DefaultTimeProvider instance = new DefaultTimeProvider();
}
````

TimeSetter has a method – SetNow – for changing the DateTime returned:

```` C#
/// <summary>
/// Used for encapsulating a change of the DefaultTimeProvider. Very useful in tests.
/// </summary>
/// <remarks>
/// Implements IDisposable so it figures out to restore the DefaultTimeProvider after use.
/// Example:
/// <code>
///   var timeProviderMock = new TimeProviderMock();
///   using (var timeSetter = new TimeSetter(timeProviderMock)
///   {
///     timeProviderMock.Now = new DateTime(2010, 1, 1);
/// 
///     var now = TimeProvider.UtcNow; // Returns 2010-01-01.
///   }
/// </code>
/// </remarks>
public sealed class TimeSetter : IDisposable
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TimeSetter"/> class.
    /// </summary>
    /// <param name="timeProvider">The time provider to set as current TimeProvider.</param>
    public TimeSetter(TimeProvider timeProvider)
    {
        if (timeProvider == null)
        {
            throw new ArgumentNullException("timeProvider");
        }

        previousProvider = TimeProvider.Current;
        TimeProvider.Current = timeProvider;
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="TimeSetter" /> class with a TimeProviderMock as the
    /// provider.
    /// </summary>
    /// <param name="currentTime">The current time.</param>
    public TimeSetter(DateTime currentTime)
    {
        previousProvider = TimeProvider.Current;
        TimeProvider.Current = new TimeProviderMock(currentTime);
    }

    /// <summary>
    /// Restores the previous TimeProvider.
    /// </summary>
    public void Dispose()
    {
        TimeProvider.Current = this.previousProvider;
    }

    /// <summary>
    /// Sets the current time, if the provider is a TimeProviderMock.
    /// </summary>
    public static void SetNow(DateTime now)
    {
        var mock = TimeProvider.Current as TimeProviderMock;
        if (mock != null)
            mock.DateTime = now;
    }

    private readonly TimeProvider previousProvider;
}
````
The mock class used by TimeSetter:

```` C#
/// <summary>
/// Convenience class for testing scenarios. Use TimeSetter to encapsulate it in a using statement.
/// </summary>
public class TimeProviderMock : TimeProvider
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TimeProviderMock" /> class, setting the DateTime to DateTime.UtcNow.
    /// </summary>
    public TimeProviderMock()
    {
        DateTime = DateTime.UtcNow;
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="TimeProviderMock" /> class, setting the DateTime to the given value.
    /// </summary>
    public TimeProviderMock(DateTime now)
    {
        DateTime = now;
    }

    /// <summary>
    /// Gets or sets the date time.
    /// </summary>
    public DateTime DateTime { get; set; }

    protected override DateTime RetrieveUtcNow()
    {
        return DateTime;
    }
}
````

TimeProvider itself has some convenience methods for creating DateTimes:

```` C#
/// <summary>
/// Ambient TimeProvider with support for property injection to change the actual
/// TimeProvider implementation, which is very useful in testing scenarios.
/// </summary>
public abstract class TimeProvider
{
    /// <summary>
    /// Gets the current TimeProvider.
    /// </summary>
    public static TimeProvider Current
    {
        get
        {
            return TimeProvider.current;
        }

        internal set
        {
            if (value == null)
            {
                throw new ArgumentNullException("value");
            }

            TimeProvider.current = value;
        }
    }

    /// <summary>
    /// Gets the current time in UTC.
    /// </summary>
    public static DateTime UtcNow
    {
        get
        {
            return TimeProvider.Current.RetrieveUtcNow();
        }
    }

    /// <summary>
    /// Creates a DateTime of DateTimeKind.Utc
    /// </summary>
    /// <param name="year">The year.</param>
    /// <param name="month">The month.</param>
    /// <param name="day">The day.</param>
    /// <returns>The created DateTime.</returns>
    public static DateTime CreateUtc(int year, int month, int day)
    {
        return DateTime.SpecifyKind(new DateTime(year, month, day), DateTimeKind.Utc);
    }

    /// <summary>
    /// Creates a DateTime of DateTimeKind.Utc
    /// </summary>
    /// <param name="year">The year.</param>
    /// <param name="month">The month.</param>
    /// <param name="day">The day.</param>
    /// <param name="hour">The hour.</param>
    /// <param name="minute">The minute.</param>
    /// <param name="second">The second.</param>
    /// <returns></returns>
    public static DateTime CreateUtc(int year, int month, int day, int hour, int minute, int second)
    {
        return DateTime.SpecifyKind(new DateTime(year, month, day, hour, minute, second), DateTimeKind.Utc);
    }

    /// <summary>
    /// Creates a DateTime of DateTimeKind.Utc
    /// </summary>
    /// <param name="year">The year.</param>
    /// <param name="month">The month.</param>
    /// <param name="day">The day.</param>
    /// <param name="hour">The hour.</param>
    /// <param name="minute">The minute.</param>
    /// <param name="second">The second.</param>
    /// <param name="millisecond">The millisecond.</param>
    /// <returns></returns>
    public static DateTime CreateUtc(int year, int month, int day, int hour, int minute, int second, int millisecond)
    {
        return DateTime.SpecifyKind(new DateTime(year, month, day, hour, minute, second, millisecond), DateTimeKind.Utc);
    }

    /// <summary>
    /// Resets to using the default TimeProvider (which uses DateTime).
    /// </summary>
    public static void ResetToDefault()
    {
        TimeProvider.current = DefaultTimeProvider.Instance;
    }

    /// <summary>
    /// Override to implement the specific way to return a current DateTime of DateTimeKind.Utc.
    /// </summary>
    /// <returns>A DateTime.</returns>
    protected abstract DateTime RetrieveUtcNow();

    private static TimeProvider current = DefaultTimeProvider.Instance;
}
````

These four classes together should solve most of the needs for testable time.
