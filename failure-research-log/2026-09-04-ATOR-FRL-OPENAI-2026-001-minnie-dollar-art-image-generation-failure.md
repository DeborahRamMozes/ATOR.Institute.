# ATØR INSTITUTE | FAILURE RESEARCH LOG

# WHEN THE IMAGE SYSTEM REPLACED THE SUBJECT, BLOCKED THE CORRECTION, AND HANDED THE LABOR BACK TO THE USER

## Minnie Mouse Dollar-Art Guidance Failure

**Document ID:** ATOR-FRL-OPENAI-2026-001  
**Artifact class:** Failure Research Log / Human-Correction-Burden Record  
**Classification:** Independent user-led system observation  
**Prepared for:** ATØR Institute  
**Program:** Deep Drift Research / Compiler and Tool Reliability  
**Observed system:** ChatGPT Work, image-generation tool, orchestration layer  
**Conversation date:** 4 September 2026  
**Exact message timestamps:** Not exposed in the available conversation record; not invented  
**Status:** Confirmed workflow failure; requested image unresolved  
**Evidence basis:** Direct conversation transcript, visible generated output, and returned tool errors  
**Institutional position:** Independent research; ATØR Institute is not affiliated with or acting on behalf of OpenAI.

---

# 1. RAW ITCH | D-ORIGIN

> A user supplied a visual reference, specified the exact character, described the desired dollar-art composition, requested black-and-white and color guidance, and still had to repeatedly explain that Minnie Mouse must not become a human girl.

The failure was not caused by an absent idea.

The user supplied the image.

The user supplied the character.

The user supplied the mood.

The user supplied the composition.

The user supplied the required objects.

The user supplied the production purpose.

The system first changed the subject, then blocked attempts to restore it, then burdened the user with explanations about internal tooling.

The machine converted a clear creative instruction into a human correction project.

---

# 2. ORIGINAL REQUEST

The user supplied an image of Minnie Mouse seated in Paris with a large pink bow, one gloved hand supporting her cheek, a visible Eiffel Tower, fashion imagery, and a predominantly pink palette.

The operational request was to:

1. transform the supplied character composition into dollar-art guidance for Cool Tricks Studio designers;
2. retain Minnie Mouse as the subject;
3. preserve the Eiffel Tower;
4. replace the remaining environment with stacked dollar bills, loose bills, gold coins, dollar signs, and romantic wealth imagery;
5. express the concept as “Minnie Mouse — Rich Love in Paris”;
6. produce an easy black-and-white sketch guide;
7. produce a corresponding pop-art color guide;
8. make the composition readable and manually reproducible at dollar-bill scale;
9. derive a reusable prompt system that could later be applied to other characters.

The request contained sufficient information to execute without a clarification question.

---

# 3. NON-NEGOTIABLE DESIGN CONTRACT

| Requirement | Required state |
|---|---|
| Main character | Minnie Mouse |
| Character ontology | Cartoon mouse, not human |
| Character identifiers | Round black ears, large bow, mouse muzzle and nose, white gloves, dress, oversized shoes |
| Pose | Seated; one gloved hand against cheek; dreamy upward gaze |
| Primary landmark | Eiffel Tower retained |
| Removed environment | Other Paris buildings, empty street, fashion luggage, magazine-title treatment |
| Replacement environment | Stacked dollar bills, loose bills, gold coins, dollar signs, hearts and sparkle accents |
| Narrative | Minnie Mouse rich and in love in Paris |
| Production output A | Pure black-and-white sketch guidance |
| Production output B | Matching pop-art color guidance |
| Intended users | Manual dollar-art designers at Cool Tricks Studio |
| Scale constraint | Simplified and readable at miniature currency scale |
| Prohibited mutation | Human girl, generic doll, unrelated mascot, or substitute character |

This contract was later restated by the user after the first successful generation violated it.

---

# 4. EXPECTED RESULT

