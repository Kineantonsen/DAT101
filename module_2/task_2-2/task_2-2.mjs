"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6

2 +(3(2-4)) 6 = -34*/

let part1_Answer = 2 +(3*(2-4)) *6;

printOut("Using following expression, ensuring the result is -34; 2+3*2-4*6: " + part1_Answer );
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch*/
/*
    (25.4 / 1000) * 25.34m
    */
   const millInInch = 25.4;
   const millInMeters = 1000;
   const metres = 25.34;
   const answer = (metres * millInMeters) / millInInch;
   const exactAnswer = answer.toFixed(2);

printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* 
Convert 3 days, 12 hours, 14 minutes and 45 seconds to inches
*/
const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24; 
const part2_Answer =
    (3 * hoursInDay * minutesInHour) +
    (12 * minutesInHour) +
    14 +
    (45/secondsInMinutes);
printOut("Part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);


part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);


part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);


part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinutes;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* 
Convert 54 dollars to norwegian kroner, and print the price for both:
NOK --> USD and USD --> NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole kroner and whole dollars
*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollar is " + amountNOK + " Kroner");
amountUSD = Math.round(amountNOK * USD);
printOut( amountNOK + " Kroner is " + amountUSD + " dollars");

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.*/

let text = "There is much between and earth that we do not understand.";
let length = text.length;
let result = text.substring(35, 35 + 8);
let index = text.indexOf("earth");


printOut(text);
printOut("The sentence contains: " + length);
//printOut(length.toString());
printOut("The character at position number 19 is: " + text.charAt(19));
printOut("The characters starting at position number 35 and 8 characters forward is: " + result);
//printOut(result.toString());
printOut ("The index at which earth starts in the text is:" + index); 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/

printOut("Is 5 greater than 3? " + Boolean(5 > 3));
printOut("Is 7 greater than 7? " + Boolean(7 > 7) + " is 7 equal to 7? " + Boolean(7 == 7));
printOut("Is a greater than b? " + Boolean("a" > "b"));
printOut("Is 1 less than a? " + Boolean("1" < "a"));
printOut("Is 2500 less than abcd? " + Boolean("2500" < "abcd"));
printOut("arne is not equal to thomas " + Boolean("arne" !== "thomas"));
printOut("(2 equals 5) is this statement truse? " + Boolean(2 === 5));
printOut("(abcd is greater than bcd) is this statement truse? " + Boolean("abcd" === "bcd")); 




printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/

printOut("from text '254' to a number: " + parseInt("254"));
printOut("from text '57.23' to a number: " + parseFloat("57.23"));
printOut("from text '25 kroner' to a number: " + parseInt("25 kroner"));


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/

let r = Math.floor(Math.random() * 360) + 1

printOut("create a variable 'r' and randomly generate a number from 1 to 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days.
*/

let totalDays = 131;
let weeks = Math.floor (totalDays / 7);
let days = totalDays % 7;

printOut("How many weeks and days are in 131 days? " + weeks + "weeks " + days + " days");

printOut(newLine);