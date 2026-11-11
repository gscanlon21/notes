+++
title = "Git Config"
description = ""

[extra]
updated = 2027-01-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}


# Overview

**Path**
: `.git/config`

**Submodule Path**
: `.git/modules/_notes/config`


# Recommended Settings

###### .git/config
```yaml
[user]
```
```yaml
    name = NAME
    email = EMAIL
```
```yaml
[core]
```
```yaml
    # Ignores case differences in file names?
    ignorecase = false
```
```yaml
[remote "origin"]
```
```yaml
    url = URL
    fetch = +refs/heads/*:refs/remotes/origin/*
```
```yaml
[push]
```
```yaml
    # If set to "true" assume --set-upstream on default push when no upstream tracking exists for the current branch.
    # It is useful if by default you want new branches to be pushed to the default remote (like the behavior of 'push.default=current') and you also want the upstream tracking to be set.
    autoSetupRemote = true
```
```yaml
    # All submodules that changed in the revisions to be pushed will be pushed.
    recurseSubmodules = on-demand
```
```yaml
[branch "main"]
```
```yaml
    remote = origin
    merge = refs/heads/main
    vscode-merge-base = origin/main
```
```yaml
[submodule "content/submodule"]
```
```yaml
    update = rebase
```
```yaml
# SmartGit Specific Settings
[smartgit "submodule"]
```
```yaml
    fetchalways = true
```
