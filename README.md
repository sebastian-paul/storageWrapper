# Storage-Wrapper
Have an object lowLevelStorage with the following methods:

* get(key, callback)
* put(key, value, callback)
* del(key, callback)


Written a wrapper that exports a promise-based interface, as well as an additional higher level function batchPut. 

The sample usage looks like this:

* const highLevelStorage = wrap(lowLevelStorage)

* highLevelStorage.put('a ', 1) // returns a Promise

* highLevelStorage.get('a')     // returns a Promise

* highLevelStorage.del('a')     // returns a Promise

* highLevelStorage.batchPut([{ key: 'a', value: 1 },{ key: 'b', value: 2])


Implemented the wrap function above

 &

Written a lowLevelStorage mock, and test 


### For unit test using mocha

```
npm install mocha
```

```
 npm test

```


### Start app 

```
 npm start

```