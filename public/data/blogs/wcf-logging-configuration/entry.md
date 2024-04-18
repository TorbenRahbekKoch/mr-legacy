# WCF Logging Configuration

*This blog post was [originally posted on my company website](https://softwarepassion.eu/understanding-variable-scope-in-workflow-foundation-4/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was with possibly a few additions, highlights, clarifications and corrections of typos. Is it really worth moving here? Probably not, but just for the
sake of completeness I went ahead and did it!

---

WCF (Windows Communication Foundation) is a great framework, one the few really brilliant frameworks from Microsoft. It can be a bit hard, though, to figure out what goes wrong when it doesn't work. One of the general drawbacks of high-level frameworks is that errors are typically swallowed deep down or at least very hard to understand.

Fortunately WCF has some great support for logging very detailed information about what happens. Unfortunately it is a bit like black magic to figure it out. That is why I here provide a simple logging configuration for reuse. It hasn't failed yet to help me figure out what was wrong when WCF didn't work.

It is divided into two parts, one in `<system.serviceModel>`:

```` xml
<system.serviceModel>

    <diagnostics>
        <messageLogging logEntireMessage="true"
                                logMalformedMessages="true"
                                logMessagesAtServiceLevel="true"
                                logMessagesAtTransportLevel="true"
                                maxMessagesToLog="50000"
                                maxSizeOfMessageToLog="2147483647" />
    </diagnostics>

</system.serviceModel>

````

And one in `<system.diagnostics>`:

```` xml
<system.diagnostics>
    <sources>
        <source name="System.ServiceModel" switchValue="Verbose, ActivityTracing" propagateActivity="true">
        <listeners>
            <add name="corr"/>
        </listeners>
        </source>

        <source name="System.ServiceModel.MessageLogging">
        <listeners>
            <add name="corr"/>
        </listeners>
        </source>

        <source name="System.Net" tracemode="includehex" maxdatasize="1024">
        <listeners>
            <add name="System.Net"/>
        </listeners>
        </source>

        <source name="System.Net.Sockets">
        <listeners>
            <add name="System.Net"/>
        </listeners>
        </source>

        <source name="System.Net.Cache">
        <listeners>
            <add name="System.Net"/>
        </listeners>
        </source>

    </sources>

    <switches>
        <add name="System.Net" value="Verbose"/>
        <add name="System.Net.Sockets" value="Verbose"/>
        <add name="System.Net.Cache" value="Verbose"/>
    </switches>

    <sharedListeners>
        <add name="System.Net" initializeData="c:\log\ApplicationName-network.log" type="System.Diagnostics.TextWriterTraceListener"/>
        <add name="corr" initializeData="c:\log\ApplicationName.svclog" type="System.Diagnostics.XmlWriterTraceListener"/>
    </sharedListeners>

    <trace autoflush="true"/>
</system.diagnostics>
````

Notice the paths to the two log files.

One of the neat things about this configuration is that it also logs messages on the network-level, which especially helps when looking into HTTP PUT/GET/POST problems.

The .svclog file can be read by the Microsoft Service Trace Viewer (simply double-click on the file and it opens automatically). If you have a .svclog-file on the client side and on the server side, this tool can correlate the two files, so the entire communation can be examined.

You have to have a little patience with the tool. The logs contain a lot of information and it can take a little time to learn to dig out the necessary data to fix a problem.

Also watch out for the size of the log files. They can grow very big, very fast (and will then take a long time to load in the log viewer). Don't leave a configuration like this on a production server!