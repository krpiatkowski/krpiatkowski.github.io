#!/usr/bin/env bash
set -e

git checkout master || git checkout -b master

git merge master --no-ff --strategy-option theirs --no-edit --allow-unrelated-histories

npm run build

git add --force --all dist/

git status

git commit --allow-empty -m "Updating master with latest code built on $(date)"

git push origin `git subtree split --prefix dist master`:refs/heads/master --force

git checkout -

git branch -D master

echo -e "\e[32mSuccess!"