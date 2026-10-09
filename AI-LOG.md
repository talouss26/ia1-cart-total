# AI-LOG

## 2026-10-09 — Harness, brief, tests, and implementation

### Tool
ChatGPT in a browser.

### What I asked for
I asked the assistant to explain the IA#1 requirements and guide
me step by step through the harness, brief, tests, implementation,
and GitHub setup.

### What the assistant produced
- Rules for AGENTS.md.
- npm scripts for syntax checks, formatting checks, and tests.
- A basic formatting checker using Node.js built-in modules.
- A GitHub Actions workflow.
- An implementation brief.
- Ten additional tests for cartTotal.
- The cartTotal implementation.
- Git commands and explanations of terminal output.

### What I kept
I copied the suggested rules, configuration, brief, tests,
and implementation into the project.

### What I changed
I corrected a missing closing brace in package.json and added
final newlines to src/cart.js and test/cart-rules.test.js after
the formatting check reported errors.

### What I rejected
I did not reject any suggested implementation in this session.

### What I did myself
I created and edited files in VS Code, ran terminal commands,
created my GitHub repository, committed and pushed changes,
and inspected local test output and GitHub Actions logs.
The implementation and additional tests were supplied by
the assistant; I did not independently design them.

### Verification
- The starter test failed with "not implemented" before implementation.
- The initial GitHub Actions run also failed with "not implemented".
- After implementation and formatting fixes, local validation
  passed with 11 tests passing and 0 failing.
- GitHub Actions passed after the implementation was pushed.