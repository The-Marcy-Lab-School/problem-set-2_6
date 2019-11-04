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
 wordIn.toLowerCase().split('');
 
 
 //for (let i = 0; i < wordIn.length; i ++) {
   //lets check if a char is repeated and add it as a key to the obj
   //if (wordIn[i]) {}
   
   
   
   //if we're the first char lets check it against all others
   //for (let j = i; j < wordIn.length; j ++) {
     //if (wordIn[j] === wordIn[i]) {
       //finalObj[`$j`] += 1;
     //}
   //}
 //}
 
}

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}