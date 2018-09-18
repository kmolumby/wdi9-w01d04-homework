// // // console.log('this s workgin');

// // // 1. Verbal questions
// // // What is the difference between a parameter and an argument?
// //     A parameter is the the variable that is listed in the function's definition and an argument 
// //     is what is called when a function is called.

// // // Within a function, what is the difference between return and console.log?
// // Return is used to return a value to the code that called the function; the function will stop executing an return the value.
// // The console.log writes data from the script to the console. It is used to tell a developer what's going on and doesn't affect the code.

// // // What are the implications of the ability of a function to return a value?

// // A function's variables need to be defined and the variables need to work within the scope of the function. If a variable is 
// // defined within a local scope of code and then called outside of that scope the function will not return.

// // 2. Palindrome again.
// // Write a function checkPalindrome that accepts a single argument, a string. 
// // Yes, you've done it before, but do it again. 
// // Later in this assignment we're gonna beef up our palindrome function some. 
// // See if you can do it without looking back at your previous answer. 
// // The function should return true if the string is a palindrome, 
// // false if not. Make sure your function will give the correct answer for words 
// // with capital letters.


const checkPalindrome = (str) => {
   const reverseString = str.split("").reverse().join("");

   if (reverseString == str) {
       return true;
   } else {
       return false;
   }
}

console.log(checkPalindrome('burrito'));

// // 3. Digit Sum
// // Write a function sumDigits that accepts a number and returns the sum of its digits.

// // console.log(sumDigits(42));
// // => 6;


  
 


const sumAndString = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    return sum.toString();
}

console.log(sumAndString(7,8,9));

//
// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

// console.log(calculateSide(8, 6));
// => 10


const calculateSide = (sideA, sideB) => {
  
    const sideC = Math.sqrt((Math.pow(sideA,2))+(Math.pow(sideB,2)));
    return sideC;
}

calculateSide(6,7);


// 5. Sum Array
// Write a function sumArray that takes an array as an argument. 
//The array should contain numbers. 
//The function should return the sum of the numbers in the array.

// Expected result:

// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21


const sumArray = (arr) => {
    let sum = 0;
    for (j = 0; j< arr.length; j++) {
        (sum+=arr[j]);
    }
    return sum;
}

console.log(sumArray([9,1,2,3,4]));

// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.



const checkPrime = (num) => {
    const squareRoot = Math.sqrt(num);
    for (let i=2; i < squareRoot; i++) {
    if (num % i === 0 ) {
        return false; 
 }
 return true;
}
}
console.log(checkPrime(8));

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

const PrintPrimes = (num) => {
    for( let i = 1; i <= num; i ++) {

        if( checkPrime(i) ) {
            console.log(i);
        }
        
    }
}

PrintPrimes(97);

