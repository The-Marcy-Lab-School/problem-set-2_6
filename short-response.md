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
    
    #2 Will return a refernce error because it is not properly defined within the brackets.
    The value is a string so using brackets would not work unless you speicify that with quotation marks like so myObject["a"] or use dot notation like so myObject.a

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
      The object person isnt an object we've defined so this comes back as an refernce error. Though, if you meant console.log(coolKid.firstName + ' ' + coolKid.lastName), then
      you'd get literally everything after the colons. It will print everything inclduing the syntax to return "carmen" & "salas" because that is also apart of the value for those pairs.

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
    
    Lines 36-37 log 'a' and `undefined`. line 36 works because the first index 0 refers to 'a' in myArray, while line 37 will return undefined because there is no -1 index.
    
    Line 43 logs 'd' because on line 39 it was assigned as a key-value pair so the -1 key has a value of 'd'.
    
    Line 44 logs 5 because of the same reasons for the previous statement.^
    
    Line 45 will log the array values "a", "b", "c", and "f", and the two key-value pairs e:5, and 3:f. Index 3 is assigned like the other array elements and not a property element because the it was assigned to
    the 3 index of the array giving it a value of 'f' while 'e' and -1 index became properties with their own respective values.
    
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
    
    On line 51-52 he assigned value to a pair of invalid index. What the classmate does is add two key-value pairs to the object, 
    but array.length does not reflect that because the index numbers are below 0.

**5. What does it mean for an object property to be _enumerable_?**

    For an Object Property to be enumerable it means that it is not flagged when the console reads loops or methods that read throughout an objects properties.
    In other words, the console will ignore it when looping the object if is inenumerable.