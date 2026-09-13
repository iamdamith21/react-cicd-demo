import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, power, modulo } from './calculator';

describe('Calculator Utility Unit Tests (CI Pipeline)', () => {
  describe('add()', () => {
    it('correctly adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(add(-5, 10)).toBe(5);
      expect(add(-4, -6)).toBe(-10);
    });
  });

  describe('subtract()', () => {
    it('correctly subtracts numbers', () => {
      expect(subtract(10, 4)).toBe(6);
      expect(subtract(5, 15)).toBe(-10);
    });
  });

  describe('multiply()', () => {
    it('correctly multiplies numbers', () => {
      expect(multiply(3, 7)).toBe(21);
      expect(multiply(-2, 5)).toBe(-10);
    });
  });

  describe('divide()', () => {
    it('correctly divides numbers', () => {
      expect(divide(20, 4)).toBe(5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('power()', () => {
    it('correctly calculates exponentiation', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(5, 2)).toBe(25);
    });

    it('handles power of zero', () => {
      expect(power(10, 0)).toBe(1);
    });
  });

  describe('modulo()', () => {
    it('correctly calculates remainder', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(15, 5)).toBe(0);
    });

    it('throws error when performing modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot modulo by zero');
    });
  });
});
