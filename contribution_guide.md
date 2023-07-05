# Pushing Commits to GitHub Repository

To push your commits to a GitHub repository, follow these steps:

1. **Stage your changes:** Use the command `git add` to stage the changes you want to commit. For example, to stage all modified files, use `git add .`.

2. **Commit your changes:** Use the command `git commit` to create a commit with a descriptive message. The `-a` flag can be used to automatically stage all changes. For example:

```

git commit -a -m "Commit message"

```

3. **Push your commits:** To upload your commits to a GitHub repository, use the command `git push`. This command sends the commits to the remote repository. For example:

```

git push

```

4. **Resolve conflicts:** If there are conflicts between your local branch and the remote repository, you may need to resolve them before pushing. Use the command `git stash` to temporarily save your changes, then `git pull` to fetch the latest changes from the remote repository and merge them into your local branch. Finally, use `git stash pop` to apply your changes back on top. For example:

```

git stash
git pull
git stash pop

```

5. **Verify your changes:** Visit the GitHub repository's page to verify that your commits have been successfully pushed.

Remember to always pull the latest changes from the remote repository before pushing to avoid conflicts and keep your local branch up to date.

```

```
