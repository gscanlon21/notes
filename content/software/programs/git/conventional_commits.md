+++
title = "Conventional Commits"
updated = 2021-05-24

[extra]
site = "https://www.conventionalcommits.org"
version = "1.0.0"
+++

{{ hidden() }}

# Conventional Commits
A specification for adding human and machine readable meaning to commit messages


## Format
```
type(scope): subject

Body
Footer
```

## Type
**feat** - A New Feature

**fix** - A bug fix

**docs** - Changes in documentation

**style** - Styles changes, formatting, missing semicolons or whitespace

**refactor** - Code changes that neither fixes a bug or adds a feature

**perf** - Changes that improve performance

**test** - Add missing tests

**chore** or **build** - Changes to the build process

**improvement** - Improves a current implementation without adding a new feature or fixing a bug

## Scope

A scope is provided in paranthesis after a type. A scope is a phrase describing parts of the code affected by the changes. For example "(userservice)"

## Subject

The subject contains a short description of the applied changes

## Body (Optional)

Must begin one blank line after the description. Can provide additional contextual information

Used to indicate breaking changes. For breaking changes the body must start with "BREAKING CHANGE"

## Footer (Optional)

Use to reference issues affected by the code changes. For example "Fixes #13"

Can also be used to indicate breaking changes by starting with "BREAKING CHANGE"

## Eamples

```
feat(store): add purchase order button
```

```
docs(readme): document how to get started
```