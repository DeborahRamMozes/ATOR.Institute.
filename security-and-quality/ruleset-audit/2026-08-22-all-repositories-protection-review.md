# ATOR GitHub Protection Review
## All Repository Ruleset and Deletion-Prevention Audit

**Audit date:** 2026-08-22  
**Audit time:** 11:46 ICT  
**Auditor:** ATOR Institute GitHub Connector Review  
**Scope:** DeborahRamMozes owned repositories visible to the connected GitHub account  
**Status:** ACTION REQUIRED IN GITHUB UI FOR TRUE RULESET ENFORCEMENT

## Executive finding

The connected GitHub account can see six repositories under DeborahRamMozes. Five repositories with a visible `main` branch currently report `protected: false` through the GitHub branch endpoint. One profile repository returned `Branch not found` for `main`, which means it has no normal protected default branch state available through the checked endpoint.

The present connector can read repositories, read branches, create files, create issues, create branches, create pull requests, update files, and delete files when instructed. The loaded connector actions do not expose a GitHub repository-ruleset creation endpoint. That means this audit can document and prepare the protection program, but final ruleset enforcement must be switched on inside GitHub Settings, or through an endpoint/tool that exposes Rulesets or Branch Protection mutation.

This distinction matters. A written policy file does not prevent deletion. A GitHub Ruleset can.

## Repositories reviewed

| Repository | Default branch | Branch status observed | Last observed head | Immediate risk |
|---|---:|---|---|---|
| `DeborahRamMozes/DeborahRamMozes` | `main` listed in repo metadata | `main` branch fetch returned `Branch not found` | none observed | Empty/profile repo or no initialized branch. Needs initialization or archival decision. |
| `DeborahRamMozes/BLACK-PAPER` | `main` | `protected: false` | `1c03625dac391af5f2fdfcf0a471d253796e525f` | High. Core Black Paper authorship archive can be deleted or force-pushed if no ruleset is enforced. |
| `DeborahRamMozes/KUMPULAN-KRITIK` | `main` | `protected: false` | `d2741bc04379d02b6ae49d18a506b59c6e4ce3d0` | High. Critical art writing archive lacks branch protection. |
| `DeborahRamMozes/ATOR.Institute.` | `main` | `protected: false` | `f4ed80f598299271f154acafbb2161e2fc8bf59c` | Critical. Institute-level research logs, protocols, and LLM observatory data lack branch protection. |
| `DeborahRamMozes/SANGHYANG-PANGELING-BUANA` | `main` | `protected: false` | `ef606967b8af5e748eb7d05193944ce9d2fa4159` | High. Prior head message itself records a directory deletion. Protection should prevent casual destructive commits. |
| `DeborahRamMozes/Madam_Senikrat` | `main` | `protected: false` | `7065081e46a1e9638271250e012514d1236e3961` | Medium to high. Art/app archive lacks deletion resistance. |

## Immediate protection objective

ATOR repositories must not depend on memory, goodwill, or careful clicking. GitHub must carry mechanical refusal.

The rule is simple:

```text
main must not accept deletion, force push, unreviewed direct mutation, or silent destructive replacement.
```

## Required GitHub Ruleset: `ATOR-main-archive-protection`

Create this ruleset in every active repository.

### Ruleset name

```text
ATOR-main-archive-protection
```

### Enforcement status

```text
Active
```

Use `Evaluate` only for testing. Archive repositories need active protection.

### Target branches

```text
main
```

Use branch targeting criteria:

```text
Include default branch
```

or exact branch name:

```text
main
```

### Bypass list

Recommended:

```text
Bypass list empty
```

If bypass is unavoidable, restrict it to the repository owner only. Do not add broad teams, apps, bots, or agents unless their purpose is documented.

### Branch rules to enable

Enable these controls where GitHub plan and repository settings allow them:

```text
Restrict deletions
Restrict force pushes
Require a pull request before merging
Require approvals
Dismiss stale pull request approvals when new commits are pushed
Require conversation resolution before merging
Block force pushes
Require linear history
Require signed commits, where practical
Require status checks, once audit workflows exist
```

