
class HighLevelStorageWrapper {

    wrap(lowLevelStorage) {

        let get = (key) => {

            return new Promise((resolve, reject) => {

                lowLevelStorage.get(key, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });

        }

        let put = (key, value) => {

            return new Promise((resolve, reject) => {

                lowLevelStorage.put(key, value, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });

        }

        let del = (key) => {

            return new Promise((resolve, reject) => {

                lowLevelStorage.del(key, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
            });
        }

        let batchPut = (input) => {

            return new Promise((resolve, reject) => {
                input.map((data, index, arr) => {
                    lowLevelStorage.put(data.key, data.value, (err, data) => {
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