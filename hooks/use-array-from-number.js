export const useArrayFormNumber = (number) => {
  const iterable = {};

  iterable[Symbol.iterator] = function* () {
    for (let i = 0; i < number; i++) {
      yield i;
    }
  };

  return [...iterable];
};
