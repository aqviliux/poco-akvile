/*Validate a telephone number, as if written on an input form.
 Telephone numbers can be written as ten digits, or with dashes,
 spaces, or dots between the three segments, or with the area code
  parenthesized; both the area code
 and any white space between segments are optional.

after clarifying questions client clarifies :
only swiss numbers, no country code, it has to have 10 digits and 
can optionaly have the other characters, 

Constrains:
===========
allowed characters - digits, spaces, dots, parentheses, dashes
only an area code should be parantheses
spaces are optional, parantheses are optional
tel number should start with area code
if phone number has parantheses, the first character in the input has to be (
if phone number has no paranteses the first character in the input has to be 0
the phone number has to have 10 digits, no more no less
charafter is only allowewd between segments:defined the number after area code split in 2,2 and 3
input can not be empty 

Pssibilities:
=============
true:
078 79 54 123 
(078) 79 54 123 
(078)79-54-123 
(078) 79-54-123 
078 79.54.123
0787954123
(078)7954123
(078)79.54.123

false:
078-79-541-23
(078)-79-54-123 
078-79-(54)-123
(0787954123)
890787954123
...
+9.
Input:
======
string, with characters and digits

Output:
=======
boolean - true or false


Procedure:
==========
1.check if input is empty
>yes: return an alert
>no: continue ( (078) 79-54-123 )
2.looping through the string and check constrains for each characters
    -first char either 0 or ( > if (, the ) needs to be at the  5 place and 
        the 2nd char has to be a 0
    -while looping we count the number of digits
    -the moment we found wrong, i.e.not allowed char,.... => the output is false;
    -check lengh of input string and remove spaces; if it just 10 numbers, return success message
    -4th char should be space or number
    -7th and 10th char should be space, dash, dot or number

    -if () exist 6th should be number or space
    -if () exist and 6th is space, check the ending of the string, if it contains special char
        need to check it divides to the separate parts or not correctly
        9th should be number or space,dash,dot


*/

function isTelephoneValid() {
    let inputString = "";
    let countDigit;
    let result;
    let pattern = /^[0-9]+$/;
    inputString = prompt("Please write your telephone number", "");
    if (inputString === "" || inputString.length > 15) {
        inputString = "";
        console.log("please write your phone number correctly");
        alert("please write your phone number correctly");
    }
    //console.log(inputString);
    // console.log(inputString.length);
    if (
        pattern.test(inputString) &&
        inputString.length == 10 &&
        inputString.startsWith("0")
    ) {
        result = true;
        console.log("you entered just digit number");
    }

    isValid(inputString);
}

function isValid(str) {
    let array = str.split("");
    console.log(array);
    for (i = 0; i < array.length; i++) {
        if (array[0] == "(" && array[4] == ")") {
            console.log("number has parantheses");
        }
    }
}

isTelephoneValid();
