const exercises = require('./exercises');

// Question 1
test('Question 1: `log` logs each property', () => {
  global.console = { log: jest.fn() };

  const attributes = {
    speed: 90,
    power: 95,
    accuracy: 79,
    defense: 82,
  }

  exercises.log(attributes);
  expect(global.console.log).toHaveBeenCalledWith('speed: 90');
  expect(global.console.log).toHaveBeenCalledWith('power: 95');
  expect(global.console.log).toHaveBeenCalledWith('accuracy: 79');
  expect(global.console.log).toHaveBeenCalledWith('defense: 82');
});

test('Question 1: `log` logs different properties', () => {
  global.console = { log: jest.fn() };

  const attributes = {
    speed: 91,
    power: 91,
    accuracy: 79,
    defense: 82,
  }

  exercises.log(attributes);
  expect(global.console.log).toHaveBeenCalledWith('speed: 91');
  expect(global.console.log).toHaveBeenCalledWith('power: 91');
  expect(global.console.log).toHaveBeenCalledWith('accuracy: 79');
  expect(global.console.log).toHaveBeenCalledWith('defense: 82');
});

// Question 2
test('Question 2: `totalProps` counts object properties', () => {
  const grades = {
    A: 100,
    B: 92,
    C: 84,
    D: 76,
    F: 64,
  };

  const testArr = {foo: 'bar', qux: 'foo'};

  expect(exercises.totalProps(grades)).toBe(5);
  expect(exercises.totalProps(testArr)).toBe(2);
});

// Question 2
test('Question 2: `totalProps` does not count prototype properties', () => {
  const lebronJames = {
    name: "LeBron James",
    speed: 80,
    power: 90
  };

  const zionWilliamson = Object.create(lebronJames);
  zionWilliamson.name = "Zion Williamson";

  expect(exercises.totalProps(zionWilliamson)).toBe(1);
});

// Question 3 
test('Question 3: listBooks', () => {
  global.console = { log: jest.fn() };

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
        title: 'Mockingjay: The Final Book of the Hunger Games', 
        readingStatus: false
    }];

  exercises.listBooks(library);
  expect(global.console.log).toHaveBeenCalledWith("The Road Ahead was written by Bill Gates.");
  expect(global.console.log).toHaveBeenCalledWith("Steve Jobs was written by Walter Isaacson.");
  expect(global.console.log).toHaveBeenCalledWith("Mockingjay: The Final Book of the Hunger Games was written by Suzanne Collins.");
});

test('Question 3: listBooks', () => {
  global.console = { log: jest.fn() };

  const library = [ 
    {
        author: 'William Gates',
        title: 'The Road Ahead',
        readingStatus: true
    }];

  exercises.listBooks(library);
  expect(global.console.log).toHaveBeenCalledWith("The Road Ahead was written by William Gates.");
});

// Question 4
test('Question 4: repeatedCharacters', () => {
  expect(exercises.repeatedCharacters('Programming')).toEqual({ r: 2, g: 2, m: 2 });
  expect(exercises.repeatedCharacters('Pet')).toEqual({});
  expect(exercises.repeatedCharacters('Paper')).toEqual({ p: 2 });
  expect(exercises.repeatedCharacters('Baseless')).toEqual({ s: 3, e: 2 });
  expect(exercises.repeatedCharacters('Baselesss')).toEqual({ s: 4, e: 2 });
});
