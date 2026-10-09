# Implementation Brief

## Goal
Implement cartTotal(items, options) in src/cart.js.

## Allowed files
- src/cart.js
- test/cart.test.js

## Inputs
- items: an array of products with name, price, and qty.
- options: an object with vatRate, freeShipFrom, and shipFee.

## Behaviour
- Calculate subtotal as the sum of price * qty.
- Calculate VAT as subtotal * vatRate.
- Shipping is 0 when subtotal >= freeShipFrom.
- Otherwise, shipping is options.shipFee.
- An empty cart returns 0, without VAT or shipping.
- Return the final total rounded to the nearest whole dong.
- The return type must be number.

## Errors
Throw RangeError when:
- price is negative.
- qty is not a positive integer, including 0, negative values,
  and fractional values.

## Worked example
Items:
- price: 180000, qty: 2
- price: 45000, qty: 1

Options:
- vatRate: 0.08
- freeShipFrom: 500000
- shipFee: 30000

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