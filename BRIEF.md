# Implementation Brief: `cartTotal`

## Goal and allowed files

Implement and export `cartTotal(items, options)` from `src/cart.js`.

The original implementation brief allowed changes only to:

- `src/cart.js` for production code.
- `test/cart.test.js` for contract tests.

Do not add dependencies or create alternative implementations.

## Contract

- `items` is an array of objects shaped like `{ name, price, qty }`.
- `options` is shaped like `{ vatRate, freeShipFrom, shipFee }`.
- Compute the subtotal as the sum of `price * qty` for all items.
- Compute VAT as `subtotal * vatRate`.
- Determine shipping from the subtotal before VAT: shipping is `0` when
  `subtotal >= freeShipFrom`; otherwise use `shipFee`.
- Return `subtotal + VAT + shipping`, rounding only the final total to
  the nearest whole dong.
- Return a JavaScript number, not a formatted string.
- Return `0` for an empty cart, without VAT or shipping.
- Throw `RangeError` when any item's `price` is negative.
- Throw `RangeError` when any item's `qty` is not a positive integer,
  including zero, negative, and fractional values.

## Worked example

```js
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
);
```

Subtotal is `405000`, VAT is `32400`, and shipping is `30000` because
the subtotal is below `500000`. The expected result is `467400` as a number.

## Tests

Use `node:test` and `node:assert/strict`. Keep focused tests for:

- The worked example.
- An empty cart.
- Subtotal below, exactly at, and above the free-shipping threshold.
- Negative price.
- Zero, negative, and fractional quantities.
- Whole-dong rounding and numeric return type.

Use expected results calculated from the contract. Do not weaken tests to
make an incorrect implementation pass.

## Constraints and gates

- Use plain JavaScript and ES modules, with no external dependencies.
- Keep the public function signature `cartTotal(items, options)`.
- Round only the final total; do not use `toFixed()` for the return value.
- Read each diff before accepting a change.
- Run `npm run validate`: syntax checks, basic formatting checks, then tests.
- Check the hosted GitHub Actions result after pushing; a successful local
  run alone is not evidence that hosted CI passed.

## Scope clarification recorded after implementation

The additional tests were placed in `test/cart-rules.test.js`, while the
original worked-example test remained in `test/cart.test.js`. The additional
file was not listed in the original allowed scope. This note records that
deviation honestly; it does not claim prior approval.

The recorded test layout is therefore:

- `test/cart.test.js`: the original worked-example test.
- `test/cart-rules.test.js`: ten additional contract tests.

For subsequent test maintenance, use this recorded layout. Harness and
documentation changes should be identified separately from production-code
changes, and any further scope changes should be recorded before editing.

This revised document was organised after implementation. It also makes
explicit the existing rules about using subtotal before VAT for shipping
and rounding only the final total. It is not an unchanged copy of the
original pre-implementation brief.
