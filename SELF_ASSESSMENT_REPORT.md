# SELF-ASSESSMENT REPORT

Student ID: 24127440
Full Name: Tô Thành Lộc
Repository: https://github.com/talouss26/ia1-cart-total
Claimed total: 93/100

## Score summary

| Criterion | Maximum | Claimed | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | src/cart.js; 11 passing tests |
| Tests | 20 | 18 | test/cart.test.js; test/cart-rules.test.js |
| Harness | 20 | 17 | AGENTS.md; package.json; scripts/check-format.js; .github/workflows/ci.yml; successful CI run |
| Brief | 15 | 14 | BRIEF.md; commit 9f2a3f9 |
| AI-LOG | 15 | 14 | AI-LOG.md |
| Total | 100 | 93 | Sum of the five claimed scores |

## Detailed assessment

### 1. Behaviour: 30/30

Evidence:
- src/cart.js
- Local validation: 11 tests passed, 0 failed.
- test/cart.test.js: "the example from the slides".

The function calculates subtotal as the sum of price * qty.
VAT is calculated from the subtotal.

Shipping is free when the subtotal reaches or exceeds
freeShipFrom. Otherwise, the configured shipping fee applies.

An empty cart returns 0 without VAT or shipping.

The function throws RangeError when:
- A price is negative.
- A quantity is zero, negative, or not an integer.

The final total is rounded using Math.round and returned
as a number. The worked example returns 467400.

### 2. Tests: 18/20

Evidence:
- test/cart.test.js
- test/cart-rules.test.js
- npm run validate: 11 tests passed, 0 failed.

The original test checks the worked example.
Ten additional tests check:
- An empty cart.
- Shipping below the free-shipping threshold.
- Free shipping exactly at the threshold.
- Free shipping above the threshold.
- Negative prices.
- Zero quantities.
- Negative quantities.
- Fractional quantities.
- Rounding to whole dong.
- The number return type.

Each test checks one behaviour. Expected results are based
on the specification rather than the implementation details.

Missing coverage:
- Rounding up.
- Rounding at the .5 boundary.

The existing rounding test checks that 109.08 becomes 109,
so it does not distinguish Math.round from Math.floor.

### 3. Harness: 17/20

Evidence:
- AGENTS.md
- package.json
- scripts/check-format.js
- .github/workflows/ci.yml
- Successful GitHub Actions run:
  https://github.com/talouss26/ia1-cart-total/actions/runs/37885122681

AGENTS.md describes the stack, commands, constraints,
and workflow. It includes rules against adding external
dependencies and changing expected results to make tests pass.

The project uses plain JavaScript, ES modules,
and Node.js built-in testing tools.

The validation command runs:
1. JavaScript syntax checks.
2. Basic formatting checks.
3. Automated tests.

CI is configured to run on pushes and pull requests.
The verified CI run completed successfully.

Limitations:
- Formatting checks only cover tabs, trailing spaces,
  and final newlines.
- The explicit syntax-check command does not include
  every JavaScript file.
- The formatting checker does not enforce indentation
  or other detailed style rules.

### 4. Brief: 14/15

Evidence:
- BRIEF.md
- Commit 9f2a3f9: "Add implementation brief".

The brief defines the goal, allowed files, inputs,
calculation rules, error cases, worked example,
constraints, and required verification.

It explicitly prohibits external dependencies and keeps
the function signature cartTotal(items, options).

The brief was committed before the additional tests
and implementation.

Limitation:
The original allowed-file list names src/cart.js and
test/cart.test.js, but the additional tests were placed
in test/cart-rules.test.js. The original brief therefore
did not fully describe the file scope used during implementation.

### 5. AI-LOG: 14/15

Evidence:
- AI-LOG.md

The log identifies:
- The assistant used.
- What I requested.
- What the assistant produced.
- What I kept.
- What I corrected.
- Whether I rejected any output.
- What I did myself.
- Verification results.

It honestly states that the assistant supplied the
implementation and additional tests. It does not claim
that I independently designed them.

Limitation:
The entry could be easier to verify if specific changes
and verification results were linked to individual commits.

## Verification evidence

- The starter test failed with "Error: not implemented"
  before implementation.
- The initial GitHub Actions run reached the tests
  and failed with the same error.
- Commit 51ba7fc records the harness and CI setup.
- Commit 9f2a3f9 records the implementation brief.
- Commit c476f81 records the additional tests
  before implementation.
- After implementation and formatting fixes,
  local validation passed with 11 tests passing
  and 0 tests failing.
- GitHub Actions run 37885122681 completed successfully.

## What I did not manage

- Add tests for rounding up and the .5 boundary.
- Build a full formatting checker.
- Extend the explicit syntax check to all JavaScript files.
- Include the additional test file in the original brief's
  allowed-file list.
- Link every AI-assisted change to a specific commit.

## AI assistance

I used ChatGPT in a browser for step-by-step guidance.

The assistant supplied the implementation, additional tests,
configuration, and documentation drafts.

I copied and edited files in VS Code, ran terminal commands,
corrected reported JSON and formatting issues, created the
GitHub repository, and committed and pushed the work.

I do not claim that I independently designed the
implementation or additional tests.

## Total

30 + 18 + 17 + 14 + 14 = 93/100