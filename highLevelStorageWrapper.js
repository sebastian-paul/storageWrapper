
class HighLevelStorageWrapper {

    wrap(lowLevelStorage) {

        let get = function (key) {

            return new Promise(async (resolve, reject) => {

                await lowLevelStorage.get(key, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });

        }

        let put = function (key, value) {

            return new Promise(async (resolve, reject) => {

                await lowLevelStorage.put(key, value, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });

        }

        let del = function (key) {

            return new Promise(async (resolve, reject) => {

                await lowLevelStorage.del(key, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });
        }

        let batchPut = function (input) {

            return new Promise(async (resolve, reject) => {
                input.map(async (data, index, arr) => {
                    await lowLevelStorage.put(data.key, data.value, (err, data) => {
                        if (err) reject(err);
                        else resolve("Batch data added successfully");
                    });
                });
            });

        }

        return {
            get: get,
            put: put,
            del: del,
            batchPut: batchPut
        }

    }

}

let wrap = new HighLevelStorageWrapper().wrap;
module.exports = wrap;