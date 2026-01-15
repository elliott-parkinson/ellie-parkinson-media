#!/bin/sh
set -e

if [ -d .git ]; then
  git pull --rebase
fi

deno task start
