const mySuccessFunction = function () {
    console.log('Success, You are a GEEK');
}

const myPromise = new Promise(function(resolve, reject) {
  });

myPromise.then(mySuccessFunction).catch(function () {
    console.log('Some error has occurred');
});

