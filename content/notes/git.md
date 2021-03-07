+++
title = "Git"
updated = 2021-03-07

[extra]
site = "https://git-scm.com/"
version = "2.30.1"
references = [
    { mark = "1", title = "CC-BY-SA Borealid", href = "https://stackoverflow.com/questions/13630849/git-difference-between-assume-unchanged-and-skip-worktree" }
]
+++

# Git
> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

##  git update-index<sup>[1]</sup>

### --skip-worktree
Useful when you instruct git not to touch a specific file ever because developers should change it. For example, if the main repository upstream hosts some production-ready configuration files and you don’t want to accidentally commit changes to those files, --skip-worktree is exactly what you want.

### --assume-unchanged
Assumes that a developer shouldn’t change a file. This flag is meant for improving performance for non-changing folders like SDKs.