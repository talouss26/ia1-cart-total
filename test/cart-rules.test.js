import test from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal } from '../src/cart.js';

const options = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000
};

test('empty cart returns 0', () => {
  assert.equal(cartTotal([], options), 0);
});

test('below threshold includes shipping', () => {
  const items = [{ price: 100000, qty: 1 }];
  assert.equal(cartTotal(items, options), 138000);
});

test('exact threshold gives free shipping', () => {
  const items = [{ price: 250000, qty: 2 }];
  assert.equal(cartTotal(items, options), 540000);
});

test('above threshold gives free shipping', () => {
  const items = [{ price: 600000, qty: 1 }];
  assert.equal(cartTotal(items, options), 648000);
});

test('negative price throws RangeError', () => {
  const items = [{ price: -1, qty: 1 }];
  assert.throws(() => cartTotal(items, options), RangeError);
});

test('zero quantity throws RangeError', () => {
  const items = [{ price: 100000, qty: 0 }];
  assert.throws(() => cartTotal(items, options), RangeError);
});

test('negative quantity throws RangeError', () => {
  const items = [{ price: 100000, qty: -1 }];
  assert.throws(() => cartTotal(items, options), RangeError);
});

test('fractional quantity throws RangeError', () => {
  const items = [{ price: 100000, qty: 1.5 }];
  assert.throws(() => cartTotal(items, options), RangeError);
});

test('rounds final total to whole dong', () => {
  const items = [{ price: 101, qty: 1 }];
  const settings = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 0
  };

  assert.equal(cartTotal(items, settings), 109);
});

test('returns a number', () => {
  const items = [{ price: 100000, qty: 1 }];
  assert.equal(typeof cartTotal(items, options), 'number');
});
