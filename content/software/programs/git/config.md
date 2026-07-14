+++
title = "Git Config"
description = ""

[extra]
updated = 2026-01-01
see_also = []
+++


{{ hidden() }}


###### .git/config
```yaml
[user]
	name = NAME
	email = EMAIL
[core]
	# Ignores case differences in file names?
	ignorecase = false
[remote "origin"]
	url = URL
	fetch = +refs/heads/*:refs/remotes/origin/*
[push]
  # All submodules that changed in the revisions to be pushed will be pushed.
	recurseSubmodules = on-demand
[branch "main"]
	remote = origin
	merge = refs/heads/main
	vscode-merge-base = origin/main

# SmartGit specific settings.
[smartgit "submodule"]
	fetchalways = true
```
