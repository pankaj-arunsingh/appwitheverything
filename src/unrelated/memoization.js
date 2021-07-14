const clumsysquare = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
};

const simpleSquare = (num) => {
  return Math.sqrt(num);
};

const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};
const clumsysquareMemoized = memoize((num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
});
// console.time("First call");
// console.log(clumsysquare(9467));
// console.timeEnd("First call");

// // use the same value two times
// console.time("Second call");
// console.log(clumsysquare(9467));
// console.timeEnd("Second call");

// console.time("Third call");
// console.log(clumsysquare(9467));
// console.timeEnd("Third call");

// console.time("First call clumsysquareMemoized");
// console.log(clumsysquareMemoized(9467));
// console.timeEnd("First call clumsysquareMemoized");

// // use the same value two times
// console.time("Second call clumsysquareMemoized");
// console.log(clumsysquareMemoized(9467));
// console.timeEnd("Second call clumsysquareMemoized");

// console.time("Third call clumsysquareMemoized");
// console.log(clumsysquareMemoized(9467));
// console.timeEnd("Third call clumsysquareMemoized");

// console.time("First call simpleSquare");
// console.log(simpleSquare(9467));
// console.timeEnd("First call simpleSquare");

// // use the same value two times
// console.time("Second call simpleSquare");
// console.log(simpleSquare(9467));
// console.timeEnd("Second call simpleSquare");

// console.time("Third call simpleSquare");
// console.log(simpleSquare(9467));
// console.timeEnd("Third call simpleSquare");

const myMemoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(args);
    }
    return results[argsKey];
  };
};
const fibonacci = memoize((n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else return fibonacci(n - 1) + fibonacci(n - 2);
});
console.time("First call");
console.log("fibonacci series", fibonacci(5));
console.timeEnd("First call");
