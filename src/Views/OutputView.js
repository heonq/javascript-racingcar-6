import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const OutputView = {
  printDistance(name, distance) {
    Console.print(name + MESSAGES.carNameDelimiter + MESSAGES.distance.repeat(distance));
  },
};

export default OutputView;