### Pull request requirement

Recommended minimum:

```text
Required approvals: 1
Require review from Code Owners: true after CODEOWNERS exists
Dismiss stale approvals: true
Require conversation resolution: true
```

### Status checks

Status checks can only be required after workflows exist and have run at least once. The future checks should include:

```text
repository-integrity-audit
no-large-deletion-without-approval
bmhs-canon-audit, for BMHS/canon repositories
black-paper-structure-audit, for BLACK-PAPER
llm-observatory-data-audit, for ATOR.Institute.
```

## Repository-specific priority

### Priority 1. `DeborahRamMozes/ATOR.Institute.`

Reason: this repository contains institute-level research, Deep Drift logs, LLM update watch, protocol patches, and observatory infrastructure.

Protection target:

```text
main active ruleset immediately
no direct destructive edits
PR required
conversation resolution required
no deletion
no force push
```

### Priority 2. `DeborahRamMozes/BLACK-PAPER`

Reason: this repository holds Black Paper nodes, failure reports, AI/human labour theory, DSCC, itch protocol, and human sovereignty materials.

Protection target:

```text
main active ruleset immediately
CODEOWNERS for /nodes, /evidence, /implementation, root Black Paper files
no deletion without explicit issue reference
```

### Priority 3. `DeborahRamMozes/KUMPULAN-KRITIK`

Reason: this repository stores critical art writing and case-study material.

Protection target:

```text
main active ruleset
PR required
no force push
no deletion
```

### Priority 4. `DeborahRamMozes/SANGHYANG-PANGELING-BUANA`

Reason: previous observed head commit is a deletion commit. The repository needs deletion resistance.

Protection target:

```text
main active ruleset
restrict deletions
require PR
protect cultural archive folders
```

### Priority 5. `DeborahRamMozes/Madam_Senikrat`

Reason: project archive and app/prototype materials should not be deleted accidentally.

Protection target:

```text
main active ruleset
restrict deletions
require PR
```

### Priority 6. `DeborahRamMozes/DeborahRamMozes`

Reason: repository appears empty or not initialized from the checked endpoint.

Protection target:

```text
initialize intentionally or archive intentionally
then protect default branch if content becomes meaningful
```

## No Deletion Law for repositories

Repository deletion protection is not only a GitHub setting. It is a research-governance principle.

```text
A repository that stores authorial canon, raw research, protocol, criticism, or Black Paper material must never depend on reversible memory alone.
```

Every destructive action must record:

```text
repository
path
deletion reason
human approval
issue or PR reference
replacement path
backup state
commit SHA
author
reviewer
```

## Required future files per repository

Each repository should receive:

```text
.github/CODEOWNERS
.github/pull_request_template.md
.github/workflows/repository-integrity-audit.yml
SECURITY.md
REPOSITORY_PROTECTION_POLICY.md
```

These files do not replace GitHub Rulesets. They support Rulesets.

## ATOR warning

The screenshot shows the GitHub Rulesets screen. That is the correct place to enforce protection. The visible page shows a new branch ruleset form with enforcement disabled and no branch targeting configured. A ruleset in that state protects nothing.

A repository is not protected because a settings page is open.

A repository is protected only when:

```text
ruleset exists
ruleset is active
target branch is configured
rules restrict deletion and force push
required review/status checks are enforced
```

## Connector limitation

The currently loaded GitHub connector actions do not include a Ruleset creation or Branch Protection update mutation. This audit therefore does not claim that rulesets were activated.

Verified work completed here:

```text
repository inventory reviewed
main branch protection state checked where branch exists
central protection audit created
ruleset specification written
priority order assigned
manual enforcement instructions recorded
```

Work still requiring GitHub Settings UI or proper Rulesets API access:

```text
activate ruleset per repository
configure target branch
turn on restrict deletion
turn on restrict force push
require pull request
require approvals
require conversation resolution
add status checks after workflows exist
```

## Final operational rule

GitHub is archive infrastructure only when refusal is mechanical.

A file can be rewritten. A branch can be deleted. A folder can vanish under one tired click.

Rulesets exist because human attention is not a backup system.

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
