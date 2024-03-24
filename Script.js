var a = 6;
var b = 15;
var c = "I am a String!";

a = a + 1;
b = b + 5;
c = c + "String!";
console.log(a)
console.log(b)
console.log(c)

//Decations

var studyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments

studyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
console.log(studyCapVar)
console.log(properCamelCase)
console.log(titleCaseOver)

var sum = b + a;
console.log(sum)

// Declaring String variables

var firstName = "Sagar";
var lastName = "Katekhaye";

//change code below this line

var myFirstName = "Damayant";
var myLastName = "Katekhaye";
console.log(myFirstName)
console.log(myLastName)

//Escaping Literal Quotes in the string

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

var myStr = `'<a href="http://www.example.com" target="_bank">Link</a>'`;
console.log(myStr)
//If we put backticks befor - at the beginning and at the end of the string.
//Then we can use single quo and double quotes both at the same time within the string.

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)

//Concatenating Strings the Plus Operator
//Example 1
var ourstr = "I come first. " + " come second. ";

var myStr = "This is the start. " + "This is the end.";
console.log(myStr)

// also plus and equal operator
//Example 1
var ourstr = "I come first. ";
ourstr += "I come second.";

var myStr = "This the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr)

//Concatenating using variables
//Example 1

var ourName = "Sagar Katekhaye";
var ourstr = "Hello, my name is "+ ourName + ",how are you?";

var myName = "Kaustubh Shete";
var myStr = "My name is " + myName + " and I am well!";
console.log(ourstr)
console.log(myStr)

//Appending Variables to Strings
//Example
var anAdjactive = "awsome!";
var ourstr = "freeCodeCamp is ";
ourstr += anAdjactive;

var someAdjective = "worthwhile";
var myStr = "Learning JavaScript is ";
myStr += someAdjective
console.log(ourstr)
console.log(myStr)

//What is the Find Length of String?
//Example 

var firstNameLength = 0;
var firstName = "Sagar";

firstNameLength = firstName.length;
console.log(firstNameLength)
//Setup

var lastNameLength = 0;
var lastName = "Katekhaye";
lastNameLength = lastName.length;
console.log(lastNameLength)

//what is Bracket Notation to Find the First Character in a String?
//Example
var firstNameLength = 0;
var firstName = "Sagar";

firstNameLength = firstName[0];
console.log(firstNameLength)
//Setup

var lastNameLength = 0;
var lastName = "Katekhaye";
lastNameLength = lastName[1];
console.log(lastNameLength)

//What is the String Immutability?
//Example

var myStr = "Jello World";

myStr = "Hello World";
console.log(myStr)

//What is the Bracket Notation to Find Nth Character in a String?
//Example

var firstName = "Sagar";
var secondLetterofFirstName = firstName[1];

//Setup

var lastName = "Katekhaye";
var thirdLetterofFirstName = lastName[2];
console.log(thirdLetterofFirstName)

// To find Last Character in the String in Bracket Notation?
//Example

var firstName = "Sagar";
var lastLetterofFirstName = firstName[firstName.length - 1];

//Setup
var lastName = "Katekhaye";
var lastLetterofLastName = lastName[lastName.length - 1];
console.log(lastLetterofLastName)

//To Find the Nth-to-last Character in String in Bracket Notation?
//Example

var firstName = "Sagar";
var lastLetterofFirstName = firstName[firstName.length - 3];

//Setup
var lastName = "Katekhaye";
var secondToLastLetterofLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterofLastName)

//Word Blanks
//Example

function wordBlanks(myNoun, myAdjective, myVerb,myAdverb)
{
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "Quickly"));
console.log(wordBlanks("bike", "slow", "flew", "solwly"));

//How to store Multiple Values with Arrays?
//Example

var ourArray = ["Sagar", 23];
var myArray = ["Damayant", 1];
console.log(myArray)

//Nested/Multidimensional Arrays
//Example

var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["Bulls", 23], ["white sox", 45]];
console.log(myArray)

//What is Access Array Data with Indexes?
//Example:

var ourArray = [50,60,70];
var ourData = ourArray[0];

//Setup

