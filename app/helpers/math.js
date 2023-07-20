import { helper } from '@ember/component/helper';

const operations = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

export function mathOperator([operator, a, b]) {
  return eval(`${a} ${operations[operator]} ${b}`);
}

export default helper(mathOperator);
