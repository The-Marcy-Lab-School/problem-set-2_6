// Question 1
const log = (obj) => {
  for(let prop in obj){
    console.log(prop, ": ", obj[prop]);
  }
};

// Question 2
const totalProps = (obj) => {
  let count=0;
  for(let prop in Object.keys(obj)){
    count++;
  }
  return count;
};

// Question 3
const listBooks = (arrObj) => {
  for (let i=0; i < arrObj.length; i++){
   console.log (`${arrObj[i].title} was written by ${arrObj[i].author}`);
  }
};

// Question 4
const repeatedCharacters = (string) => {
    let obj = {};
    let arrString = string.toLowerCase().split('');
    for (let i=0;i< arrString.length; i++ ){ 
        if (arrString[i] in obj){
            obj[arrString[i]]+=1;
        }else{
            obj[arrString[i]]=1;
        }
    }
    for (let prop in obj){
      if (obj[prop]===1){
        delete obj[prop];
      }
    }
    return obj;
};


// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
};