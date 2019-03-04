
const lowLevelStorage = require('./lowLevelStorage');
const wrap = require('./highLevelStorageWrapper');

async function main() {
    const highLevelStorage = wrap(lowLevelStorage)

    // Put data : key= a , value =aaa
    try {
        let data = await highLevelStorage.put('a', 'aaa');
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    // get data
    try {
        let data = await highLevelStorage.get('a');
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    // modify data, key= a , value=bbb
    try {
        let data = await highLevelStorage.put('a', 'bbb');
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    // get data
    try {
        let data = await highLevelStorage.get('a');
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    // delete data
    try {
        let data = await highLevelStorage.del('a');
        console.log(data);
    } catch (err) {
        console.log(err);
    }

    // Batch put data
    try {
        let data = await highLevelStorage.batchPut([{ key: '111', value: 111 }, { key: '222', value: 2222 }]);
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}

main();