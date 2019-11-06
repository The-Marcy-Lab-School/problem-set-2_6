// Question 1
const log = (object) => {
  for (let i in object) {
    console.log(i + ": " + object[i]);
  }
}

// Question 2
const totalProps = (object) => {
  return Object.keys(object).length
}

// Question 3
const listBooks = (bookObject) => {
  let finalString = "";
  for (let i = 0; i < bookObject.length; i++) {
    finalString = `"${bookObject[i].title} was written by ${bookObject[i].author}."`;
    console.log(finalString);
  }
}

// Question 4
const repeatedCharacters = (string) => {
  let theObject = {};
  let revisedString = string.split('');

    for (let i = 0; i < revisedString.length;  i ++) {
      if ( !(revisedString[i] in theObject) ) { //if anything exists
        theObject[revisedString[i]] = 1; // doesnt repeat
      } 
      
      else {
        theObject[revisedString[i]] = theObject[revisedString[i]] +1 ;
      }
    }

    for (let x in theObject) {
      if (theObject[x] === 1) {delete theObject[x];}
    }
    return theObject;
}
// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}