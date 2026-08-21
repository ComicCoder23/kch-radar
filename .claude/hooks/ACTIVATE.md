# Activating the git guardrails hook

The hook script `block-dangerous-git.sh` in this folder is installed but **not yet active** — activation is a deliberate human step because it changes agent behaviour in every future Claude Code session on this repo.

To activate, create `.claude/settings.json` with:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-dangerous-git.sh"
          }
        ]
      }
    ]
  }
}
```

What it blocks (AAL-tweaked from upstream): force-pushes, pushes to `main`/`master`, `git reset --hard`, `git clean -f`, `git branch -D`, `git checkout .` / `git restore .`. Plain feature-branch pushes stay allowed.

Verify after activating:

```bash
echo '{"tool_input":{"command":"git push origin main"}}' | .claude/hooks/block-dangerous-git.sh
# should print BLOCKED and exit 2
```
