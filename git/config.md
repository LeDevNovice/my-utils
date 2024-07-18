# Git Config

#### Change locally the username and email linked to the commits of a project.
_This is a useful command when I am working on a computer that have another globally git configuration that I don't want to erase._
```bash
git config user.name "<username>"
git config user.email "<email>"
```

#### Verify the username and email that will be linked to the commits of a project.
_This is a useful command when I want to see if the username and the email that will be displayed as author of the commits in the project are the ones I really want._
```bash
git var GIT_AUTHOR_IDENT
// username <email> timestamp

git var GIT_COMMITTER_IDENT
// username <email> timestamp
```