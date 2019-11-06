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
  let finalString = '';
  for (let i = 0; i < bookObject.length; i++) {
    finalString = `"${bookObject[i].title} was written by ${bookObject[i].author}."`;
    console.log(finalString);
  }
}

// Question 4
const repeatedCharacters = () => {

}

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}