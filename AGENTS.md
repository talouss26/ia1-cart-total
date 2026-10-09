# Project Rules

## Stack
- Use plain JavaScript with ES modules.
- Use Node.js built-in node:test and node:assert/strict.

## Commands
- Run npm test to check the behaviour.
- Run npm run check to check JavaScript syntax.
- Run npm run format:check to check basic formatting.
- Run npm run validate to run all checks and tests.

## Constraints
- Never add external dependencies.
- Keep the function signature cartTotal(items, options).
- Write the implementation in src/cart.js.
- Keep tests in the test directory.
- Never change expected results just to make tests pass.

## Workflow
- Read the task brief before implementing.
- Make small changes and review each diff.
- Run checks after changes.
- Record AI assistance honestly in AI-LOG.md.