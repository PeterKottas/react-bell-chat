const groupBy = <T>(
  array: Array<T>,
  groupingKeyFn: (item: T) => string
): { [key: string]: Array<T> } => {
  if (typeof groupingKeyFn !== 'function') {
    throw new Error('groupBy take a function as only parameter');
  }
  return array.reduce((result, item) => {
    const key = groupingKeyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};
export { groupBy };
