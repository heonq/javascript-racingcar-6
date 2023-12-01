import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const OutputView = {
  printLineBreak() {
    Console.print(MESSAGES.lineBreak);
  },
  printResultMessage() {
    this.printLineBreak();
    Console.print(MESSAGES.resultMessage);
  },

  printDistance(name, distance) {
    Console.print(name + MESSAGES.nameDelimiter + MESSAGES.distance.repeat(distance));
  },
  printWinner(winners) {
    Console.print(MESSAGES.finalWinner + winners.join(MESSAGES.winnerDelimiter));
  },
};

export default OutputView;
