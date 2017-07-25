"use strict";

// Warm Up
// setTimeout(function () {
// 	console.log("TIMED OUT!");
// }, 300);

// // Fulfill a promise
// var promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		resolve("FULFILLED!");
// 	}, 300);
// });

// promise.then((successMessage) => {
// 	console.log(successMessage);
// });

// // Reject a promise
// var promise = new Promise(function(fulfill, reject) {
// 	setTimeout(function() {
// 		reject(new Error("REJECTED!"));
// }, 300);
// });
// function onReject (error) {
// 	console.log(error.message);
// };
// promise.then(null,onReject);

// // To reject or not to reject
// var promise = new Promise(function (fulfill, reject) {
// 	fulfill("I FIRED");
// 	reject(new Error("I DID NOT FIRE"));
// });

// function onReject (error) {
// 	console.log(error.message);
// }
// promise.then(console.log, onReject);

// // Always asynchronous
// var promise = new Promise(function (fulfill, reject) {
// 	fulfill("PROMISE VALUE");
// });

// promise.then(console.log);

// console.log("MAIN PROGRAM");

// // Shortcuts
// var message;
// var promise;

// function randomBytes(n) {
//   return (Math.random() * Math.pow(256, n) | 0).toString(16);
// }

// message =
//   'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//   randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//   'terminated in 3 seconds.';

// promise = Promise.reject(new Error(message));

// promise.catch(function (err) {
//   var i = 3;

//   process.stderr.write(err.message);

//   setTimeout(function boom() {
//     process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//     if (!i) {
//       process.stderr.write('\n..... . . . boom . . . .....\n');
//     } else {
//       setTimeout(boom, 1000);
//     }
//   }, 1000);
// });

// // Promise after promise
// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
// 	return second(val);
// });

// secondPromise.then(console.log);

// // Values and promises
// function attachTitle(name) {
// 	return 'DR. ' + name;
// }

// Promise.resolve('MANHATTAN')
// 	.then(attachTitle)
// 	.then(console.log);

// // Throw an error - DOES NOT WORK FULLY
// function parsePromised (json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// parsePromised(process.argv[2])
// .then(null, console.log)

// // An important rule - DOES NOT WORK FULLY
// function iterate (num) {
//   console.log(num);
//   return ++num;
// };

// function alwaysThrows () {
//   throw new Error("OH NOES");
// };

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(null, console.log);

// // Multiple promises
// function all(a, b) {
//   return new Promise(function (fulfill, reject) {
//     var counter = 0;
//     var out = [];

//     a.then(function (val) {
//       out[0] = val;
//       counter++;

//       if (counter >= 2) {
//         fulfill(out);
//       }
//     });

//     b.then(function (val) {
//       out[1] = val;
//       counter++;

//       if (counter >= 2) {
//         fulfill(out);
//       }
//     });
//   });
// }

// all(getPromise1(), getPromise2())
//   .then(console.log);

// // Fetch JSON
// var qhttp = require('q-io/http');

// qhttp.read("http://localhost:1337")
// .then(function (json) {
//   console.log(JSON.parse(json));
// })
// .then(null, console.error)
// .done()