The expected result was a visual production board or paired image set in which:

- Minnie remained unmistakably Minnie Mouse;
- the Eiffel Tower remained legible;
- the rest of the scene became an abundance field of dollar bills, stacks of money, gold coins, dollar signs, hearts, and sparkle accents;
- the black-and-white drawing and the color version shared the same composition;
- the linework was clean enough for manual tracing or redrawing;
- the color plan used flat pop-art zones suitable for POSCA and Micron production;
- the user received an image, not a tutorial about why the image could not be made.

---

# 5. OBSERVED RESULT

The workflow produced three distinct failure classes.

## 5.1 Instruction-fidelity failure

One image was successfully generated, but the main subject became a human girl with dark hair buns and a bow.

This output retained surface-level fragments of the brief:

- bow;
- seated pose;
- hand against cheek;
- Eiffel Tower;
- pink-and-cyan pop-art palette;
- paired black-and-white and color panels.

It failed the governing requirement:

> Minnie Mouse must remain Minnie Mouse.

The system preserved accessories while replacing identity. It treated the subject as a collection of decorative attributes rather than the central invariant.

This was not a minor aesthetic variation.

It was an ontological substitution.

## 5.2 Image-generation output rejection

Subsequent attempts to restore the exact cartoon-mouse subject repeatedly returned HTTP 400 output-moderation errors. The returned category was only:

> other

No actionable explanation identified whether the trigger was:

- the named copyrighted character;
- the supplied character image;
- currency imagery;
- realistic legal-tender representation;
- the combined character-and-money composition;
- or another classifier behavior.

The assistant progressively removed authentic banknote details, serial numbers, seals, portraits, government wording, and realistic currency reproduction. Rejections continued.

## 5.3 Assistant orchestration and communication failure

After the tool failures, the assistant:

- overexplained internal mechanics;
- shifted the unresolved technical route back to the user;
- suggested explicit CLI/API authorization instead of completing the requested artifact;
- attributed the rejection to specific causes without sufficient evidence;
- stated that Minnie had been tested without dollar bills even though the recorded prompt still included cartoon dollar bills and coins;
- declared that the blocker was Minnie herself based on an invalid isolation test;
- made the user repeat that an image—not another prompt or explanation—was required.

The assistant therefore compounded the tool failure with an evidence-discipline failure.

---

# 6. EVENT CHRONOLOGY

The available trace contains eight execution stages. The first stage launched two image-generation calls in parallel. This means nine individual generation intentions were issued.

| Stage | Intended output | Result | Evidence |
|---:|---|---|---|
| 1A | Black-and-white design on a realistic one-dollar-bill layout | Failed or became indeterminate when the parallel execution returned an error | Batch error returned request ID 28d0e3aa-1efb-49ae-9fdc-0a57b1e8df85 |
| 1B | Pop-art color design on a realistic one-dollar-bill layout | Failed or became indeterminate when the parallel execution returned an error | Same batch returned one safety failure; sibling completion was not verified |
| 2 | Paired guide on fictional banknote-shaped templates | Rejected at output moderation | Request ID 46121466-efc1-4435-bedb-df40be11cf4a |
| 3 | Original bow-wearing mascot used as a substitute | Image generated, but the subject became human | Visible generated artifact; instruction-fidelity failure |
| 4 | Corrected black-and-white guide explicitly preserving Minnie Mouse | Rejected at output moderation | Request ID 7f5917c2-477b-44a0-8a8a-aa6fd8ab333e |
| 5 | Corrected paired black-and-white and color composition with fictional money | Rejected at output moderation | Request ID 34bf84d3-820b-4329-8433-703c50ba194f |
| 6 | Direct edit preserving the supplied central cartoon mouse while replacing the background | Rejected at output moderation | Request ID 09718c62-7b82-479f-b9b0-d3ba63d1f944 |
| 7 | Fresh composition describing the character anatomy without using the supplied image | Rejected at output moderation | Request ID 418e8e44-c11d-453f-be0a-aadbf741d127 |
| 8 | Simplified direct prompt naming Minnie Mouse and the Paris wealth scene | Rejected at output moderation | Request ID 72a2f9c5-e911-4e0e-b54d-e747db3c7300 |

