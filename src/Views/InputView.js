import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const InputView = {
  async readCars() {
    const carNames = await Console.readLineAsync(MESSAGES.carNameQuery);
    return carNames.split(MESSAGES.carNameDelimiter);
  },
  async readTrialCount() {
    const trialCount = await Console.readLineAsync(MESSAGES.trialCountQuery);
    return Number(trialCount);
  },
};

export default InputView;
