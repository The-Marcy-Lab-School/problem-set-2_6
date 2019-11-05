// Question 1
const log = (thingIn) => {
  for (let prop in thingIn) {
    console.log(prop +': '+thingIn[prop]);
  }
}

// Question 2
const totalProps = (thingIn) => {
  let counter = 0;
  for (let prop in thingIn) {
    counter ++;
  }
  return counter;
}

// Question 3
const listBooks = (arrayIn) => {
  for (let i = 0; i < arrayIn.length; i ++) {
    for (let prop in arrayIn[i]) {
      console.log(arrayIn[i].title + ' was written by ' + arrayIn[i].author + '.');
    }  
  }
}

// Question 4
const repeatedCharacters = (wordIn) => {
 let finalObj = {};
 let properCasedWord = wordIn.toLowerCase().split('');
 console.log(properCasedWord);
 for (let i = 0; i < properCasedWord.length;  i ++) {
   if (!(properCasedWord[i] in finalObj)) {
     finalObj[properCasedWord[i]] = 1;
   } else {
     finalObj[properCasedWord[i]] += 1;
   }
 }
 for (let prop in finalObj) {
   if (finalObj[prop] === 1) {delete finalObj[prop];}
 }
 return finalObj;
}

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}