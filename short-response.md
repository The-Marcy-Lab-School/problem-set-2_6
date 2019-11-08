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
    
    - The second statement will raise an error because its bracket notation is not written correctly, it needs quotes around `a`.

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
      - This code raises an error because the object is called `coolKid` and the console log is looking for a `person` object.

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
    - This snippet logs `'d'`, `5`, `f` because the assignment of a value to the array wihtout a valid index adds a key-value pair. This is possible because arrays are just a special type of object.

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
    - This snippet returns 14 because when the sum is divided by `array.length` it is being divided by two because that is the length of the array despite consisting of an additional two key-value pairs. The length of an array is only updated by elements with a valid numerical index, i.e. those greater than 0.

**5. What does it mean for an object property to be _enumerable_?**
  - When an object property is enumerable it is accessible to the different methods in which we iterate through object properties. When the enumerability flag is set to false for a property a loop iterating through the object will ignore it.