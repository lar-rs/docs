# Running `docs` in Continuous Integration

While the following examples use Travis CI, their principles should
straightforwardly transfer to other continuous integration providers as well.

## Ensuring Your Book Builds and Tests Pass

Here is a sample Travis CI `.travis.yml` configuration that ensures `mdocs build` and `mdocs test` run successfully. The key to fast CI turnaround times
is caching `mdbook` and `mdocs` installs, so that you aren't compiling `mdocs` on every CI
run.

```yaml
language: rust
sudo: false

cache:
  - cargo

rust:
  - stable

before_script:
  - (test -x $HOME/.cargo/bin/cargo-install-update || cargo install cargo-update)
  - (test -x $HOME/.cargo/bin/mdbook || cargo install --vers "^0.1" mdbook)
  - cargo install-update -a
  - (test -x $HOME/.cargo/bin/mdocs || cargo install --git https://github.com/smolkov/mdocs.git)

script:
  - cd path/to/mybook && mdocs build && mdbook test
```

## Deploying Your Book to GitHub Pages

Following these instructions will result in your book being published to GitHub
pages after a successful CI run on your repository's `master` branch.

First, create a new GitHub "Personal Access Token" with the "public_repo"
permissions (or "repo" for private repositories). Go to your repository's Travis
CI settings page and add an environment variable named `GITHUB_TOKEN` that is
marked secure and *not* shown in the logs.

Then, append this snippet to your `.travis.yml` and update the path to the
`book` directory:

```yaml
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_TOKEN
  local-dir: path/to/mybook/book
  keep-history: false
  on:
    branch: master
```

That's it!


## Deploying to GitLab