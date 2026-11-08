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
