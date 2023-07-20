import { helper } from '@ember/component/helper';

export function totalQuantity([array, property]) {
  if (!Array.isArray(array) || !property) return 0;

  return array.reduce((total, item) => total + item[property], 0);
}

export default helper(totalQuantity);
