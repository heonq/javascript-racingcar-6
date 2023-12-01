import Validator from '../utils/Validator.js';

describe('유효성 검사 테스트', () => {
  test('잘못된 자동차 이름에 대한 유효성 검사 기능', () => {
    const invalidCarsArrays = [['car1', 'carcar'], ['car1'], ['car1', 'car1']];
    invalidCarsArrays.forEach((invalidCarsArray) =>
      expect(() => Validator.validateCarName(invalidCarsArray)).toThrow(),
    );
  });
  test('유효한 자동차 이름에 대한 유효성 검사 기능', () => {
    const validCarsArrays = [
      ['car1', 'car2'],
      ['car12', 'car3', 'car4'],
      ['c', 'ca', 'car'],
    ];
    validCarsArrays.forEach((validCarsArray) =>
      expect(() => Validator.validateCarName(validCarsArray)).not.toThrow(),
    );
  });
  test('잘못된 시도 횟수에 대한 유효성 검사 기능 테스트', () => {
    const invalidTrialCountArray = [-1, 0, '다섯번', 3.5];
    invalidTrialCountArray.forEach((invalidTrialCount) =>
      expect(() => Validator.validateTrialCount(invalidTrialCount)).toThrow(),
    );
  });
  test('유효한 시도 횟수에 대한 유효성 검사 기능 테스트', () => {
    const validTrialCountArray = [1, 2, 3, 4, 100];
    validTrialCountArray.forEach((validTrialCount) =>
      expect(() => Validator.validateTrialCount(validTrialCount)).not.toThrow(),
    );
  });
});