var myArray = [50,60,70];
var myData = myArray[0];
 console.log(myData);

 //Modify Array Data with Indexes?
 //Example:

 var ourArray = [18,64,99];
 ourArray[1] = 45;

 //Setup
 var myArray = [18,64,99];
 myArray[0] = 45;
 console.log(myArray)

//Access Multi-Dimensional Array with Indexes?
//Example:

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData)

// Manipulate Arrays With Push()?
//Example:

var ourArray = ["Kaustubh", "K", "Genious"];
ourArray.push("happy", "Excelence");
console.log(ourArray)
// ourArray now equals ["Kaustubh", "K", "Genious", ["happy", "Excelence"]]
//Setup 
var myArray = ["Kaustubh", "Genious"];
myArray.push("Excelence");
console.log(myArray)

//Manipulate Arrays with pop()?
//Example:

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray)
//removedFromOurArray now equals 3, and ourArray now equals [1,2]
//Setup
var myArray = ["Kaustbh", "Genious"];
var removedFromMyArray = myArray.pop();
console.log(myArray)

//Manipulate Array with shift()?
//Example:

var myArray = ["Happy", "Genious", "Kaustubh"];
var removedFromMyArray = myArray.shift();
console.log(myArray)

//Manipulate Arrays with unshift()?
//Example:

var myArray = ["Happy", "Genious", "Kaustubh"];
myArray.unshift();
console.log(myArray)

//What is a Shopping List in JavaScript?
//Example:

var myList = ["name:milk, quanity:2", "bananas-3", "juice-5", "protein-2kg"];
console.log(myList)

//Write Reusable Code with Functions in JavaScript?
//Example:

function ourReusableFunction() {
    console.log("Always Peace");
}

ourReusableFunction();

//Function with Parameters
//Example:
function greet(name) {
    console.log("Chal bhai " + name + " andda rice khane chalte");
}

greet("kaustubh");

//Passing Valuse to Function with Argument?
//Example:
function Values(a, b){
    console.log(a * b);
}
Values(59, 60);

//Global Scope and Function?
//Example:
var myGlobal = 10;

function fun1() {

    oopsGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output); // Accessible within the function
}
console.log(fun1(10));
console.log(fun2(5));

//Local Scope and Functions?
//Example:
function myLocalScope() {
    var myVar = 10;
    console.log(myVar);
}
myLocalScope();

//Global vs Local Scope in Functions?
//Example:
var outerWare = "T-shirt";

function myOutfit() {
    var outerWare = "Sweater";

    return outerWare;
    
}
myOutfit();
console.log(myOutfit()); // calling inside the function
console.log(outerWare); //calling outside the function

// Return a value from a Function with Return?
//Exmaple:
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));
//or
function timesFive(num) {
    return num + 20;
}
console.log(timesFive(-25));

//Understanding undefined Value Returned from a Function?
//Example:
var sum = 0;
function addThree() {
    sum += 3;
}
console.log(addThree())

//Assignment with a Returned Value
//Example:
var changed = 0;
function change(num) {
    return (num +5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num +3) / 5;
}

processed = processArg(7);

console.log(change(10))
console.log(processArg(15))

//Stand in line in JavaScript?
//Example:

function nextInLine(arr, item) {
arr.push(item)
    return arr.shift();
}
var testArr = [1,2,3,4,5,];
console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//What are Boolean Values?
//Example:
function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans())

// Using Conditional Logic with If Statement?
//Example:
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes, it's true";
    }
    return "No,it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return " Yes, that was true";
    }
    return " No, that was false";
}
console.log(ourTrueOrFalse(false));
console.log(trueOrFalse(true));

//Comparison with the Equality Operator?
//Example:

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10))

//Comparison with the Strict Equality Operator?
//Example:
function testEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(12))

//Practice Comparing Different Values
//Example:
function compareEquality(a, b) {
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"))

//Comparison with the inequality Operator?
//Example: 
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(99))

//Comparison with the StrictInequality Operator?
//Example:
function testStrictNotEqual(val) {
    if (val !== 22) 
    {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual('20'))

//Comparisons with Greater Than Operator?
//Example:
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(99));

//Comparison with the Greater Than Or Equal To Operator? 
//Ezample: 
function testGreaterThenOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 20"
}
console.log(testGreaterThenOrEqual(15))

