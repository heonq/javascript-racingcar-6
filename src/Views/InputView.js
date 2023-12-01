import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const InputView = {
  async readCars() {
    const carNames = await Console.readLineAsync(MESSAGES.carNameQuery);
    return carNames.split(MESSAGES.carNameDelimiter);
  },
};

export default InputView;
