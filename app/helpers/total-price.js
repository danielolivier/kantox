import { helper } from '@ember/component/helper';

const prices = {
  GR1: 3.11,
  SR1: 5.0,
  CF1: 11.23,
};

export function totalPrice([array]) {
  if (!Array.isArray(array))
    return {
      original: 0,
      discount: 0,
      total: 0,
    };

  const counts = array?.reduce((total, item) => {
    total[item.code] = item.quantity;
    return total;
  }, {});
  const total = array?.reduce(
    (total, item) => (total += prices[item.code] * item.quantity),
    0
  );
  const discount =
    (counts['GR1'] > 1 ? Math.floor(counts['GR1'] / 2) * prices['GR1'] : 0) +
    (counts['SR1'] >= 3 ? counts['SR1'] * (prices['SR1'] - 4.5) : 0) +
    (counts['CF1'] >= 3
      ? counts['CF1'] * (prices['CF1'] - (2 / 3) * prices['CF1'])
      : 0);

  return {
    original: total?.toFixed(2) ?? 0,
    discount: discount?.toFixed(2) ?? 0,
    total: (total - discount)?.toFixed(2) ?? 0,
  };
}

export default helper(totalPrice);
