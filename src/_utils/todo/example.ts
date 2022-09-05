export const test1 = (value: number): number => {
  // not called
  return value === 0 ? 123 : 12;
};

export const test2 = (value: number) => {
  // ...
  const result = test1(value);

  return result;
};
