+++
title = "Git Performance"
+++

{{ hidden() }}

# Config

Enable Git optimizations for repositories with many files.
```powershell
git config feature.manyFiles true
```

Update the index format to version 4 for better performance with large repositories.
```powershell
git update-index --index-version 4
```

Enable filesystem monitoring to speed up `git status` and similar commands. This uses the built-in fsmonitor on supported systems, reducing the need to scan the entire working directory.
```powershell
git config core.fsmonitor true
```

Enable caching of untracked files to speed up commands like `git status`. This avoids repeatedly scanning for untracked files.
```powershell
git config core.untrackedCache true
```

Enable commit graph for faster operations like `git log`, `git blame`, and `git rebase`. This pre-computes and stores a graph of commits.
```powershell
git config core.commitGraph true
```

Automatically update the commit graph during `git fetch`, keeping it in sync with the latest changes.
```powershell
git config fetch.writeCommitGraph true
```

**Optional**: Enable sparse-checkout if working with very large monorepos. This allows you to check out only a subset of the repository.
```powershell
# git sparse-checkout init --cone
# git sparse-checkout set <desired-directory>
```

**Optional**: Enable parallel fetch and clone operations to speed up these processes.
```powershell
# git config --global fetch.parallel 4
```

**Optional**: Set the pack compression to a lower level (faster) during fetch and push operations. This is useful in very large repositories. Not recommended for development!
```powershell
# git config pack.threads "1"
# git config pack.windowMemory "100m"
```

**Optional**: Adjust the garbage collection settings to run less frequently. This prevents slowdowns during frequent commits or fetches.
```powershell
# git config gc.auto 1000
# git config gc.autoPackLimit 1000
```
