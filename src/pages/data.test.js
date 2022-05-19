import data from "../data/courses.json";

const numItems = data.length;

test('Number of item should be two', () => {
    expect(numItems).toBe(2);
});

test('Number of item should be greater than 1', () => {
    expect(numItems).toBeGreaterThan(1);
});