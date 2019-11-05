# Problem Set 2.6 - Introduction to JavaScript Objects
## Short Response

**1. If I initalize the following object...**
    ```javascript
    const myObject = {
      a: 'name',
      'b': 'test',
      123: 'c',
      1: 'd',
    };
    ```
    **which of the following statements will raise an error? Why?**
    1. `myObject[1];`
    2. `myObject[a];`
    3. `myObject.a;`
    
    The third statement would raise an error because keys are always strings, so calling `a` within brackets without string notation like such 'a',
    will cause javascript to search the object for a variable `a` rather than a string 'a', and it will find the variable `a` is not defined.
    

**2. What does the following code log? Why? (Be sure to run in the console after you make your prediction 😉)**
      ```javascript
      const coolKid = {
        firstName: function () {
          return 'Carmen';
        },
        lastName: function () {
          return 'Salas';
        },
      };

      console.log(person.firstName + ' ' + person.lastName);
      ```
      "person is not defined" is logged to the console because we do not have a `person` object in our code. 
      Even if we did have a `person` object in the place of the `coolKid` object, it would only log both of the functions 
      associated with the firstName and lastName keys, rather than the names in the return statements we were expecting to log.
      This occurs because the function isn't being invoked within the object, only declared.

**3. What does the following code log? Why?**
    ```javascript
    const myArray = ['a', 'b', 'c'];

    console.log(myArray[0]);
    console.log(myArray[-1]);

    myArray[-1] = 'd';
    myArray['e'] = 5;
    myArray[3] = 'f';

    console.log(myArray[-1]);
    console.log(myArray['e']);
    console.log(myArray);
    ```
    The first two console.log statements log  'a' and `undefined`, this is because the index 0 is defined as 'a', while the index -1 is not.
    The last three console.log statement log: 
    'd'  (This is logged because on line 47, because -1 is not an index within myArray and object is created and `-1` becomes a key and is assigned a value of 'd')
     5   (This is logged because on line 48, because 'e' is not an index within myArray 'e' becomes a key within the and is assigned a value of 5)
     ["a", "b", "c", "f", -1: "d", e: 5] (This is logged because on line 49 the index 3 is given a value of 'f', then because the other assignments on lines 47 and 48 are not being declared with existing indexes within the array an object is created to hold the other values and keys within the array.)
    

**4. Your classmate wrote the following code. They wanted to add elements to an array, sum them, and then divide by the length to find the average. All of the values are `7` so they are confused about why this function is returning `14` for the average. What's going on here?**
    ```javascript
    const myArray = [7, 7];
    myArray[-1] = 7;
    myArray[-2] = 7;

    function average(array) {
      let sum = 0;

      for (let i = -2; i < array.length; i += 1) {
        sum += array[i];
      }

      return sum / array.length;
    }

    average(myArray); // 14... even though we expected 7. Why? 🤔
    ```
    The unexpected outcome is the result of two incorrect assumptions. The first being that -1 and -2 are indexes within the array. However array indexes only contain positive integers.
    Therefore any negative integers declared within an array is formatted as an object within the array. The second incorrect assumption, is that the length of the array is equivalent to the amount of data within the array.
    However the length is equivalent only to the the amount of indexes. Thus, the length of their array is 2 which means their loop, adds 7 to sum 4 times,
    then divides it by the length which is 2. Which gives you 28 / 2 which is 14.

**5. What does it mean for an object property to be _enumerable_?**
     
     Essentially an enumerable property is a property within an object that you can iterate over. Which means if you loop over it to console.log it or using object keys, it will show up. However an inenumerable object 
     will not show up if iterated over. All new properties are set to be enumerable, with the exception of properties created using the `defineProperty()` method.