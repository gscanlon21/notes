+++
title = "Visual Studio"
updated = 2021-02-21

[extra]
version = ".NET 5"
+++

# [Visual Studio](https://visualstudio.microsoft.com/)
An IDE for the .NET stack

## Debugging

### Data Breakpoints

Data breakpoints are used to halt when a variable's value changes

They can be enabled by right-clicking on a variable in the Autos/Locals/Watch window and selecting "Enable Data Breakpoint". The next time that variable changes, the debugger will halt and show you the changes value

### [DebuggerDisplay]

The DebuggerDisplay attribute can be used to alter how the debugger shows variables

#### Add [DebuggerDisplay] to external types


###### **`ClassLibrary1`**
```cs
//using System.Diagnostics;

namespace ClassLibrary1
{
    //[DebuggerDisplay("Foo.Bar={Bar}")] // works too for types you own
    public class Foo
    {
        private int Bar = 42;
    }
}
```
######

###### **`ConsoleApp1`**:
```cs
using System.Diagnostics;
using System.Reflection;
using ClassLibrary1;

[assembly: DebuggerDisplay("Foo.Bar={FooDebuggerDisplay.Bar(this)}", Target=typeof(Foo))]

class FooDebuggerDisplay
{
    public static int Bar(Foo foo) => (int)foo.GetType().GetField("Bar",BindingFlags.Instance|BindingFlags.NonPublic).GetValue(foo);
}

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var foo = new Foo();
            Debugger.Break();
        }
    }
}
```
###### CC-BY-SA [Jens](https://stackoverflow.com/questions/4469001/can-the-debuggerdisplay-attribute-be-applied-to-types-one-doesnt-own)


### Customizing the Call Stack

You are able to customize the call stack window by right clicking on an item

### View Value Returned By a Function

Step to the end closing bracket and view the Autos window, there should be a value that ends with 'returned'

Can also add `$ReturnValue` to the watch window

Format Specifiers can also be applied. `$ReturnValue,nq`

### Step into Specific

Allows you to step directly into nested function calls

### Trigger an Exception
Use the Immediate Window to set a nullable variables value to null, use that to trigger a null reference exception when stepping though code