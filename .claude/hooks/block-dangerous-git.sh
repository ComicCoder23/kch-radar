#!/bin/bash
# AAL-TWEAKED: 2026-08-21 — upstream blocks ALL `git push`, but this repo's
# protocol (AGENTS.md) requires agents to push feature branches and open PRs
# for Alan's review. Tweak: allow feature-branch pushes; still block
# force-pushes, pushes to main/master, and destructive local git commands.
# Upstream: skills/matt-pocock/misc/git-guardrails-claude-code (MIT).

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

DANGEROUS_PATTERNS=(
  "git reset --hard"
  "git clean -fd"
  "git clean -f"
  "git branch -D"
  "git checkout \."
  "git restore \."
  "push --force"
  "push -f\b"
  "reset --hard"
  "git push[^&|;]*[[:space:]:](main|master)\b"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qE "$pattern"; then
    echo "BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this. Feature-branch pushes are allowed; main/master pushes and force-pushes require Alan." >&2
    exit 2
  fi
done

exit 0
