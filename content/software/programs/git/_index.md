+++
title = "Git"
description = "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
sort_by = "title"

[extra]
site = "https://git-scm.com/"
updated = 2027-01-01
version = "2.30.1"
+++

{{ hidden() }}


# Git

## Commands

### `git update-index`

`--skip-worktree`
: Useful when you instruct git not to touch a specific file ever because developers should change it. For example, if the main repository upstream hosts some production-ready configuration files and you don’t want to accidentally commit changes to those files, --skip-worktree is exactly what you want.

`--assume-unchanged`
: Assumes that a developer shouldn’t change a file. This flag is meant for improving performance for non-changing folders like SDKs.


# Common Errors

**Git push fails with 'missing tree'**
: Not sure what causes this, but one of two things will usually clear it up. `Fetch` first and then run `git push --no-thin` or `git gc --aggressive --prune=now`.



# Frequently Asked Questions

**How to split up a large (feature) branch?**
: - Pull and make sure the feature branch is up-to-date with main.
: - Checkout a new branch from the main branch.
: - Merge the feature branch into the working tree.
: - Unstage or discard unwanted changes and commit staged changes.


# Git Maintenance

**Squash all Commits**
: ```powershell

  git checkout --orphan tempBranch
  git add -A # Add all files and commit them
  git commit -m "Squash everything into one commit"
  git branch -D main # Deletes the original main branch
  git branch -m main # Rename the current branch to main
  git push -f origin main # Force push main branch to remote
  git gc --aggressive --prune=all # Remove the old files
  ```

**Shrinking the .git Folder**
: Use `-f` to "drop all old deltas".
: ```powershell
  git repack -a -d --depth=250 --window=250 #-f
  ```
  ###### [Source](https://gcc.gnu.org/legacy-ml/gcc/2007-12/msg00165.html)


**Backup Repository**
: The bundle itself functions as a repo; you can restore by cloning the bundle or adding it as a remote.
: ```powershell
  git bundle create backup.bundle --all
  ```

