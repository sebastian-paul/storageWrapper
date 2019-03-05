const assert = require('assert');
const lowLevelStorage = require('../lowLevelStorage');
const wrap = require('../highLevelStorageWrapper');
const highLevelStorage = wrap(lowLevelStorage);

describe('HighLevelStorage: Wrapped Callback with promises | Unit test', async () => {

  describe('put a sample data', async () => {
    it('should return Data added  successfully', async () => {
      await highLevelStorage.put('testKey', 'test Value').then((data) => {
        assert.strictEqual(data, 'Data added  successfully');
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('put a null data', async () => {
    it('should return error', async () => {
      await highLevelStorage.put(null, null).then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('put a empty string data', async () => {
    await it('should return error', async () => {
      highLevelStorage.put(null, null).then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('get a valid data', async () => {
    it('should return Data value', async () => {
      await highLevelStorage.get('testKey').then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('get data with invalid key', async () => {
    it('should return Error', async () => {
      await highLevelStorage.get('testKeyInvalid').then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('override existing key value', async () => {
    it('should return Data added  successfully', async () => {
      await highLevelStorage.put('testKey', 'modified Value').then((data) => {
        assert.strictEqual(data, 'Data added  successfully');
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('get a valid data', async () => {
    it('should return Data value', async () => {
      await highLevelStorage.get('testKey').then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete a data ', async () => {
    it('should return success response', async () => {
      await highLevelStorage.del('testKey').then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete invalid data ', async () => {
    it('should return error', async () => {
      await highLevelStorage.get('testKey').then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('batch put data ', async () => {
    it('should return success', async () => {
      await highLevelStorage.batchPut([{ key: '111', value: 111 }, { key: '222', value: 2222 }]).then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

});