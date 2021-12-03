import makeStack from './../../src/scripts/stack.js';

test("stack's main flow", () => {
    const stack = new makeStack();
    // Добавляем два элемента в стек и затем извлекаем их
    stack.push('one');
    stack.push('two');

    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});


test('isEmpty', () => {
    const stack = new makeStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push('two');
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
    const stack = new makeStack();
    // Вызов метода pop обёрнут в функцию
    // иначе матчер не сможет перехватить исключение
    expect(() => stack.pop()).toThrow();
});