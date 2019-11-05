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
Answer: Number 2 will raise an error because when using bracket notation you must use quotations. 

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
Answer: This will raise an error because person is not defined.


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
Answer: Line 39 will log `a` because [0] is the index for 'a' in `myArray`, line 40 will log `undefined` because `-1` is not assigned a value. Line 46 will log `'d` because on line 42 we assigned `-1` a value of `d`. Line 47 will log `5` because we assigned the key `'e'` a value of `5` and line 48 will log `['a', 'b', 'c', 'f', '-1': 'd', e:5]` because that is all values within the `myArray`.


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
Answer: This code only returns 14 because on line 62 the function is starting the count at '-2' and not 0 so it is not starting from the first element in the array to loop through. If started at 0 this code will return '7'.

**5. What does it mean for an object property to be _enumerable_?**
Answer: For an object to be _enumerable_ mean it have certain flags that determine their behavior meaning determine on what boolean value the flag is on will determine how your object act.