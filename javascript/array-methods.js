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
  array.findIndex(number);
  array.indexOf(value);
array.findLast();           // Same as .find() but in reverse.
  array.findLastIndex();
array.flat();               // Creates a new array with sub-array elements concatenated into specified depth.
  array.flatMap();          // Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
array.forEach();            // Iterates through each element.
array.from();               // Creates a new shallow-copy from an iterable array.
array.includes();           // Checks if an array includes the value and returns a boolean.
array.isArray();            // Determines wheter is an array or not.
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