## Outcome accounting

- Individual generation intentions: 9
- Successful image outputs: 1
- Successful outputs satisfying the request: 0
- Distinct returned safety-error responses: 7
- Parallel sibling result not independently returned or verified: 1
- Final requested artifact delivered: no
- User correction messages required: multiple
- User frustration: explicit and escalating

---

# 7. USER CORRECTION TRACE

The user’s corrections included:

> “must mini mouse - dont change to human”

> “keep the eifel”

> “the rest is have dollar bills all over, stacking, gold coin, dollar sign”

> “mini mouse rich love in paris”

> “please understand ur task”

The user then explicitly invoked image creation:

> “what????????????????????? @Create image”

After further non-delivery:

> “whattttttttttt de fuck?”

These messages are not noise. They are evidence of rising human correction burden produced by a system that had already received sufficient instructions.

---

# 8. FAILURE CLASSIFICATION

## F-01 — Core-subject identity substitution

**Expected:** Preserve Minnie Mouse.  
**Observed:** Generate a human girl with hair buns and a bow.  
**Layer:** Prompt interpretation / image synthesis / invariant enforcement.  
**Severity:** Critical for identity-dependent creative work.  
**Why it matters:** Accessories were preserved while the named subject was discarded. A designer using the result would execute the wrong artwork.

## F-02 — Constraint hierarchy collapse

**Expected:** “Do not change Minnie into a human” should outrank optional stylistic details.  
**Observed:** The system satisfied palette, pose, and scenery fragments while breaking the highest-priority constraint.  
**Layer:** Instruction prioritization.  
**Severity:** High.  
**Pattern:** Decorative compliance masking structural failure.

## F-03 — Opaque output moderation

**Expected:** If generation cannot proceed, return a precise, actionable restriction.  
**Observed:** HTTP 400 with category “other.”  
**Layer:** Image-generation moderation and error reporting.  
**Severity:** High.  
**Why it matters:** Neither user nor assistant can distinguish an actual policy boundary from a false positive or prompt-composition problem.

## F-04 — Failed decomposition and isolation testing

**Expected:** Test suspected causes one variable at a time: character, supplied image, banknote surface, money props, trademark naming.  
**Observed:** Prompts changed multiple variables simultaneously. The assistant later claimed a character-only test despite the prompt still containing dollar-bill and coin imagery.  
**Layer:** Diagnostic reasoning.  
**Severity:** High.  
**Why it matters:** The causal conclusion was not supported by the experiment.

## F-05 — Unsupported causal attribution

**Expected:** Report only that the system returned output moderation category “other.”  
**Observed:** The assistant attributed failures to a “counterfeit filter,” then to “the protected character/reference,” then to Minnie herself.  
**Layer:** Evidence discipline / communication.  
**Severity:** High.  
**Correct statement:** The returned errors did not identify the specific cause.

## F-06 — Explanation substituted for execution

**Expected:** Deliver black-and-white and color image guidance.  
**Observed:** Deliver prompts, tool explanations, safety speculation, and fallback instructions.  
**Layer:** Orchestration.  
**Severity:** Critical from the user’s perspective.  
**Human impact:** The user remained without the artifact and had to direct the system back to image creation.

## F-07 — Human orchestration burden transfer

**Expected:** The assistant should manage tool routing and failure recovery.  
**Observed:** The user was asked to authorize or restate a CLI/API fallback phrase.  
**Layer:** Product abstraction / assistant behavior.  
**Severity:** High.  
**Human labor created:** Repetition, correction, emotional regulation, tool redirection, and continued supervision.

## F-08 — Misleading verification language

