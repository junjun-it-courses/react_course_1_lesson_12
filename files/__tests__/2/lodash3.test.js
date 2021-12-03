import _ from 'lodash';

const coll = [1, 2, 3];

test('filter', () => {
    // Выбираем только чётные
    expect(_.filter(coll, (v) => v % 2 === 0)).toEqual([2])
});