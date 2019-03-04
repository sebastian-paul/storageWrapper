const assert = require('assert');
const lowLevelStorage = require('../lowLevelStorage');

describe('LowLevelStorage: Callback functions | Unit test', async () => {

  describe('put a sample data', async () => {
    it('should return Data added  successfully', async () => {
      await lowLevelStorage.put('testKey', 'test Value', (err, data) => {
        assert.strictEqual(data, 'Data added  successfully');
      });

    });
  });

  describe('put null data', async () => {
    it('should return error', async () => {
      await lowLevelStorage.put(null, null, (err, data) => {
        assert.notEqual(err, null);
      });

    });
  });

  describe('put empty string data', async () => {
    it('should return error', async () => {
      await lowLevelStorage.put('', '', (err, data) => {
        assert.notEqual(err, null);
      });

    });
  });

  describe('get a valid data', async () => {
    it('should return Data value', async () => {
      await lowLevelStorage.get('testKey', (err, data) => {
        assert.notEqual(data, 'Data not found');
        assert.notEqual(data, null);
        assert.strictEqual(err, null);
      });
    });
  });

  describe('get data with invalid key', async () => {
    it('should return Error', async () => {
      await lowLevelStorage.get('testKeyInvalid', (err, data) => {
        assert.strictEqual(err, 'Data not found');
      });
    });
  });

  describe('override existing data', async () => {
    it('should return Data added  successfully', async () => {
      await lowLevelStorage.put('testKey', 'modify Value', (err, data) => {
        assert.strictEqual(data, 'Data added  successfully');
      });

    });
  });

  describe('delete a data ', async () => {
    it('should return success response', async () => {
      await lowLevelStorage.del('testKey', (err, data) => {
        assert.strictEqual(data, 'Data deleted  successfully');
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete invalid data ', async () => {
    it('should return error', async () => {
      await lowLevelStorage.del('testKey', (err, data) => {
        assert.strictEqual(data, null);
        assert.notEqual(err, null);
      });
    });
  });

});