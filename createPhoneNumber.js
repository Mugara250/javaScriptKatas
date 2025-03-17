/*
1. Declare a variable and initialize it to an empty string to store the phone number.
2. Loop through the numbers using a for loop.
3. Append the first three numbers to the string variable enclosed in parentheses with a space after them.
4. Append the next three numbers to the string variable and add a hyphen between them and the next four numbers.
*/

function createPhoneNumber(numbers) {
    let phoneNumber = "";

    for (let i = 0; i < numbers.length; i++) {
        switch (i) {
            case 0:
                phoneNumber += `(${numbers[i]}`;
                break;
            case 2:
                phoneNumber += `${numbers[i]}) `;
                break;
            case 5:
                phoneNumber += `${numbers[i]}-`;
                break;
            default:
                phoneNumber += numbers[i];

        }
    }

    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));