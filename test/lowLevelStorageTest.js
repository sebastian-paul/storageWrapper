const assert = require('assert');
const lowLevelStorage = require('../lowLevelStorage');

describe('LowLevelStorage: Callback functions | Unit test', () => {

  describe('put a sample data', () => {
    it('should return Data added  successfully', () => {
      lowLevelStorage.put('testKey', 'test Value', (err, data) => {
        assert.strictEqual(data, 'Data added  successfully');
      });

    });
  });

  describe('put null data', () => {
    it('should return error', () => {
      lowLevelStorage.put(null, null, (err, data) => {
        assert.notEqual(err, null);
      });

    });
  });

  describe('put empty string data', () => {
    it('should return error', () => {
      lowLevelStorage.put('', '', (err, data) => {
        assert.notEqual(err, null);
      });

    });
  });

  describe('get a valid data', () => {
    it('should return Data value', () => {
      lowLevelStorage.get('testKey', (err, data) => {
        assert.notEqual(data, 'Data not found');
        assert.notEqual(data, null);
        assert.strictEqual(err, null);
      });
    });
  });

  describe('get data with invalid key', () => {
    it('should return Error', () => {
      lowLevelStorage.get('testKeyInvalid', (err, data) => {
        assert.strictEqual(err, 'Data not found');
      });
    });
  });

  describe('override existing data', () => {
    it('should return Data added  successfully', () => {
      lowLevelStorage.put('testKey', 'modify Value', (err, data) => {
        assert.strictEqual(data, 'Data added  successfully');
      });

    });
  });

  describe('delete a data ', () => {
    it('should return success response', () => {
      lowLevelStorage.del('testKey', (err, data) => {
        assert.strictEqual(data, 'Data deleted  successfully');
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete invalid data ', () => {
    it('should return error', () => {
      lowLevelStorage.del('testKey', (err, data) => {
        assert.strictEqual(data, null);
        assert.notEqual(err, null);
      });
    });
  });

});