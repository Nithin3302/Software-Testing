const { incrementVisitorCount } = require('../visitorUtils');

// Polyfill localStorage in Node environment
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  clear() {
    this.store = {};
  }
};

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('visitorCount', '0');
});

test('should increment visitor count by 1', () => {
  const count = incrementVisitorCount();
  expect(count).toBe(1);
});
