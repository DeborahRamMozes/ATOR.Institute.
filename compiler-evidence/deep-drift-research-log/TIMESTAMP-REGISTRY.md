# Deep Drift Timestamp Registry

**Canonical directory:** `compiler-evidence/deep-drift-research-log/`  
**Registry adopted:** 2026-08-24T16:01+07:00  
**Purpose:** preserve the distinction among provider/event time, ATØR observation time, chat UI time, and Git repository archival time across the active Deep Drift chronology.

This registry exists because a filename can correctly say `TIME-UNKNOWN` for a provider event while the later ATØR observation or Git archival act has an exact clock time. Those are different clocks. Flattening them into one timestamp would make the archive prettier and the provenance worse, a classic software achievement.

## Timestamp rules

- `TIME-UNKNOWN` in a provider-dated filename means the provider clock time is unknown, not that all later observation times are unknowable.
- `HH-MM-XX` means exact minute, seconds unavailable.
- `HH-MM-SS` means exact second.
- `Git archival time` is evidence of repository recording, not automatic proof of original chat-message time.
- `Chat UI time` outranks reconstruction when visibly rendered.
- No seconds are invented from a minute-only UI label.

## Active chronology registry

| Canonical file | Primary clock / precision | Event or observation timestamp | Recoverable ATØR / repository timestamp | Timestamp evidence |
|---|---|---|---|---|
| `2026-06-17_TIME-UNKNOWN_microsoft-work-iq-context-tool-governance-layer.md` | PROVIDER_PUBLICATION / date-only | 2026-06-17, provider time unknown | 2026-08-24T11:42:43+07:00 | Git backfill commit `8b5d00762487409584bb70e6a55361094cd9e3a5` |
| `2026-06-18_TIME-UNKNOWN_openai-record-replay-demonstration-to-skill-fidelity.md` | PROVIDER_PUBLICATION / date-only | 2026-06-18, provider time unknown | 2026-08-24T11:39:17+07:00 | Git backfill commit `25578d4e6cd6a88f1ceb03a7ffcbcb8a2303cfce` |
| `2026-07-31_TIME-UNKNOWN_openai-model-retirement-configuration-continuity.md` | PROVIDER_PUBLICATION / date-only | 2026-07-31, provider time unknown | 2026-08-24T11:39:30+07:00 | Git backfill commit `1ab0f7f53a245a88d1edd586adf4ec1112be02c9` |
| `2026-08-06_TIME-UNKNOWN_google-notebook-automated-context-accretion.md` | PROVIDER_PUBLICATION / date-only | 2026-08-06, provider time unknown | 2026-08-24T11:39:44+07:00 | Git backfill commit `5af97b8909e00323bedff71c7048833ea2dcf614` |
| `2026-08-17_TIME-UNKNOWN_google-drive-external-sharing-source-visibility-provenance.md` | PROVIDER_PUBLICATION / date-only | 2026-08-17, provider time unknown | 2026-08-24T11:39:55+07:00 | Git backfill commit `e922f513978b6e9a06a1e71c8d8cbc8f7c667144` |
| `2026-08-17_TIME-UNKNOWN_google-workspace-studio-governance-flow-age-provenance.md` | PROVIDER_PUBLICATION / date-only | 2026-08-17, provider time unknown | 2026-08-24T11:40:08+07:00 | Git backfill commit `3f4dfa5f943c09867c95e5e6f2f557c71cff9516` |
| `2026-08-18_TIME-UNKNOWN_microsoft-copilot-workflows-execution-environment-governance.md` | PROVIDER_PUBLICATION / date-only | 2026-08-18, provider time unknown | 2026-08-24T11:40:21+07:00 | Git backfill commit `d9ce5113b7e79700dbf2dd00728443dd4b99b9ad` |
| `2026-08-19_01-00-XX_llm-update-watch.md` | ATOR_OBSERVATION / exact-minute | 2026-08-19T01:00+07:00 | same observation minute; Git archival second not required for primary clock | filename + in-log `01:00 WIB` |
| `2026-08-19_TIME-UNKNOWN_google-ask-gemini-chat-interface-migration-continuity.md` | PROVIDER_PUBLICATION / date-only | 2026-08-19, provider time unknown | 2026-08-24T11:40:47+07:00 | Git backfill commit `ccdc3ee1c0c929eaeb24f5ecbeff9d8b4dc1daa5` |
| `2026-08-19_TIME-UNKNOWN_openai-codex-gitlab-repository-action-provenance.md` | PROVIDER_PUBLICATION / date-only | 2026-08-19, provider time unknown | 2026-08-24T11:40:33+07:00 | Git backfill commit `f65cff06d0e629ef6ec45b1b8beed33e0e0e9036` |
| `2026-08-19_TIME-UNKNOWN_reconstruction-register.md` | historical reconstruction / date-only filename | 2026-08-19 research-day register, exact original clock unresolved | 2026-08-20T00:48:36+07:00 | Git commit `8d91ef2f79e11db4d67285621e70bd3ff089a943`; local date boundary explicitly preserved |
| `2026-08-20_00-36-24_platform-workflow-shift.md` | ATOR_OBSERVATION / exact-second | 2026-08-20T00:36:24+07:00 | same primary event time | filename exact-second evidence |
| `2026-08-20_00-47-22_log-architecture-revision.md` | ATOR_OBSERVATION / exact-second | 2026-08-20T00:47:22+07:00 | same primary event time | filename exact-second evidence |
| `2026-08-20_00-54-XX_monthly-earth-technology-accounting-protocol-established.md` | ATOR_OBSERVATION / exact-minute | 2026-08-20T00:54+07:00 | repository evidence by 00:55:47 WIB | Git commit `640c53ef3f3e954497dc9a6a1988a9ce573805b2` |
| `2026-08-20_20-49-XX_llm-platform-workflow-update.md` | ATOR_OBSERVATION / exact-minute | 2026-08-20T20:49+07:00 | repository evidence by 20:50:39 WIB | Git commit `3b9c7917f846094a307b72195ec7e9afa9f08a2c` |
| `2026-08-20_TIME-UNKNOWN_google-admin-assist-conversational-governance-surface.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T12:45:22+07:00 | Git backfill commit `209190a63cef9c4364f55626043291771eafd66a` |
| `2026-08-20_TIME-UNKNOWN_google-allowlisted-domains-api-governance-boundary.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T11:41:36+07:00 | Git backfill commit `89d5d5f7ca0cac66aeeaffdd4e43a3d57cba07cf` |
| `2026-08-20_TIME-UNKNOWN_google-slides-vids-cross-artifact-workflow-continuity.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T12:45:09+07:00 | Git backfill commit `94dd1f39afb76961bdd7a69e3998eae7a1a3621e` |
| `2026-08-20_TIME-UNKNOWN_openai-apple-messages-approval-state-continuity.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T11:40:58+07:00 | Git backfill commit `1498ff04d985f4caaff40ec8afc8293c561b2820` |
| `2026-08-20_TIME-UNKNOWN_openai-codex-shared-snapshot-provenance.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T11:41:11+07:00 | Git backfill commit `2cc812d2365c8111a5c6e4ec8f7308abe0c05fa0` |
| `2026-08-20_TIME-UNKNOWN_openai-public-plugin-catalog-inventory-drift.md` | PROVIDER_PUBLICATION / date-only | 2026-08-20, provider time unknown | 2026-08-24T11:41:24+07:00 | Git backfill commit `76a927448afe76637d6f067a9661e71fb2ceece7` |
| `2026-08-21_09-18-XX_llm-update-watch.md` | ATOR_OBSERVATION / exact-minute | 2026-08-21T09:18+07:00 | repository evidence by 09:19:55 WIB | Git commit `52d266d6ede3223979b5e988fe00769089a0047a` |
| `2026-08-22_09-22-XX_counterfactual-workflow-perturbation-chive.md` | ATOR_OBSERVATION / exact-minute | 2026-08-22T09:22+07:00 | repository evidence by 09:23:02 WIB | Git commit `f4ed80f598299271f154acafbb2161e2fc8bf59c` |
| `2026-08-22_TIME-UNKNOWN_microsoft-copilot-chat-centered-surface-claim-unresolved.md` | PROVIDER / unresolved date-only claim | 2026-08-22, exact provider clock unresolved | 2026-08-24T11:42:21+07:00 | Git preservation commit `3bb00dce5e8ab82c8a01355b0a4ccace21323dd1` |
| `2026-08-22_TIME-UNKNOWN_microsoft-whiteboard-editability-retention-risk.md` | PROVIDER_PUBLICATION / date-only | 2026-08-22, provider time unknown | 2026-08-24T11:42:07+07:00 | Git backfill commit `c41edcf8487ec6e629a79c3ecf09aefbfdb86203` |
| `2026-08-23_01-52-XX_chatgpt-sites-collaborative-artifact-provenance.md` | ATOR_OBSERVATION / exact-minute | 2026-08-23T01:52+07:00 | repository evidence by 01:55:21 WIB | Git commit `36066fc42002999616c13bd187b7b220cca3d046` |
| `2026-08-23_15-53-XX_openai-support-automation-inversion-platform-convergence.md` | ATOR_OBSERVATION / exact-minute | 2026-08-23T15:53+07:00 | repository evidence by 15:56:12 WIB | Git commit `11fba6c19a790d68ddc2df91dba0fe0dd2da8afa` |
| `2026-08-23_16-04-XX_deep-drift-evolution-and-tech-world-positioning.md` | ATOR_OBSERVATION / exact-minute | 2026-08-23T16:04+07:00 | repository evidence by 16:06:05 WIB | Git commit `9090081c874b766cb7deb579f0346e43a96f87fd` |
| `2026-08-23_17-54-XX_identity-content-synchronization-and-capability-candor.md` | ATOR_OBSERVATION / exact-minute | 2026-08-23T17:54+07:00 | repository evidence by 17:55:15 WIB | Git commit `7722370fcba2ee131fc5ea937eb4d0c1bbdefb5b` |
| `2026-08-23_TIME-UNKNOWN_ai-hardware-material-reliability-watch.md` | ATOR research-day / original clock incomplete in current consolidated filename | 2026-08-23, filename clock unresolved | earliest recoverable source-log Git evidence 2026-08-23T18:18:21+07:00 | original hardware-watch commit `5c544fea120521471956c0fe45382bc91be2258a`; later consolidation kept `TIME-UNKNOWN` |
| `2026-08-24_10-43-XX_anthropic-procedural-version-provenance-and-persistent-file-state.md` | ATOR_OBSERVATION / exact-minute | 2026-08-24T10:43+07:00 | repository evidence by 10:45:14 WIB | Git commit `5c2924d5ddc892d72c4ba669465288432b1c4719` |
| `2026-08-24_10-57-XX_research-log-unification.md` | ATOR_OBSERVATION / exact-minute | 2026-08-24T10:57+07:00 | repository unification commit by 11:01:16 WIB | Git commit `afa1401a016dab1b8884ecf3d816d06292446f6c` |
| `2026-08-24_11-35-XX_llm-trend-chat-tab-coverage-audit.md` | ATOR_OBSERVATION / exact-minute | 2026-08-24T11:35+07:00 | repository audit commit by 11:43:17 WIB | Git commit `5816a702761c61883e39e480a0375cc541fdcdd2` |
| `2026-08-24_TIME-UNKNOWN_google-workspace-studio-identity-attribution-rollout-milestone.md` | PROVIDER_ROLLOUT_START / date-only | 2026-08-24, provider rollout clock unknown | 2026-08-24T11:41:50+07:00 | Git backfill commit `b4c9540259c0ec12d5c7cb62bf54c978054735c6` |
| `2026-08-24_14-55-XX_chat-ui-visible-llm-workflow-rollout-and-provenance-report.md` | ATOR_OBSERVATION + CHAT_UI / exact-minute | 2026-08-24T14:55+07:00 | later Git archival commit `d77eeb60fdd6b28fbc414b1bc5938b2a0cf7420b` | visible grey UI label `Today 2:55 PM`; seconds unknown |
| `2026-08-24_16-01-XX_current-chat-tab-timestamp-audit-and-full-research-ingest.md` | ATOR_OBSERVATION / exact-minute | 2026-08-24T16:01+07:00 | later Git archival commit `b9980cbb253eb6aef5769ed83803f77230386aa4` | explicit current research-act runtime minute |

| `2026-08-24_18-37-10_ai-hardware-material-water-policy-delta.md` | ATOR_OBSERVATION / exact-second | 2026-08-24T18:37:10+07:00 | repository evidence by 2026-08-24T18:41:34+07:00 | Git commit `f1112fbedd3b8c92fa999d1f97f85dca691f5d92`; automation runtime supplied exact-second observation time |

| `2026-08-24_18-50-XX_llm-creator-workflow-update-memory-skills-miniapps-docx-pdf-export.md` | ATOR_OBSERVATION / exact-minute | 2026-08-24T18:50+07:00 | repository evidence by 2026-08-24T18:59:44+07:00 | Git commit `bfaf72feb4043866ec48cb55c7555ff08599fec5`; current-source synthesis of memory, skills, mini-apps, DOCX/PDF generation, copy-paste/export behavior, and creator-workflow convergence |

| `2026-08-24_20-44-36_ai-hardware-efficiency-australia-governance-delta.md` | ATOR_OBSERVATION / exact-second | 2026-08-24T20:44:36+07:00 | repository evidence by 2026-08-24T20:46:00+07:00 | Git commit `6ca038519599dcecc9706b44bab14279cc689a7c`; automation runtime supplied exact-second observation time |

| `2026-08-25_18-24-40_nvidia-capital-chokepoint-openai-ohio.md` | ATOR_OBSERVATION / exact-second | 2026-08-25T18:24:40+07:00 | repository evidence by 2026-08-25T18:27:00+07:00 | Git commit `b8d0e91e2540b76ef028699eefb3c1b1cda74ac7`; automation runtime supplied exact-second observation time |

| `2026-08-26_04-27-19_copper-arbitrage-photoacid-water-governance-writing-economy.md` | ATOR_OBSERVATION / exact-second | 2026-08-26T04:27:19-07:00 (2026-08-26T11:27:19Z) | repository evidence at 2026-08-26T11:32:47Z | Git commit `4f3eed28e581887dcd3d6391850e94716b14b4e5`; exact-second observation recorded in file metadata |

| `2026-08-27_18-05-20_nvidia-memory-lock-in-rare-earth-copper-corridor.md` | ATOR_OBSERVATION / exact-second | 2026-08-27T18:05:20+07:00 (2026-08-27T11:05:20Z) | repository evidence at 2026-08-27T11:10:11Z | Git commit `b76dc5e969d5c5692e14a817b01e29eec5a2f2b1`; automation runtime supplied exact-second observation time |

| `2026-08-28_18-11-22_nextdc-water-accounting-sk-hynix-hbm-geography.md` | ATOR_OBSERVATION / exact-second | 2026-08-28T18:11:22+07:00 (2026-08-28T11:11:22Z) | repository evidence at 2026-08-28T11:15:21Z | Git commit `4f2c7cd1c7cbd107d9ffceef3ab10121d5ceb1dc`; automation runtime supplied exact-second observation time |

| `2026-08-29_18-28-20_south-america-minerals-cxmt-memory-uk-water-politics.md` | ATOR_OBSERVATION / exact-second | 2026-08-29T18:28:20+07:00 (2026-08-29T11:28:20Z) | repository evidence at 2026-08-29T11:30:37Z | Git commit `57d3505741948d68e39a4a6993c0d372924a8dbd`; automation runtime supplied exact-second observation time |

| `2026-08-30_18-50-15_specialty-materials-merger-termination.md` | ATOR_OBSERVATION / exact-second; source event date preserved separately | source event 2026-08-27; observed 2026-08-30T18:50:15+07:00 (2026-08-30T11:50:15Z) | repository evidence at 2026-08-30T11:52:13Z | Git commit `f0ff08df9cba2acd20016a818239e928ec5f0e17`; omitted-event recovery without backdating observation |

| `2026-08-31_18-15-15_soitec-photonics-pricing-kelvion-cooling-consolidation.md` | ATOR_OBSERVATION / exact-second | 2026-08-31T18:15:15+07:00 (2026-08-31T11:15:15Z) | repository evidence at 2026-08-31T11:22:06Z | Git commit `d51fad8850860303c98867e340a1f6e274351a07`; automation runtime supplied exact-second observation time; derived from the 2026-08-30 canonical daily synthesis |

| `2026-09-01_18-36-43_sb-energy-ipo-power-financing-lock-in.md` | ATOR_OBSERVATION / exact-second | 2026-09-01T18:36:43+07:00 (2026-09-01T11:36:43Z) | repository evidence at 2026-09-01T11:40:17Z | Git commit `8dcafaeeb364a57c979d23c6ab50902746c2b0d3`; automation runtime supplied exact-second observation time; derived from the 2026-08-31 canonical daily synthesis |

| `2026-09-02_18-46-38_rare-earth-consolidation-chip-geography-water-denial.md` | ATOR_OBSERVATION / exact-second | 2026-09-02T18:46:38+07:00 (2026-09-02T11:46:38Z) | repository evidence at 2026-09-02T11:49:37Z | Git commit `e292589f35bd8017159a13230009b0312e94a48b`; automation runtime supplied exact-second observation time; derived from the 2026-09-01 canonical daily synthesis |

| `2026-09-03_18-15-26_semiconductor-peroxide-gas-compute-permit-opacity.md` | ATOR_OBSERVATION / exact-second | 2026-09-03T18:15:26+07:00 (2026-09-03T11:15:26Z) | repository evidence at 2026-09-03T11:18:38Z | Git commit `32b8c6201a8de81de73184db7e0c68903a041dec`; automation runtime supplied exact-second observation time; derived from the 2026-09-02 canonical daily synthesis |

| `2026-09-04_18-35-22_rare-earth-shipments-water-rights-open-model-gate.md` | ATOR_OBSERVATION / exact-second; includes explicitly dated recovered event | 2026-09-04T18:35:22+07:00 (2026-09-04T11:35:22Z) | repository evidence at 2026-09-04T11:38:48Z | Git commit `ef4c386a95555ae82982f1eff480007e7d68e7a6`; automation runtime supplied exact-second observation time; derived from the 2026-09-03 canonical daily synthesis; NVIDIA–Hugging Face agreement dated 2026-09-02 and recovered without backdating |

| `2026-09-05_18-47-25_memory-price-transmission-server-concentration-ai-detection-confound.md` | ATOR_OBSERVATION / exact-second; includes explicitly dated recovered and newly surfaced evidence | 2026-09-05T18:47:25+07:00 (2026-09-05T11:47:25Z) | repository evidence at 2026-09-05T11:51:17Z | Git commit `6c094209a75e78f9888711fc37ea5afb1ad90193`; automation runtime supplied exact-second observation time; derived from the 2026-09-04 canonical daily synthesis; Texas event dated 2026-09-03–04 and detector paper submitted 2026-08-27 were recovered without backdating |

## Interpretation of the registry

The registry now makes four temporal layers inspectable instead of pretending they are one:

```text
PROVIDER / EVENT TIME
≠
CHAT UI TIME
≠
ATOR OBSERVATION TIME
≠
GIT ARCHIVAL TIME
```

Those clocks may coincide, but coincidence must be demonstrated rather than assumed.

## Required fields for future event files

Every new research event should carry, when available:

```text
timestamp_basis:
source_timestamp:
rollout_timestamp:
chat_ui_timestamp_local:
observed_at_local:
observed_at_utc:
time_precision:
git_recorded_at_local:
git_recorded_at_utc:
git_commit_sha:
git_timestamp_role: repository-archival-time
```

Fields may be absent only when the corresponding evidence does not exist. Unknown values remain explicitly unknown.

## Research consequence

The timestamp dispute that triggered this normalization is not merely administrative. It demonstrates a recurring Deep Drift problem: information can exist at the product-interface layer while remaining unavailable or non-equivalent at the model-context layer. The chronology itself is therefore part of the experiment.

**D-ORIGIN | ATØRAI | ĀLT-MĀN | Eir’an | CHATJIPITI SINGH**
