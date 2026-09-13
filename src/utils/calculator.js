/**
 * Simple calculation utility functions.
 * These functions have unit tests in calculator.test.js.
 * 
 * DEMO TIP:
 * To demonstrate CI failure:
 * Change `return a + b;` to `return a - b;` in the `add` function, commit, and push.
 * GitHub Actions CI will catch the failure and block deployment!
 */

export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

export function multiply(a, b) {
  return Number(a) * Number(b);
}

export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Cannot divide by zero');
  }
  return Number(a) / Number(b);
}

export function power(base, exp) {
  return Math.pow(Number(base), Number(exp));
}

