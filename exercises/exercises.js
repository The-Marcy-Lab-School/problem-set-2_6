// Question 1
const log = () => {
  const attributes = {
    speed: 90,
    power: 95,
    accuracy: 79,
    defense: 82,
  }
  const attributesKeys = Object.keys(attributes);
  const attributesValues = Object.values(attributes);

  for(let i = 0; i < attributesKeys.length; i++){
    console.log(attributesKeys[i] + ': ' + attributesValues[i]);
  }
}

// Question 2
const totalProps = (object) => {
   const objectKeys = Object.keys(object);
   return objectKeys.length;
}

// Question 3
const listBooks = () => {
    const library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Walter Isaacson',
      title: 'Steve Jobs',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];
  
  // "The Road Ahead was written by Bill Gates."
  // "Steve Jobs was written by Walter Isaacson."
  // "Mockingjay: The Final Book of the Hunger Games was written by Suzanne Collins."
  
  
  for(let i = 0; i < library.length; i++){
    console.log(library[i].title + ' was written by ' + library[i].author);
  }
}

// Question 4
const repeatedCharacters = () => {
let testString = 'Programming';
let repeatedCharacterObj = {};


 testString = testString.toUpperCase();
 let testStringArray = testString.split('');
 
   for(let i = 0; i < testStringArray.length; i++){
     
     repeatedCharacterObj[`${testStringArray[i]}`] = 0;
     
   }
   
    for(let j = 0; j < testStringArray.length; j++){
      
     if(repeatedCharacterObj.hasOwnProperty(testStringArray[j])){
       
        ++repeatedCharacterObj[`${testStringArray[j]}`];
     }
     
   }
   for(let k = 0; k < testStringArray.length; k++){
      if(repeatedCharacterObj[`${testStringArray[k]}`] < 2){
        delete repeatedCharacterObj[`${testStringArray[k]}`];
      } 
   }
   
   
   console.log(repeatedCharacterObj);
}

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}