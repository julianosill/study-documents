// Array methods

const array = [1,4,5];           // Creates an array.
const newArray = new Array(6);   // Creates an array with empty elements.
array.length;                    // Represents the number of elements in that array.

// Methods

array.at();                 // Same as array[i], but works with negatives as well.
array.concat();             // Merges two or more arrays and returns a new array.
array.copyWithin();         // Copies part of an array to another location in the same array and returns it without modifying its length.
array.entries();            // Returns a new array iterator object that contains the key/value pairs for each index in the array.
array.every();              // Tests all elements in a certain condition. Returns a boolean value.
array.fill();               // Changes all elements with a stated value from start index (default is "0") to end (default is ".length").
array.filter();             // Creates a shallow copy with filtered elements.
array.find();               // Returns the first element that satisfies the condition.
  array.findIndex();
  array.indexOf();
array.findLast();           // Same as .find() but in reverse.
  array.findLastIndex();
array.flat();               // Creates a new array with sub-array elements concatenated into specified depth.
  array.flatMap();          // Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
array.forEach();            // Iterates through each element.
array.from();               // Creates a new shallow-copy from an iterable array.
array.includes();           // Checks if an array includes the value and returns a boolean.
Array.isArray();            // Determines whether is an array or not.
array.join();               // Returns a string by concatenating all the elements (default separator is ",").
array.keys();               // Returns a new Array Iterator Object containing the keys for each index.
array.map();                // Creates an array with the results of the function called on every element.
Array.of();                 // Creates an array with the specified elements.
array.pop();                // Removes the last element and returns it.
array.push();               // Adds the elements to the end of an array and returns the new length of it.
array.reduce();             // Executes a "reducer" callback function on each element and pass that value to the preceding element. The final result is a single value.
  array.reduceRight();      // Same as .reduce() but in reverse.
array.reverse();            // Reverses the order of the elements. It's DESTRUCTIVE, it changes the original array.
  array.toReversed();       // Same as .reverse() but doesn't change the original array.
array.shift();              // Removes the first element and returns it.
  array.unshift();          // Adds elements to the beginning of an array and returns its length.
array.slice();              // Returns a copy of a portion of an array, from <start> to <end> specified.
array.some();               // Tests whether at least one element passes the condition.
array.sort();               // Sorts the elements in ascending order. It converts the elements into a string and compares them.
  array.toSorted();         // Same as .sort() but doesn't change the original array.
array.splice();             // Changes the contents of an array by removing or replacing existing elements or adding new elements.
  array.toSpliced();        // Same as .splice() but doesn't change the original array.
array.toLocaleString();     // Converts to strings using their <toLocaleString> methods and separate them with local-specific string (such as comma ",").
array.toString();           // Returns a string with all the elements.
array.values();             // Returns a new Array Iterator Object that iterates the value of each element.
array.with();               // Changes the value of a given index in the array. It doesn't change the original array.


// Syntaxes and examples

// .at()
array.at(index);
const arrayOne = ['apple', 'banana', 'orange' , 'pear'];
arrayOne.at(-2);  // "orange"

// .concat()
array.concat(value0, value1);
const arrayTwo = [1, 2, 3];
arrayOne.concat(arrayTwo);  // [ "apple", "banana", "orange" , "pear", 1, 2, 3 ]

// .copyWithin()
array.copyWithin(target/index, start, end);  // without <end>, it copies from the index to the end
const arrayThree = ['apple', 'banana', 'orange' , 'pear'];
arrayThree.copyWithin(1, 2, 3);  // [ "apple", "orange", "orange" , "pear" ]

// .entries()
array.entries();
const arrayLetters = ['a', 'b', 'c'];
const iterateLetters = arrayLetters.entries();
iterateLetters.next().value;  // Array [0, "a"]
iterateLetters.next().value;  // Array [1, "b"]

for (const element of arrayLetters) {
  console.log(element);
}
/*
  "a"
  "b"
  "c"
*/

// .every()
array.every(callbackFn);
const arrayFour = [1, 3, 4, 5, 6];
arrayFour.every((x) => x > 2);  // false

// .fill()
array.fill(value, start, end);
const arrayFive = [1, 2, 3, 4];
arrayFive.fill(8, 2, 4);  // [ 1, 2, 8, 8 ]

// .filter()
array.filter(callbackFn);
const arraySix = ['one', 'two', 'three', 'four'];
arraySix.filter(element => element.length > 3);  // [ "three", "four" ]

// .find() / .findLast()
array.find(callbackFn);
  array.findIndex(callbackFn);
  array.indexOf(value);
array.findLast(callbackFn);
  array.findLastIndex(callbackFn);
const arraySeven = [22, 33, 44];
arraySeven.find(num => num > 30);  // 33
  arraySeven.findIndex(num => num > 35);  // 2
  arraySeven.indexOf(22);  // 0
arraySeven.findLast(num => num < 50);  // 44
arraySeven.findLastIndex(num => num < 50);  // 2

// .flat()
array.flat(depth);  // default is 1.
  array.flatMap(callbackFn);
