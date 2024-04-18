# Serialization in one line


*This blog post was [originally posted on my company website](https://softwarepassion.eu/serialization-in-one-line/)*, which is why the publish date
is before this website was created ;)

It is here reposted as it was
with only a few additions, highlights, clarifications and corrections of typos.

---

I have this neat static helper class, which makes it easy to serialize an instance of a class marked with `[DataContract]` and `[DataMember]`. E.g.

```` C#
var xml = DataContractSerialization.Serialize(instance);
````

Where `instance` is an instance of any class which is serializable with 
`DataContractSerializer`.

Deserialization is equally easy:

```` C#
var instance = DataContractSerialization.Deserialize(typeof(MyClass), xml);
````

or:

```` C#
var instance = DataContractSerialization.Deserialize<MyClass>(xml);
````

The code for that class, which also can be found on 
[GitHub](https://github.com/TorbenRahbekKoch/SoftwarePassion.Common/blob/master/Source/Projects/Core/Serialization/DataContractSerialization.cs):

```` C#
using System;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Xml;

namespace SoftwarePassion.Common.Core.Serialization
{
    /// <summary>
    /// One-liners for the DataContractSerializer class.
    /// </summary>
    public static class DataContractSerialization
    {
        /// <summary>
        /// Serializes the specified value.
        /// </summary>
        /// <typeparam name="TType">The type of the value.</typeparam>
        /// <param name="value">The value.</param>
        /// <param name="knownTypes">The known types.</param>
        /// <returns>A string (xml) with the serialized value.</returns>
        public static string Serialize<TType>(TType value, params Type[] knownTypes)
        {
            if (knownTypes == null)
            {
                knownTypes = new Type[] { };
            }

            var serializer = new DataContractSerializer(typeof(TType), knownTypes);
            var stringBuilder = new StringBuilder(1024);
            using (var stream = XmlWriter.Create(stringBuilder))
            {
                serializer.WriteObject(stream, value);
                stream.Flush();
            }

            return stringBuilder.ToString();
        }

        /// <summary>
        /// Deserializes the specified XML into an instance of the given TType.
        /// </summary>
        /// <typeparam name="TType">The type of the data expected to have be serialized in the given xml.</typeparam>
        /// <param name="xml">The XML.</param>
        /// <param name="knownTypes">The known types.</param>
        /// <returns>A deserialized instance of the given TType.</returns>
        public static TType Deserialize<TType>(string xml, params Type[] knownTypes) where TType : class
        {
            if (string.IsNullOrEmpty(xml))
                return null;

            if (knownTypes == null)
            {
                knownTypes = new Type[] { };
            }

            var serializer = new DataContractSerializer(typeof(TType), knownTypes);

            using (var reader = new StringReader(xml))
            {
                var stream = XmlReader.Create(reader);
                return serializer.ReadObject(stream) as TType;
            }
        }

        /// <summary>
        /// Deserializes the specified XML into an instance of the given dataType.
        /// </summary>
        /// <param name="dataType">The type of the data expected to have be serialized in the given xml.</param>
        /// <param name="xml">The XML.</param>
        /// <param name="knownTypes">The known types.</param>
        /// <returns> A deserialized instance of the given dataType. </returns>
        public static object Deserialize(Type dataType, string xml, params Type[] knownTypes)
        {
            if (string.IsNullOrEmpty(xml))
                return null;

            if (knownTypes == null)
            {
                knownTypes = new Type[] { };
            }

            var serializer = new DataContractSerializer(dataType, knownTypes);

            using (var reader = new StringReader(xml))
            {
                var stream = XmlReader.Create(reader);
                return serializer.ReadObject(stream);
            }
        }
    }
}
````