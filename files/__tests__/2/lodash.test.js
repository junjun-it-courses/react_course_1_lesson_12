import _ from 'lodash';

test('includes', () => {
    // Подготовили коллекцию coll
    const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false];

    // Используем coll для тестирования
    expect(_.includes(coll, 3)).toBe(true);
    expect(_.includes(coll, 11)).toBe(false);
});