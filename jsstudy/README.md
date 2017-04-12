## JS Study


## Javascript Promises
Asynchronous handling, preferred way.

## Promise
The promise object is used for deferred and asynchronous computations. (MDN)
We have no idea when asychronous jobs will complete. That is the JS way.

Callbacks are the default JS way for asynchronous code.

```
function loadImage(src, parent, callback) {
    var img = document.createElement('img');
    img.src = src;
    img.onload = callback;
    parent.appendChild(img);
};
```

## New Definition Promise
Promise is a try catch wrapper around code that will finish at
unpredictable time. We need to pass resolve and reject to tell JS engine,
what constitutes fulfillment.

```
new Promise(function(resolve[, reject]) {
    var value = doSomething();
    if (thingWorked) {
        resolve(value); // resolves leads to then
    } else if (somethingWentWrong) {
        reject(); // reject leads to next catch
    }
}).then(function(value) { // same value as resolve(value)
    // success !
    return nextThing(value);
}).catch(rejectFunction); // receives undefined
```