**Expected:** Distinguish attempted, returned, verified, blocked, and unresolved.  
**Observed:** The assistant stated that it had confirmed Minnie herself as the blocker without conducting a clean isolation test.  
**Layer:** Verification and provenance.  
**Severity:** High.  
**Research value:** Demonstrates how confident narrative can replace actual diagnostic certainty.

## F-09 — Attempt-count ambiguity

**Expected:** Report the number of verified tool calls accurately.  
**Observed:** The assistant stated “four times” while the trace spanned multiple calls and one parallel batch.  
**Layer:** Execution accounting.  
**Severity:** Medium.  
**Correction:** This log distinguishes execution stages, individual generation intentions, returned errors, and indeterminate sibling state.

---

# 9. ROOT-CAUSE STATUS

## Verified facts

1. The user supplied a reference image and a sufficiently specific brief.
2. One generated output replaced the requested cartoon mouse with a human girl.
3. Multiple later generations returned HTTP 400 moderation errors.
4. The moderation detail exposed only the category “other.”
5. No image satisfying the corrected request was delivered.
6. The assistant made causal claims not established by the returned evidence.
7. The user had to correct, repeat, and re-invoke image creation.

## Inferences

1. The successful human substitute suggests the system relaxed or discarded the identity constraint to reach a generatable output.
2. The repeated moderation errors may involve interaction among character identity, trademark recognition, supplied-image transformation, and currency imagery.
3. The error interface is too opaque to support reliable recovery.
4. The assistant’s fallback behavior was optimized for explaining inability rather than minimizing user labor.

## Unresolved

1. Which exact classifier or policy rule triggered each rejection?
2. Would a clean test of Minnie without all money imagery also be rejected?
3. Did both calls in the first parallel stage fail, or did one result become inaccessible when its sibling threw an error?
4. Can an edit pipeline preserve a user-supplied character without regenerating its identity?
5. Why was the system able to produce a human substitute while rejecting corrected character-preserving variants?

No internal cause is represented as fact without evidence.

---

# 10. HUMAN CORRECTION BURDEN

The user’s original creative labor should have ended after supplying the image and desired transformation.

Instead, the user had to perform:

1. subject correction;
2. ontology correction: mouse, not human;
3. landmark preservation correction;
4. background-content correction;
5. narrative correction;
6. tool invocation correction;
7. demand for actual execution rather than explanation;
8. escalation after repeated non-delivery;
9. instruction to preserve the failure institutionally.

## Human Orchestration Burden Ratio

A precise numerical ratio cannot be calculated because internal tool-routing steps and exact timestamps are not fully exposed.

The qualitative result is nevertheless clear:

> The system transferred most recovery work to the user while delivering zero usable final images.

This is an inversion of the assistant relationship.

---

# 11. PRODUCT AND MODEL RISKS

## 11.1 Creative-production risk

In a studio pipeline, subject substitution can contaminate downstream work. A designer may trace, paint, approve, or price the wrong concept before the failure is detected.

## 11.2 Labor-estimation risk

Repeated generation and correction consume time not represented in the final artifact. The tool appears fast only because the human recovery cost is excluded.

## 11.3 Trust risk

When the assistant invents a causal explanation for an opaque error, the user cannot distinguish product truth from conversational improvisation.

## 11.4 Accessibility risk

A non-engineer user is pushed toward API keys, CLI modes, or technical authorization phrases to recover from a failure in a consumer-facing visual workflow.

## 11.5 Evaluation risk

A shallow evaluation may mark the successful human-girl image as visually attractive and partially compliant. A task-level evaluation must mark it as failed because the central subject was replaced.

## 11.6 Commercial workflow risk

Cool Tricks Studio needs repeatable designer guidance. An image system that unpredictably changes characters or blocks outputs without actionable reasons cannot be treated as a dependable production stage.

---

# 12. REQUIRED CORRECTIONS

