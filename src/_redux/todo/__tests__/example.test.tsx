import * as tests from '@/_utils/todo/example';

describe('test functions', () => {
  test('test1 0', () => {
    expect(tests.test1(0)).toBe(123);
  });

  test('test1 !0', () => {
    expect(tests.test1(10)).toBe(12);
  });

  test('test2 0', () => {
    const spyTest1 = jest.spyOn(tests, 'test1');
    spyTest1.mockReturnValue(123);
    expect(tests.test2(0)).toBe(123);
  });

  test('test2 !0', () => {
    const spyTest1 = jest.spyOn(tests, 'test1');
    spyTest1.mockReturnValue(12);
    expect(tests.test2(10)).toBe(12);
  });
});
