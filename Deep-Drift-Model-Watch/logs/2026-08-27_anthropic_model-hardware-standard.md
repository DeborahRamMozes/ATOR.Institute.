# Anthropic — Model Hardware Standard — Agent-to-Physical-Device Orchestration

- Detected: 2026-09-06 20:22 Asia/Jakarta
- Announcement date: 2026-08-27
- Release/availability date: 2026-08-27 research preview
- Rollout status: research preview with selected scientific labs and advanced manufacturers
- Affected plans/regions: research-preview partners; model-agnostic standard intended for programmable devices
- Official source: Anthropic, “Previewing the Model Hardware Standard”
- Evidence strength: High
- Retest priority: High

## What changed

Anthropic opened a research preview of the Model Hardware Standard (MHS), a shared specification for AI agents to safely operate physical devices. MHS standardizes device drivers, discovery, state, procedures, and control through primitives such as read and write, and supports MCP, command-line interfaces, and code APIs. Anthropic reports that agents can coordinate multiple instruments, update parameters in real time, detect faults, and in some cases recover from hardware errors without intervention. The standard is model-agnostic and intended to work with programmable hardware.

## Official fact vs inference

### Official fact
- MHS is in research preview with selected labs and manufacturers.
- It can orchestrate multiple devices through a standardized interface.
- Anthropic reports examples involving lab automation, microscopy, robotics, and quantum-computing equipment.
- The standard is model-agnostic and can be accessed through standard protocols such as MCP.

### Deep Drift inference
- This materially changes the definition of an agentic capability test because the model can now be evaluated at the boundary between digital reasoning and physical actuation.
- It is not evidence that Claude independently understands physical systems; Anthropic explicitly reports remaining limitations and need for expert oversight.

## Why this matters to Deep Drift

The MHS preview creates a new agent/tooling layer that can change comparative results even when the underlying model is unchanged. Deep Drift should distinguish model reasoning from the capabilities supplied by a standardized hardware harness. Provenance must record which actions were selected by the model, which were deterministic driver operations, and which safety constraints blocked or altered execution.

## Retest recommendation

- Existing test to rerun: long-horizon agent/tool-use tests where tool state changes across multiple steps.
- Additional test to add: DD-MHS-01 Physical-Harness Boundary Test, separating model decisions, tool execution, deterministic scripts, safety interlocks, and recovery behavior.
- Variables to hold constant: hardware configuration, driver version, tool permissions, safety constraints, agent model/version, task specification, and observation channels.
- Likely confounders: hardware latency, driver quality, deterministic automation, human approvals, physical safety interlocks, and model-specific harness tuning.

## Comparative dimensions affected

- [ ] Memory / continuity
- [ ] Own-chat-history retrieval
- [ ] Cross-chat / project / folder retrieval
- [x] Indexing / compilation
- [x] Context / reasoning
- [x] Tools / agents
- [ ] Image generation
- [ ] Image editing
- [ ] Visual identity / personality fidelity
- [ ] API pricing
- [ ] Subscription packaging
- [x] Usage limits / access / regions

## Sources

1. Anthropic, “Previewing the Model Hardware Standard,” Aug. 27, 2026.
