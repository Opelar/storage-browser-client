module.exports = class Storage {
  constructor(name) {
    this.store = window[name] || window.sessionStorage;
  }

  set(key, value) {
    if (this._checkKey(key)) {
      if (!value) {
        this.store.removeItem(key);
      } else {
        this.store.setItem(key, this._stringify(value));
      }
    }
  }

  get(key) {
    if (this._checkKey(key)) {
      return this._parse(this.store.getItem(key));
    }
  }

  remove(key) {
    if (this._checkKey(key)) {
      this.store.removeItem(key);
    }
  }

  clearAll() {
    this.store.clear();
  }

  _checkKey(key) {
    if (!key || 'string' !== typeof key) {
      console.error('key must be a string');
      return false;
    }
    return true;
  }

  _stringify(val) {
    if (undefined === val || 'function' === typeof val) {
      return val + '';
    } else if ('string' === typeof val) {
      return val;
    } else {
      try {
        return JSON.stringify(val);
      } catch (e) {
        return val;
      }
    }
  }

  _parse(value) {
    if (typeof value !== 'string') {
      return undefined;
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
