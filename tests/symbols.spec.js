describe.only('Symbols', () => {

/*
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ foo, bar ]
*/

  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
  describe('data type', () => {
  });

  describe('uniqueness', () => {
    it('is unique without description', () => {
      assert.isTrue(Symbol() !== Symbol());
      assert.isTrue(Symbol() != Symbol());
    });
    it('is unique with same description', () => {
      assert.isTrue(Symbol('x') !== Symbol('x'));
      assert.isTrue(Symbol('x') != Symbol('x'));
    });
  });

  describe('immutability', () => {
    it('is cannot be reassigned', () => {
      let j = Symbol();
      j = Symbol();
    });
  });

  describe('description property', () => {
    it('is unique', () => {
    });
  });

  describe('as object key', () => {
    it('is unique', () => {
    });
  });

  describe('other qualities', () => {
    it('is iterable', () => {
    });
    it('is matchable', () => {
    });
    it('is replaceable', () => {
    });
  });

  describe('well known symbols', () => {
  });
});

