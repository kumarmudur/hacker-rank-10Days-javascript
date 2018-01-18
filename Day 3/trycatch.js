/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

 function reverseString(s) {
     try {
         let myArr = s.split("").reverse().join("");
         console.log(myArr);
     } catch (e) {
         console.log(e.message);
         console.log(s);
     }
 }