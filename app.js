
const lowLevelStorage = require('./lowLevelStorage');
const wrap = require('./highLevelStorageWrapper');


const highLevelStorage = wrap(lowLevelStorage)

// Put data : key= a , value =aaa

highLevelStorage.put('a', 'aaa').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// get data

highLevelStorage.get('a').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// modify data, key= a , value=bbb

highLevelStorage.put('a', 'bbb').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// get data

highLevelStorage.get('a').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// delete data

highLevelStorage.del('a').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// Batch put data

highLevelStorage.batchPut([{ key: '111', value: 111 }, { key: '222', value: 2222 }]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});