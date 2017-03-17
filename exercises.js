'use strict';

//Do not change any of the function names

function multiplyArguments() {
	var sum = 1;
	if (arguments.length === 0) return 0;
	if (arguments.length === 1) return arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		sum *= arguments[i];
	}
	return sum;
}

function invokeCallback(cb) {
	cb();
}

function sumArray(numbers, cb) {
	var sum = numbers.reduce(function(total, num) {
		return total += num;
	});
	cb(sum);
}

function forEach(arr, cb) {
	arr.forEach(function(element) {
		cb(element);
	});
}

function map(arr, cb) {
	var x = arr.map(function(num) {
		return cb(num);
	});
	return x;
}

function getUserConstructor() {
	function User (options) {
	this.username = options.username;
  this.name = options.name;
  this.email = options.email;
  this.password = options.password;
    this.sayHi = function () {
        return 'Hello, my name is ' + this.name;
      };
    }
    return User;
	}

function addPrototypeMethod(Constructor) {
	Constructor.prototype.sayHi = function() {
		return 'Hello World!';
	};
}

function addReverseString() {
	String.prototype.reverse = function(){
    return this.split('').reverse().join('');
  };
}

function nFactorial(n) {
if (n === 0) return 1;
return n * nFactorial(n - 1);
}

function cacheFunction(cb) {
	var cache = {};
	return function() {
	var arg = arguments[0];
		if(cache.hasOwnProperty(arg)) {
			return cache[arg];
		}
		else {
			cache[arg] = cb(arg);
				return cache[arg];
		}
	};
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
	multiplyArguments: multiplyArguments,
	invokeCallback: invokeCallback,
	sumArray: sumArray,
	forEach: forEach,
	map: map,
	getUserConstructor: getUserConstructor,
	addPrototypeMethod: addPrototypeMethod,
	addReverseString: addReverseString,
	nFactorial: nFactorial,
	cacheFunction: cacheFunction
};
