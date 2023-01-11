// Iteration 1: Names and Input
console.log("Iteration-1");
const hacker0 = "Maik";
console.log(`The driver's name is ${hacker0}.`);
const hacker1 = "Andy";
console.log(`The navigator's name is ${hacker1}.`);

// Iteration 2: Conditionals
if (hacker0.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker0.length} characters.`);
  } else if (hacker0.length < hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker0.length} characters!`);
  }

// Iteration 3: Loops
// 3.1
let fullWord = "";
for (let i = 0; i < hacker0.length; i++) {
  let currentLetter = hacker0[i].toUpperCase();
  if (i < hacker0.length - 1) {
    currentLetter += " ";
  }
  fullWord += currentLetter;
}
console.log(fullWord);

// 3.2
let reverseNavigator = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  let currentLetter = hacker1[i];
  reverseNavigator += currentLetter;
}
console.log(reverseNavigator);

// 3.3
const str0 = "The driver's name goes first.";
const str1 = "Yo, the navigator goes first definitely.";
const str2 = "What?! You both have the same name?";

const letterArr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let hacker0start = undefined;
let hacker1start = undefined;

let longerName;
if (hacker0.length > hacker1.length) {
  longerName = hacker0;
} else {
  longerName = hacker1;
}

for (let i = 0; i < longerName.length; i++) {
  if (hacker0 === hacker1) {
    break;
  }

  if (hacker0start !== undefined && hacker1start !== undefined) {
    break;
  }
  
  if (hacker0[i] !== hacker1[i]) {
    
    for (let j = 0; j < letterArr.length; j++) {
      
      if (hacker0[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker0start = j;
      }
      
      if (hacker1[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker1start = j;
      }
      
      if (hacker0start !== undefined && hacker1start !== undefined) {
        break;
      }
    }
  }
}

if (hacker0start > hacker1start) {
    console.log(str1);
} else if (hacker0start < hacker1start) {
    console.log(str0);
} else {
    console.log(str2);
}