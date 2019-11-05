// Question 1
const log = (prop) => {
  for(let o in prop){
  console.log(`${[o]} : ${prop[o]},`);
  }
}

// Question 2
const totalProps = (total) => {
  for(let o in total){
  let i = Object.keys(total);
  console.log(i.length);
  }
}

// Question 3
const listBooks = (book) => {
    for(let i = 0; i < book.length; i += 1){
      
    console.log(`${book[i].title} was written by ${book[i].author}.`)
    }
}

// Question 4
const repeatedCharacters = (word) => {
  let letters = word.toLowerCase().split('');
  let letterCount = {};
  for(let i = 0 ; i < letters.length; i += 1 ){
      if(letters[i] in letterCount) {
          letterCount[letters[i]] += 1;
        } else{
            letterCount[letters[i]] = 1;
      }
    }
    for(let letter in letterCount){
        if(letterCount[letter] === 1) {
            delete letterCount[letter];
        }
    }
    return letterCount;
}

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}