#!/usr/bin/env bash
# Deploy the built site to the `gh-pages` branch (GitHub Pages: deploy from branch).
# Uses the personal GitHub token stored in the macOS Keychain as 'gh-personal'
# (the same one `gh-p` uses). Run with: npm run deploy
set -euo pipefail

cd "$(dirname "$0")"

echo "→ Building…"
npm run build

TOKEN="$(security find-generic-password -s gh-personal -a "$USER" -w)" || {
  echo "Token 'gh-personal' not found in Keychain." >&2
  exit 1
}
REMOTE="https://x-access-token:${TOKEN}@github.com/reidemeister94/reidemeister94.github.io.git"

echo "→ Publishing dist/ to gh-pages…"
rm -rf dist/.git
git -C dist init -q
git -C dist checkout -q -B gh-pages
git -C dist add -A
git -C dist -c user.name="Silvio Pavanetto" -c user.email="silvio.pavanetto@gmail.com" \
  commit -q -m "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -C dist push -q --force "$REMOTE" gh-pages
rm -rf dist/.git

echo "✓ Deployed → https://reidemeister94.github.io"
