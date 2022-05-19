import data from "../data/courses.json";

const numItems = data.length;

test('Number of item should be two', () => {
    expect(numItems).toBe(2);
});

test('Number of item should be greater than 1', () => {
    expect(numItems).toBeGreaterThan(1);
});

const dataTest = data[0].title;

test('there is a react in this title', () => {
    expect(dataTest).toMatch(/react/);
});

test('there is a js in this title', () => {
    expect(dataTest).toMatch(/Building/);
});

// arrays

const data2 = ['Reactjs', 'React Native'];

test('the list of courses contains react and django', () => {
    expect(['Reactjs', 'React Native', 'Nativejs']).toEqual(expect.arrayContaining(data2));
});

// objects

test('the first course to have a dict name title', () => {
    expect(data[0]).toHaveProperty('title');
});

test('the first course to have a dict value django', () => {
    expect(data[1]).toHaveProperty('category', 'django');
});