//Similarly with Less Than Operator
//Example:
function testLesserThan(val) {
    if (val < 50) {
        return "Less Than 50";
    }
    if (val < 75) {
        return "Less Than 75";
    }
    return "75 or Over"
}
console.log(testLesserThan(100))

//Comparison with the Less Than Or Equal To Operator? 
//Example:
function testLesserThanOrEqual(val) {
    if (val <= 12){
        return "Samller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Samller Than or Equal to 24";
    }
    return "More than 24";
}
console.log(testLesserThanOrEqual(11))

//Comparison With Logical AND Operator?
//Example:
function testLogicalAndOperator(val) {
    if (val <= 50 && val >= 25) {
            return "Yes";
    }
    return "No";
}
console.log(testLogicalAndOperator(25))

//Comparison With Logical OR Operator?
//Example:
function testLogicalOrOperator(val) {
    if (val < 10 || val > 50) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOrOperator(100))

//Else Statement?
//Example:
function testElse(val) {
    var result = "";
    if (val >= 5) {
        result = "Bigger Than 5";
    } else {
        result = "5 or Samller";
    }
    return result;
}
console.log(testElse(50))

//Else If Statement?
//Example:
function testElseIf(val) {
    var result = "";
    if (val >= 100) {
        result = "Greater Than 100";
    } else if (val <= 10) {
        result = "Smaller Than 10";
    } else {
        result = "Between 10 and 100";
    }
    return result;
}
console.log(testElseIf(110))

//Logical Order in If Else Statements?
//Example:
function orderMyLogic(age) {
    if (age <= 10) {
        return "child";
    }else if (age <= 20) {
        return  "Teenager";
    }else if (age <= 55){
        return "Adult";
    }else{
        return "Senior Cityzen";
    }
}
console.log(orderMyLogic(65))

//Chaining If Else Statement?
//Example:
function testGrade(score) {
    if (score >= 90) {
        return "Pass with an A";
    }else if (score >= 80) {
        return "Pass with an B";
    }else if (score >= 70) {
        return "Pass with an C";
    }else if (score >= 60) {
        return "Pass with an D";
    }else{
        return "Fail";
    }
}
console.log(testGrade(95))

//What is Golf Code in JavaScript?
//Example:
var names = ["Hole-in-one!", "Eagle", "Birdie", "par", "Bogey", "Double Bogey", "Triple-Bogey", "Go Home!!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par -2) {
        return names[1];
    }else if (strokes == par -1) {
        return names[2];
    }else if (strokes == par) {
        return names[3];
    }else if (strokes == par +1) {
        return names[4];
    }else if (strokes == par +2) {
        return names[5];
    }else if (strokes == par +3) {
        return names[6];
    }else if (strokes >= par +4) {
        return names[7];
    }
}
console.log(golfScore(5, 1))

//What is Switch Statement in JavaScript?
//Example:
function caseSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Kaustubh";
            break;
        case 2:
            answer = "Sagar";
            break;
        case 3:
            answer = "Swatangh";
            break;
        case 4:
            answer = "Dhanashree";
            break;            
    }
    return answer;
}
console.log(caseSwitch(1))

// Default Option in Switch Statements?
//Example:
function caseDefaultSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Kaustubh";
            break;
        case 2:
            answer = "Sagar";
            break;
        case 3:
            answer = "Swatangh";
            break;
        case 4:
            answer = "Dhanashree";
            break;
            default:
            answer = "Adious Amigos";
    }
    return answer;
}
console.log(caseDefaultSwitch(5))

//Multiple Identical Options in Switch Statement?
//Example:
function multiCasesInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Team DMC, Kaustubh, Dr.Himanika, Dr.Khandayet, Sagar, Dr.Nikunje";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Team ATL, Kaustubh, Sagar, Renu Kaku, Swetangh";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Team LEARNERS, Kaustubh, Sagar, Swetangh, Dhanashree";
            break;
            default:
                answer = "Surpass Your Limets Right Here, Right Now"; 
    }
    return answer;
}
console.log(multiCasesInSwitch(9))

