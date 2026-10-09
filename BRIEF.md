# Implementation Brief

## Goal

Implement cartTotal(items, options) in src/cart.js.

## Original allowed files

- src/cart.js
- test/cart.test.js

## Inputs

- items: an array of products with name, price, and qty.
- options: an object with vatRate, freeShipFrom, and shipFee.

## Behaviour

- Calculate subtotal as the sum of price * qty.
- Calculate VAT as subtotal * vatRate.
- Use the subtotal before VAT to determine free shipping.
- Shipping is 0 when subtotal >= freeShipFrom.
- Otherwise, shipping is options.shipFee.
- An empty cart returns 0, without VAT or shipping.
- Calculate the total as subtotal + VAT + shipping.
- Round only the final total to the nearest whole dong.
- Return the result as a number.

## Errors

Throw RangeError when:
- price is negative.
- qty is not a positive integer, including zero,
  negative values, and fractional values.

## Worked example

Items:
- name: "Áo thun", price: 180000, qty: 2
- name: "Sổ tay", price: 45000, qty: 1

Options:
- vatRate: 0.08
- freeShipFrom: 500000
- shipFee: 30000

Calculation:
- Subtotal: 180000 * 2 + 45000 * 1 = 405000.
- VAT: 405000 * 0.08 = 32400.
- Shipping: 30000 because 405000 < 500000.
- Total: 405000 + 32400 + 30000 = 467400.

Expected result: 467400 as a number.

## Constraints

- Use plain JavaScript and ES modules.
- Do not add external dependencies.
- Keep the function signature cartTotal(items, options).
- Use node:test and node:assert/strict.
- Do not weaken existing tests to make them pass.

## Verification

Tests must cover:
- The worked example.
- An empty cart.
- Subtotal exactly at the free-shipping threshold.
- Subtotal below and above the threshold.
- Negative price.
- Zero, negative, and fractional quantity.
- Rounding and number return type.

Run npm run validate after implementation.

## Clarification added after implementation

The original allowed-file list included only src/cart.js
and test/cart.test.js.

During implementation, the additional tests were placed
in test/cart-rules.test.js, while the original example test
was kept in test/cart.test.js.

The additional test file was not listed in the original brief.
This section records the actual scope used; it does not
claim that the file was included before implementation.

This revision also makes the existing calculation rules
explicit: shipping eligibility uses the subtotal before VAT,
and only the final total is rounded.