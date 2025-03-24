/*
1. Create an object that will store each number as a key and the number it appears as the key's value.
2. Loop through the array.
3. For each iteration, check whether the number exists in the object as key. If it exists, increment it's value by one,
otherwise initialize it in the object to a value of 1.
4. Loop through the object, and look out for the number whose value is 1, and then return it.
*/

function uniqueNumber(numbers) {
    
    const result = new Map();

    for (let num of numbers) {
        result.has(num) ? result.set(num, result.get(num) + 1) : result.set(num, 1);
    }

    for (let [num, count] of result) {
        if (count === 1) return num;
    }
}

console.log(uniqueNumber([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]));