//Replacing If Else Chains with Switch?
//Example:
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "KVS, The Process Creator";
            break;
        case 2:
            answer = "SGK, The Process User and persever";
            break;
        case 3:
            answer = "SS, The Process User and follower";
            break;
        case 4:
            answer = "D, The Process Learner and follower";
            break;
        case 5:
            answer = "VB, An Inspration that is gone but never forgotten";
            break;
    }
    return answer;
}
console.log(chainToSwitch(5))

//Returning Boolean Values from Functions?
//Example:
function isLess(a, b) {
    if (a < b) {
        return true;
    }else {
        return false;
    }
}
console.log(isLess(10, 15))

// But there is a little trick to this when to want a function to  return a Boolean true or false value.
// Insted of using "if" we can directly call the return to the result.
//Example:
function isLessThan(a, b) {
    return (a < b);
}
console.log(isLessThan(15, 10))

//returning Early Pattern from Function?
//Example:
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
}
console.log(abTest(2, 2))

//counting Cards?
//Example:
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        }
        var holdbet = "Hold"
        if (count > 0) {
            holdbet = 'Bet'
        }
        return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc("K"); cc("A")
console.log(cc(4))

//Build JavaScript Objective?
//Example:
var person = {
    detailes: {
    firstname: "Kaustubh",
    lastname: "Shete",
    age: 24, 
    address: {
        street: "Jagrut Nag Mandir",
        city: "Yavatmal",
        state: "Maharashtra",
    }}
};
console.log(person.detailes)

//Accessing Object properties with Dot Notation?
//Example:
var testObj = {
    Hat : "Ballcap",
    Shirt : "Jersey",
    Shoes : "Nike"
};
console.log(testObj.Shirt)

//Accessing Object properties with Brcket Notation?
//Example:
var testObjBracket = {
    "The Founder": "Of Process", // Property name contains a space
    "First Name" : "Kaustubh",
   "Last Name" : "Shete",
    "Age" : "24",   
};
console.log(testObjBracket["The Founder"])

//Accessing Object Properties With Variables?
//Example:
var testObjVariable = {
    "15" : "Kaustubh",
    "07" : "Sagar",
}
console.log(testObjVariable["07"])

//Updating the Object properties?
//Example:
var myDog = {
    Name : "Tuffy",
    Legs : "4",
    Tails : "1",
    Friends : "Everyone",
};
myDog.Name = "Happy Tuffy"
console.log(myDog.Name)

// Adding New Properties to an Object?
//Exapmle:
var myTeam = { 
        "01": "Kaustubh",
        "02": "Sagar",
        "03": "Shwetang",
        "04": "Dhanshree",
};

myTeam["Ex-Member"] = "Vaibhvi";
console.log(myTeam);

//Delete Properties from object?
//Example:
var ourDog ={
    Name: "Tuffy",
    Legs: "4",
    Tails: "1",
    Friends: "Everyone",
    Bark: "Bow-Wow"
};
delete ourDog.Bark;
console.log(ourDog)

//Using Objects for Lookups?
//Example:
function phoneticLookup(val) {
    var answer = "";
    var lookup = {
        "Alpha": "Kaustubh",
        "Bravo": "Sagar",
        "Charlie": "Shwetang",
        "Delta": "Dhanashree"
    };
    answer = lookup[val];
    return answer;
}
console.log(phoneticLookup("Charlie"))

//Testing Object for Properties?
//Example:
function checkObj(checkProp) {
var myObj = {
    Gift: "Pony",
    Pet: "Dog",
    Bed: "Sleigh"
}
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else{
        return "Not Found"
    }
};
console.log(checkObj())

//Manuplating Complex Objects
//Example:
var myMusic = [{
    "Artist": "Billy Joel",
    "Title": "Piano Man",
    "Release_year": 1973,
    "Formats": [
        "CD",
        "BT",
        "LP"
    ],
    "Gold":["True"]
},
{
    "Artist": "Bob Marley", 
    "Title": "Could You Be Loved",
    "Release_year": 1980,
    "Formats": [
        "YouTube Video"
    ],
}];
console.log(myMusic[0]["Gold"][0])

//Accessing Nested Objects?
//Example:
var myStore = {
    "car":{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}