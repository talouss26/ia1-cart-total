# SELF-ASSESSMENT REPORT

Student ID: 24127440
Full Name: Tô Thành Lộc
Repository: https://github.com/talouss26/ia1-cart-total
Claimed total: 93/100

## Assessment

### 1. Behaviour: 30/30

Evidence:
- src/cart.js
- Local validation: 11 tests passed, 0 failed.

The function calculates subtotal, VAT, and shipping correctly.
It gives free shipping at or above the threshold and returns
0 for an empty cart.

It throws RangeError for negative prices and quantities
that are not positive integers.

The result is a number rounded to the nearest whole dong.
The worked example returns 467400.

### 2. Tests: 18/20

Evidence:
- test/cart.test.js
- test/cart-rules.test.js

The tests cover:
- The worked example.
- An empty cart.
- Shipping below, at, and above the threshold.
- Negative prices.
- Zero, negative, and fractional quantities.
- Rounding and number return type.

All 11 tests pass. Each test checks one behaviour.

Missing coverage:
- Rounding up.
- Rounding at the .5 boundary.

### 3. Harness: 17/20

Evidence:
- AGENTS.md
- package.json
- scripts/check-format.js
- .github/workflows/ci.yml

The rules file describes the stack, commands, constraints,
and workflow.

The validation command runs syntax checks, basic formatting
checks, and tests. CI runs automatically on pushes and
pull requests.

Limitations:
- Formatting checks only cover tabs, trailing spaces,
  and final newlines.
- The explicit syntax-check command does not include
  every JavaScript file.

### 4. Brief: 14/15

Evidence:
- BRIEF.md
- Commit 9f2a3f9

The brief defines the goal, allowed files, inputs, behaviour,
error cases, worked example, constraints, and verification.

It was committed before the tests and implementation.

It could state more explicitly that only the final total
is rounded and that free shipping uses the subtotal before VAT.

### 5. AI-LOG: 14/15

Evidence:
- AI-LOG.md

The log identifies the tool, requests, generated content,
kept output, corrections, rejected output, and manual work.

It honestly states that the assistant supplied the
implementation and additional tests.

The entry could be easier to verify by linking specific
changes and verification results to commits.

## Total: 93/100

## What I did not manage

- Add tests for rounding up and the .5 boundary.
- Build a full formatting checker.
- Extend the explicit syntax check to all JavaScript files.
- Link every AI-assisted change to a specific commit.

## AI assistance

The assistant supplied the implementation, additional tests,
configuration, and documentation drafts. I copied and edited files,
ran commands, corrected reported formatting and JSON issues,
and committed and pushed the work. I do not claim that I
independently designed the implementation or additional tests.