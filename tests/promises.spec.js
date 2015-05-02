describe('Promises', () => {
  let resolved, rejected;

  const resolve = (assertion) => {
    resolved = true;
    assertion()
  };
  const reject = (assertion) => {
    rejected = true;
    assertion()
  };

  beforeEach(() => {
    resolved = false;
    rejected = false;
  });

  // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
  describe('data types', () => {
    it('is a constructor', () => {
      assert.equal(typeof Promise, 'function');
      assert.equal(typeof Promise.prototype, 'object');
      assert.equal(typeof new Promise((res, rej) => {}), 'object');
    });
    it('requires a function argument', () => {
      assert.throws(() => new Promise(), Error);
      assert.doesNotThrow(() => new Promise((res, rej) => {}));
      assert.throws(() => new Promise({}), Error);
    });
  });

  describe.only('resolve and reject', () => {
    function getPromise(success, assertion) {
      return new Promise((resolve, reject) => {
        setTimeout(
          success ?
            ()=>resolve(assertion):
            ()=>reject(assertion),
          1000
        );
      });
    }

    it('calls resolve on success', () => {
      const p = getPromise(
        true,
        () => {
          assert.equal(resolved, true);
          assert.equal(rejected, false);
        }
      );
      p.then(()=>{});
    });
  });


});

