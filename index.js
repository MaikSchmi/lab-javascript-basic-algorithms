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

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed turpis luctus, aliquam diam vel, sodales orci. Pellentesque ultrices interdum urna, volutpat gravida odio mollis id. Aenean semper, nisl quis laoreet efficitur, orci nisi fringilla orci, ut tincidunt ante sapien in risus. Aliquam non convallis tortor. Duis hendrerit vitae lacus non placerat. Duis turpis risus, accumsan quis mollis sit amet, semper id ligula. Morbi lorem risus, semper in volutpat quis, suscipit ut nibh. Nulla vitae quam venenatis, imperdiet arcu et, convallis ipsum. Morbi malesuada est eu magna sollicitudin sollicitudin. Proin purus nisi, vulputate vitae elementum non, semper sed nunc. Curabitur bibendum mi ante, sit amet lobortis diam vestibulum quis. Mauris sapien mauris, feugiat et pulvinar ac, hendrerit eget ex. Mauris iaculis luctus lectus, eu auctor ex pharetra non. Curabitur libero purus, molestie nec ante ut, pharetra finibus ipsum. Praesent id dolor non leo facilisis iaculis. Maecenas commodo ac lacus eu blandit. Phasellus tincidunt diam quis tortor bibendum tristique. Vivamus vel placerat diam. Phasellus sit amet mauris quis urna euismod dignissim. Etiam cursus, ante euismod sodales ultrices, quam ex pulvinar ligula, ac imperdiet est risus vel turpis. In a accumsan odio. Sed ut dignissim leo, non maximus turpis. Aliquam quis pulvinar sapien. Sed viverra eget nunc in convallis. Vestibulum id mattis diam, sed dapibus augue. Curabitur efficitur efficitur purus non finibus. Sed accumsan libero vitae justo convallis, et feugiat justo lobortis. Mauris et rutrum lacus. Aliquam pulvinar metus nec mi consequat, ac iaculis nibh cursus. Praesent nec mi interdum diam dignissim aliquet ut pretium leo. Duis tortor lectus, dignissim ut ultricies sed, convallis ut sem. Duis dapibus ex ipsum, in imperdiet ante blandit eget. Integer dignissim arcu ac arcu malesuada, vitae auctor orci lacinia. Nam vestibulum malesuada elit ac consequat. Pellentesque pretium libero eget erat eleifend maximus. Aliquam feugiat sapien rutrum, fermentum erat id, egestas erat. Mauris sit amet lectus sit amet elit luctus malesuada. Proin eu posuere arcu. Vivamus ultricies mi est, et condimentum diam auctor a. Integer nec dui eget lacus pretium interdum a eu lectus. Mauris ultrices ultrices tortor vitae condimentum. Integer feugiat sollicitudin bibendum. Curabitur metus dolor, tristique quis commodo ut, commodo interdum eros. Donec volutpat, dui id accumsan malesuada, leo libero dapibus mauris, eu efficitur dui ex id augue. Mauris rutrum sit amet lorem vel venenatis. Mauris ipsum dolor, lobortis sit amet eros sed, consequat aliquam tellus. Duis tincidunt molestie sollicitudin. Suspendisse augue velit, mollis vitae mauris tempor, aliquam euismod nisi. Quisque aliquam velit ac elit luctus luctus.`;

let wordCount;
let etCount = 0;

// Count words
wordCount = longText.split(" ");
console.log(`The lorem text has a total of ${wordCount.length} words in it.`);

// Count "et"
for (let i = 0; i < longText.length; i++) {
  if ((longText[i] + longText[i + 1]).toLowerCase() === "et") {
    if (longText[i - 1] === " " && longText [i + 2] === " ") {
      etCount++;  
    }
  }
}
console.log(`The word "et" appears ${etCount} times in the text.`);



// Bonus 2
const textToCheck =  "No 'x' in Nixon";
let modifiedText = "";

// Remove any non-alphabetical chars
for (let i = 0; i < textToCheck.length; i++) {
  for (let j = 0; j < letterArr.length; j++) {
    if (textToCheck[i].toUpperCase() === letterArr[j].toUpperCase()) {
      modifiedText += textToCheck[i];
    }
  }
}

const textStart = 0;
const textEnd = modifiedText.length;
let isPalindrome = true;

// Compare chars from beginning to end 
for (let i = 0; i < textEnd; i++) {
  if (modifiedText[i].toUpperCase() !== modifiedText[textEnd - i - 1].toUpperCase()) {
    isPalindrome = false;
  }
}

// Output result
if (isPalindrome) {
  console.log(`The sentence "${textToCheck}" is a Palindrome!`);
} else {
  console.log(`The sentence "${textToCheck}" is NOT a Palindrome!`)
}