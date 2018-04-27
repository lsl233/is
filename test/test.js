const assert = require('assert');
const is = require('../src');

describe('#is_type.js', () => {
  /**
   * number
   */
  describe('#is.number', () => {
    it('is.number(1) should return true', () => {
      assert.strictEqual(is.number(1), true);
    });
    it('is.number(0.23) should return true', () => {
      assert.strictEqual(is.number(0.23), true);
    });
    it('is.number(99999999999999999) should return true', () => {
      assert.strictEqual(is.number(9999999999999999999), true);
    });
    it('is.number(\'2\') should return true', () => {
      assert.strictEqual(is.number('2'), false);
    });
    it('is.number(NaN) should return true', () => {
      assert.strictEqual(is.number(NaN), false);
    });
  });

  /**
   * string
   */
  describe('#is.string', () => {
    it('is.string(\'\')', () => {
      assert.strictEqual(is.string('helle world'), true);
    });
    it('is.string(\'helle world\')', () => {
      assert.strictEqual(is.string('helle world'), true);
    });
    it('is.string(\'123\')', () => {
      assert.strictEqual(is.string('123'), true);
    });
    it('is.string(11)', () => {
      assert.strictEqual(is.string(11), false);
    });
  });

  /**
   * array
   */
  describe('#is.array', () => {
    it('is.array([])', () => {
      assert.strictEqual(is.array([]), true);
    });
    it('is.array({})', () => {
      assert.strictEqual(is.array({}), false);
    });
    it('is.array(new Date)', () => {
      assert.strictEqual(is.array(new Date), false);
    });
  });

  /**
   * object
   */
  describe('#is.object', () => {
    it('is.object([])', () => {
      assert.strictEqual(is.object({}), true);
    });
    it('is.object({})', () => {
      assert.strictEqual(is.object([]), false);
    });
    it('is.object(new Date)', () => {
      assert.strictEqual(is.object(new Date), true);
    });
  });
});
