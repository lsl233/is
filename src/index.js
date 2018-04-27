module.exports = {
  number: function (value) {
    if (!(isNaN(value) || typeof value !== 'number')) {
      return true;
    } else {
      return false;
    }
  },
  string: function (value) {
    return typeof value === 'string';
  },
  object: function (value) {
    return typeof value === 'object'
  },
  array: function (value) {
    if (Array.isArray) {
      return Array.isArray(value);
    }
    return value instanceof Array;
  },
  pureObject: function (value) {
    return this.object(value) && !this.array(value);
  },
  function: function (value) {
    return typeof value === 'function';
  }
};
