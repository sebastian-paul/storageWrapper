const assert = require('assert');
const lowLevelStorage = require('../lowLevelStorage');
const wrap = require('../highLevelStorageWrapper');
const highLevelStorage = wrap(lowLevelStorage);

describe('HighLevelStorage: Wrapped Callback with promises | Unit test', () => {

  describe('put a sample data', () => {
    it('should return Data added  successfully', () => {
      highLevelStorage.put('testKey', 'test Value').then((data) => {
        assert.strictEqual(data, 'Data added  successfully');
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('put a null data', () => {
    it('should return error', () => {
      highLevelStorage.put(null, null).then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('put a empty string data', () => {
    it('should return error', () => {
      highLevelStorage.put(null, null).then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('get a valid data', () => {
    it('should return Data value', () => {
      highLevelStorage.get('testKey').then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('get data with invalid key', () => {
    it('should return Error', () => {
      highLevelStorage.get('testKeyInvalid').then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('override existing key value', () => {
    it('should return Data added  successfully', () => {
      highLevelStorage.put('testKey', 'modified Value').then((data) => {
        assert.strictEqual(data, 'Data added  successfully');
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete a data ', () => {
    it('should return success response', () => {
      highLevelStorage.del('testKey').then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

  describe('delete invalid data ', () => {
    it('should return error', () => {
      highLevelStorage.get('testKey').then((data) => {
        assert.strictEqual(data, null);
      }).catch((err) => {
        assert.notEqual(err, null);
      });
    });
  });

  describe('batch put data ', () => {
    it('should return success', () => {
      highLevelStorage.batchPut([{ key: '111', value: 111 }, { key: '222', value: 2222 }]).then((data) => {
        assert.notEqual(data, null);
      }).catch((err) => {
        assert.strictEqual(err, null);
      });
    });
  });

});