# AI-LOG

Repository: https://github.com/talouss26/ia1-cart-total

These entries describe the work discussed on 2026-10-09. They were reorganised
retrospectively from the original combined log into the six-field structure
below. The separate entries do not imply that each was written immediately
after the activity. The assistant supplied the implementation and additional
tests; I did not independently design them.

## 2026-10-09 — Harness and implementation brief

Tool: ChatGPT in a browser, VS Code, and the terminal.

Asked for: Explain the IA#1 requirements and guide me step by step through
the project rules, verification commands, GitHub Actions configuration, and
implementation brief before implementing `cartTotal`.

Kept: The suggested `AGENTS.md`, npm scripts, `scripts/check-format.js`,
`.github/workflows/ci.yml`, and `BRIEF.md`. The validation command combines
syntax checks, basic formatting checks, and tests without external dependencies.

Changed: I corrected a missing closing brace in `package.json` with the
assistant's guidance. The brief recorded the calculation rules, errors,
worked example, constraints, allowed files, and verification expectations.

Rejected: I did not explicitly reject a suggested implementation in this
stage. The project constraints excluded external dependencies and changes
to the public function signature; these constraints are not claims that
the assistant proposed such changes.

By hand: I created and edited the files in VS Code and ran terminal commands.
The starter test failed with `not implemented` before implementation.
The initial GitHub Actions run also reported `not implemented`.

## 2026-10-09 — Additional tests and implementation

Tool: ChatGPT in a browser, VS Code, Node.js test runner, and Git.

Asked for: Help add tests for the cart-total rules, implement the function,
inspect changes, and run the project's validation command.

Kept: The original example test in `test/cart.test.js`, ten additional tests
in `test/cart-rules.test.js`, and the assistant-supplied implementation in
`src/cart.js`. The function validates each item, accumulates the subtotal,
adds VAT and the appropriate shipping fee, and rounds the final total.

Changed: I replaced the implementation stub with the supplied code and added
the additional test file. When the formatting checker reported missing final
newlines, I corrected `src/cart.js` and `test/cart-rules.test.js` and reran
validation. The separate test file was outside the original brief's file list;
this was later documented as a scope deviation.

Rejected: I did not reject a suggested implementation during this stage.
No test was intentionally weakened to accept incorrect behaviour.

By hand: I copied and edited the suggested content, ran Git and npm commands,
and inspected the reported output. After the implementation and formatting
fixes, local validation reported 11 passing tests and 0 failures. The test
commit shown in the session was `c476f81` (`Add tests for cart total rules`).
Running a diff command is not, by itself, a claim that I independently
reviewed or understood every changed line.

## 2026-10-09 — GitHub publication and verification

Tool: ChatGPT in a browser, Git, GitHub, and GitHub Actions.

Asked for: Explain the Git commands and terminal output, guide me through
publishing the work, and help interpret the GitHub Actions results.

Kept: My repository at `https://github.com/talouss26/ia1-cart-total` and the
workflow that runs the project's checks automatically.

Changed: I committed and pushed the project changes after following the
assistant's instructions and correcting the reported issues.

Rejected: No suggested publication approach was explicitly rejected.

By hand: I created my GitHub repository, ran the commit and push commands,
and inspected local test output and GitHub Actions logs. Hosted CI passed
after the implementation was pushed, as recorded in my original log.

## 2026-10-09 — Submission documents and retrospective clarification

Tool: ChatGPT in a browser and the project Markdown files.

Asked for: Help write an honest AI log and self-assessment, explain the
submission steps, and revise my Brief and AI log using the structure in
the example files I supplied.

Kept: The disclosure that the assistant supplied code, tests, configuration,
and documentation drafts. I retained the original scope-deviation note and
the distinction between local validation and hosted CI.

Changed: The assistant reorganised this log into dated entries using `Tool`,
`Asked for`, `Kept`, `Changed`, `Rejected`, and `By hand`. The revised brief
groups the contract, worked example, tests, and gates more clearly while
preserving the original allowed-file list and identifying the later test-file
addition. No production code or tests were changed by this documentation revision.

Rejected: I did not explicitly reject a documentation draft during this
revision. The revision does not copy the other student's identity, repository,
commit hashes, score, or claims of personal review into my own record.

By hand: I supplied my existing files and a comparison example and
requested the revision. The assistant edited these documents, and
I copied the revised files into my project.

## 2026-10-11 — Final self-assessment and archive refresh

Tool: ChatGPT in a browser, the terminal, Git, and Node.js.

Asked for: Help commit the updated self-assessment and rebuild
the submission ZIP from the latest commit.

Kept: The existing implementation, eleven tests, and validation commands.

Changed: I changed the claimed Tests score from 18 to 19 and Harness
score from 17 to 19, making the claimed total 96. No implementation,
test, or harness improvement was made in this update.

Rejected: No suggested output was explicitly rejected.

By hand: I entered the correct project directory, added the missing
final newline to the report, and ran npm run validate successfully:
11 tests passed and 0 failed. I committed the report as 40ee426,
pushed main, and created 24127440_96.zip using git archive.