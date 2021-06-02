+++
title = "Visual Studio"
updated = 2021-05-29

[extra]
site = "https://visualstudio.microsoft.com/"
version = "2019"
see_also = [
  { title = "C# Format Specifiers", href = "https://docs.microsoft.com/en-us/visualstudio/debugger/format-specifiers-in-csharp" }
]
+++

# Visual Studio
An IDE for the .NET stack

## Debugging

### Data Breakpoints

Data breakpoints are used to halt when a variable's value changes

They can be enabled by right-clicking on a variable in the Autos/Locals/Watch window and selecting "Enable Data Breakpoint". The next time that variable changes, the debugger will halt and show you the changes value

### [DebuggerDisplay]

The DebuggerDisplay attribute can be used to alter how the debugger shows variables

#### Add [DebuggerDisplay] to external types


###### ClassLibrary1
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

###### ConsoleApp1
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

### View Value Returned by a Function
Step to the end closing bracket and view the Autos window, there should be a value that ends with 'returned'. Or you can add `$ReturnValue` to the watch window.

[Format Specifiers](@/notes/dotnet/visual_studio/_index.md#csharp-format-specifiers) can be applied to the `$ReturnValue` to alter how it is displayed in the output window.

### Step into Specific
Allows you to step directly into nested function calls

### Trigger an Exception
Use the Immediate Window to set a nullable variables value to null, use that to trigger a null reference exception when stepping though code

### Format Specifiers (C#) {#csharp-format-specifiers}
Format specifiers can be applied to any variable debugging display, such as the watch window or immediate window. To use a format specifier, enter the varible specifier followed by a comma and then the format specifier. `stringWhoShallNotBeNamed,nq`

- `nq`

  Removes quotes from the displayed string
  
- `nse`

  Specifies that the expression should be evaluated with no side effects if possible. If the expression must be evaluated instead of interpreted, an error will be shown.

- `hidden`

  Includes hidden members in the output.

- `results`

  For use with `IEnumerable` and `IEnumnerable<T>` types. Displays the results of the query expresion. 


## FAQ

### Missing errors in the Editor or Error List

Try deleting the `.sou` file located at `<SolutionFolder>\.vs\<ProjectName>\v16\.sou`.

The `.sou` file contains user-defined solution settings, such as breakpoints and debug options. It can sometimes become corrupted causing erratic behavior.

The file will get recreated when reloading the solution.