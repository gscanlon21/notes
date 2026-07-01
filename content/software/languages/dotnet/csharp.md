+++
title = "CSharp"
updated = 2021-05-23
+++

{{ hidden() }}

# CSharp

## Async/Await

### .ConfigureAwait(bool)

`.ConfigureAwait(bool)` is often seen appended onto a Task method call in client libraries.

Each Task in C# has a SynchronizationContext that determines what thread continues the exectuion of the method when the Task is completed.

In ASP.NET, the SynchronizationContext guarantees that the calling thread is the same as the continuation thread. This guarantee allows the caller to use [ThreadStatic] variables in the Request lifetime without having to worry about them going out of scope after a Task resumes.

`.ConfigureAwait(false)` tells the SynchronizationContext to drop the guarantee to resume the execution of the method on the same thread it left off from -- allowing the caller to bypass any locks/deadlocks that occur until a specific thread can free up.
