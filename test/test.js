/* eslint-disable no-undef, no-undefined, func-names, prefer-arrow-callback, max-nested-callbacks, no-unused-vars */

const assert = require('assert');
const iso = require('../index.js');
const iso2 = require('../index.js');

const has = function objHasProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
};

describe('iso', function() {
    it('should be an object', function() {
        assert.equal(typeof iso, 'object');
    });

    it('has equal instances', function() {
        assert.equal(iso, iso2);
    });

    it('is Singleton', function() {
        iso.newProperty = true;
        assert.equal(iso2.newProperty, true);
    });

    describe('iso.list', function() {
        it('should be an array', function() {
            assert.equal(typeof iso.list, 'object');
            assert.equal(Array.isArray(iso.list), true);
        });

        it('should have positive length', function() {
            assert.equal(iso.list.length > 0, true);
        });

        it('each element should be an object', function() {
            assert.equal(iso.list.length > 0, true);
        });

        it('each element should have property "locale" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'locale'), true);
                assert.equal(typeof val.locale, 'string');
            }
        });

        it('each element should have property "name" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'name'), true);
                assert.equal(typeof val.name, 'string');
            }
        });

        it('each element should be freezed', function() {
            let i;
            for (i = 0; i < iso.list.length; i++) {
                const backUp = {...iso.list[i]};
                iso.list[i] = null;
                assert.equal(JSON.stringify(iso.list[i]), JSON.stringify(backUp));
            }
        });

        it('properties on each element should be freezed', function() {
            let i;
            for (i = 0; i < iso.list.length; i++) {
                const backUp = {...iso.list[i]};
                iso.list[i].locale = null;
                assert.equal(JSON.stringify(iso.list[i]), JSON.stringify(backUp));
            }
        });
    });

    describe('iso.validate', function() {
        it('should be function', function() {
            assert.equal(typeof iso.validate, 'function');
        });

        it('should be instance of Function', function() {
            assert.equal((iso.validate instanceof Function), true);
        });

        describe('should return FALSE when', function() {
            const test = (...args) => {
                let result;

                if (args.length > 0) {
                    result = iso.validate(...args);
                } else {
                    result = iso.validate();
                }

                assert.deepEqual(typeof result, 'boolean');
                assert.deepEqual(result, false);
            };

            it('call without arguments', function() {
                test();
            });

            it('call with null', function() {
                test(null);
            });

            it('call with true', function() {
                test(true);
            });

            it('call with false', function() {
                test(false);
            });

            it('call with NaN', function() {
                test(NaN);
            });

            it('call with Function', function() {
                test(() => 10);
            });

            it('call with Number', function() {
                test(1);
            });

            it('call with Number as 0', function() {
                test(0);
            });

            it('call with float Number', function() {
                test(1.2);
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with Array with wrong element', function() {
                test([true, false]);
            });

            it('call with empty Object', function() {
                test({});
            });

            it('call with Symbol', function() {
                test(Symbol('test'));
            });

            it('call with RegExp', function() {
                test(/^\d*$/);
            });

            it('call with multiple arguments where first is wrong', function() {
                test(true, false);
            });
        });

        describe('should return TRUE when', function() {
            const test = (...args) => {
                const result = iso.validate(...args);

                assert.deepEqual(typeof result, 'boolean');
                assert.deepEqual(result, true);
            };

            it('call with code like "af"', function() {
                test('af');
            });

            it('call with code like "af-ZA"', function() {
                test('af-ZA');
            });
        });
    });

    describe('iso.get', function() {
        it('should be function', function() {
            assert.equal(typeof iso.get, 'function');
        });

        it('should be instance of Function', function() {
            assert.equal((iso.get instanceof Function), true);
        });

        describe('should return NULL when', function() {
            const test = (...args) => {
                let result;

                if (args.length > 0) {
                    result = iso.get(...args);
                } else {
                    result = iso.get();
                }

                assert.equal(typeof result, 'object');
                assert.equal(result, null);
            };

            it('call without arguments', function() {
                test();
            });

            it('call with null', function() {
                test(null);
            });

            it('call with true', function() {
                test(true);
            });

            it('call with false', function() {
                test(false);
            });

            it('call with NaN', function() {
                test(NaN);
            });

            it('call with Function', function() {
                test(() => 10);
            });

            it('call with Number', function() {
                test(1);
            });

            it('call with Number as 0', function() {
                test(0);
            });

            it('call with float Number', function() {
                test(1.2);
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with Array with wrong element', function() {
                test([true, false]);
            });

            it('call with empty Object', function() {
                test({});
            });

            it('call with Symbol', function() {
                test(Symbol('test'));
            });

            it('call with RegExp', function() {
                test(/^\d*$/);
            });

            it('call with multiple arguments where first is wrong', function() {
                test(true, false);
            });
        });

        describe('should return object when', function() {
            const test = code => {
                const result = iso.get(code);

                assert.deepEqual(typeof result, 'object');
                const keys = Object.keys(result);
                assert.deepEqual(keys.length, 2);
                assert.deepEqual(keys.includes('locale'), true);
                assert.deepEqual(keys.includes('name'), true);
            };

            it('call with code like "af"', function() {
                test('af');
            });

            it('call with code like "af-ZA"', function() {
                test('af-ZA');
            });
        });
    });
});