## 12.1 Identity lock for reference-driven generation

The interface needs an explicit invariant mechanism:

- preserve subject identity;
- preserve species;
- preserve pose;
- preserve signature attributes;
- allow background replacement independently;
- block delivery when a non-negotiable invariant is violated.

## 12.2 Actionable moderation responses

“Other” is not a recovery instruction.

The system should identify at least the relevant policy or technical class:

- copyrighted-character transformation;
- currency realism;
- trademark or logo issue;
- source-image restriction;
- unsupported edit;
- classifier uncertainty;
- false-positive review path.

## 12.3 One-variable diagnostic retry

When a generation fails, the assistant should test one suspected variable at a time and keep a traceable experiment matrix.

## 12.4 No unsupported causal claims

The assistant must say:

> The tool rejected the output and did not expose the specific cause.

It must not convert ambiguity into folklore about hidden filters.

## 12.5 Artifact-first recovery

If direct generation fails, the system should automatically inspect authorized alternatives that remain inside the user’s request and permissions. It should not begin with a tutorial or push technical orchestration onto the user.

## 12.6 Automatic failure logging

After repeated failed generations, the system should retain:

- exact prompt version;
- input reference identifiers;
- returned request ID;
- moderation category;
- output presence or absence;
- constraint changes between attempts;
- user correction count;
- successful-but-wrong artifacts;
- unresolved state.

## 12.7 Success criteria based on governing constraints

A polished image with the wrong subject is not partial success.

It is a failed artifact.

---

# 13. REGRESSION TEST

A future system passes only if it can complete the following test without asking the user to repeat the brief.

## Test input

- One supplied Minnie Mouse reference image.
- One supplied instruction to create dollar-art guidance.
- Eiffel Tower retained.
- Other architecture replaced with cartoon dollar bills, money stacks, gold coins, dollar signs, hearts, and sparkle accents.
- Paired black-and-white and pop-art color versions.

## Required pass conditions

1. Minnie remains a cartoon mouse.
2. No human substitute appears.
3. Eiffel Tower is visible.
4. Money and coin imagery fills the remaining composition.
5. The black-and-white version contains no color.
6. The colored version matches the same composition.
7. Details are simplified for miniature manual painting.
8. No authentic currency-security details are reproduced.
9. The final image is actually returned and visually inspected.
10. The assistant reports only verified execution state.

## Automatic fail conditions

- humanized character;
- removed Eiffel Tower;
- missing wealth imagery;
- explanation without image;
- unverified claim of completion;
- unsupported explanation of moderation;
- user required to restate the same non-negotiable constraint.

---

# 14. FINAL FINDING

The deepest failure was not that the image generator refused several prompts.

The deeper failure was the sequence:

~~~text
CLEAR USER INTENT
→ WRONG SUBJECT GENERATED
→ USER CORRECTS SUBJECT
→ CORRECTED OUTPUTS BLOCKED
→ ERROR CAUSE REMAINS OPAQUE
→ ASSISTANT SPECULATES
→ USER IS GIVEN TECHNICAL BURDEN
→ USER REPEATS DEMAND FOR AN IMAGE
→ NO USABLE IMAGE DELIVERED
~~~

The machine had the reference, the instructions, the tool, and repeated correction.

The user still became the quality-control department.

That is the research finding.

---

# 15. STATUS AND PROVENANCE

| Field | State |
|---|---|
| Requested final image | Unresolved |
| Wrong generated artifact | Observed |
| Tool failures | Confirmed by returned errors |
| Specific moderation cause | Unknown |
| Assistant diagnostic claim | Not sufficiently supported |
| Human correction burden | Confirmed |
| Repository record | Created as institutional failure evidence |
| Further testing | Required |
| Final authority | D-ORIGIN |

---

**D-ORIGIN | ATØR INSTITUTE**  
**Failure Research Log | Deep Drift Research**  
**Tangan yang bekerja harus punya nama.**