const arrayEight = [1, 2, 3, [4, [5, 6]], [7, 8]];
arrayEight.flat();  // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]
arrayEight.flat(2);  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
arrayEight.flatMap(num => num > 1 ? true : num);  // [ 1, true, true, 4, [ 5, 6 ], 7, 8 ]

// .forEach()
array.forEach(callbackFn);
const arrayNine = ['one',  'two', 'three'];
arrayNine.forEach(element => console.log(`Item: ${element}`));
/*
  Item: one
  Item: two
  Item: three
*/

// .from()
Array.from(arrayLike, mapFn);
Array.from('string');  // [ "s", "t", "r", "i", "n", "g" ]
Array.from('string', letter => letter.toUpperCase());  // [ "S", "T", "R", "I", "N", "G" ]

// .includes()
array.includes(searchElement, fromIndex);
arrayNine.includes('one');  // true
arrayNine.includes('on');  // false
arrayNine.includes('one', 1);  // false

// Array.isArray()
Array.isArray(arrayNine);  // true
const falseArray = '[]';
Array.isArray(falseArray);  // false

// .join()
array.join(separator);  // default is ","
const joinArray = ['H', 'e', 'l', 'l', 'o'];
joinArray.join();  // H,e,l,l,o
joinArray.join('');  // Hello
joinArray.join('.');  // H.e.l.l.o

// .keys()
array.keys();
const arrayTen = ['a', 'b', 'c'];
const arrayTenIterator = arrayTen.keys();
for( const key of arrayTenIterator) { console.log(key); }
/*
  0
  1
  2
*/

// .map()
array.map(callbackFn);
arrayTen.map(letter => letter + letter);  // [ "aa", "bb", "cc" ]

// Array.of()
Array.of(element0, element1);
Array.of(2);  // [ 2 ]
Array(2);  // Array with 2 empty slots.
Array.of("one", 2, true);  // [ "one", 2, true ]

// .pop()
array.pop();
const arrayEleven = [ 'one', 'two', 'three'];
arrayEleven.pop();  // "three"
arrayEleven;  // [ "one", "two" ]

// .push()
array.push(element0, element1)
const arrayTwelve = [1, 2, 3];
arrayTwelve.push(4, 5, 6);  // 6
arrayTwelve;  // [ 1, 2, 3, 4, 5, 6];

// .reduce()
array.reduce(callbackFn, initialValue);
const arrayThirteen = [1, 2, 3];
arrayThirteen.reduce((accumulator, currentValue) => accumulator + currentValue);  // 6

// .reduceRight();
array.reduceRight(callbackFn, initialValue);
const arrayFourteen = [[1, 2], [3, 4], [5, 6]];
arrayFourteen.reduceRight((acc, currVal) => acc.concat(currVal));  // [ 5, 6, 3, 4, 1, 2 ]

// .reverse() / .toReversed()
array.reverse();
const arrayFifhteen = [1, 2, 3];
arrayFifhteen.reverse();  // [ 3, 2, 1 ]

// .shift()
array.shift();
arrayFifhteen.shift();  // 1
arrayFifhteen;  // [ 2, 3 ]

// .unshift()
array.unshift(element0, element1);
arrayFifhteen.unshift(4);  // 4
arrayFifhteen;  // [ 4, 1, 2, 3 ]

// .slice()
array.slice(start, end);
const arraySixteen = ['chester', 'mike', 'joe', 'phoenix', 'rob', 'brad'];
arraySixteen.slice(2, 4);  // [ "joe", "phoenix" ]

// .some();
array.some(callbackFn);
arraySixteen.some(name => name.length <= 3);  // true

// .sort() / .toSorted()
array.sort(compareFn);
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
months.sort();  // [ "Apr", "Feb", "Jan", "Mar" ]
const arraySeventeen = [1, 5, 200, 15, 100, 10];
arraySeventeen.sort();  // [ 1, 10, 100, 15, 200, 5 ]
const compareNumbers = (a, b) => a - b;
arraySeventeen.sort(compareNumbers);  // [ 1, 5, 10, 15, 100, 200 ]

// .splice()
array.splice(start, deleteCount, itemN);
months.splice(1, 0, 'February', 'March');  // [ "Jan", "February", "March", "Feb", "Mar", "Apr" ]
months.splice(1, 2, 'February', 'March');  // [ "Jan", "February", "March", "Apr" ]

// .toLocaleString()
array.toLocaleString(locales, options);
const number = 123456.789;
number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  // R$ 123.456,79

// .toString();
array.toString();
const arrayEighteen = [1, 5, 'ten', [2, 6]];
arrayEighteen.toString();  // "1,5,ten,2,6"

// .values()
array.values();
const arrayEighteenIterator = arrayEighteen.values();
for (const value of arrayEighteenIterator) { console.log(value); }
/*
  1
  5
  "ten"
  [ 2, 6 ]
*/

// .with()
array.with(index, value);
const arrayWith = [2, 4, 6, 8];
arrayWith.with(1, 22);  // [ 2, 22, 6, 8 ]