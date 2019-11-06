const exercises = require('./exercises');

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

// Question 4
test('Question 4: repeated characters', () => {
  expect(exercises.repeatedCharacters('Programming')).toEqual({ r: 2, g: 2, m: 2 });
  expect(exercises.repeatedCharacters('Pet')).toEqual({});
  expect(exercises.repeatedCharacters('Paper')).toEqual({ p: 2 });
  expect(exercises.repeatedCharacters('Baseless')).toEqual({ s: 3, e: 2 });
});
