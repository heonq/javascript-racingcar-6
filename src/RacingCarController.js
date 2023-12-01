import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';
import RacingCar from './RacingCar.js';
import OutputView from './Views/OutputView.js';

class RacingCarController {
  #racingCar;

  async play() {
    await this.readCars();
  }

  async readCars() {
    const carsArray = await InputView.readCars();
    this.handleCarsArray(carsArray);
  }

  handleCarsArray(carsArray) {
    Validator.validateCarName(carsArray);
    this.#racingCar = new RacingCar(carsArray);
    this.readTrialCount();
  }

  async readTrialCount() {
    const trialCount = await InputView.readTrialCount();
    this.handleTrialCount(trialCount);
  }

  handleTrialCount(trialCount) {
    Validator.validateTrialCount(trialCount);
    OutputView.printResultMessage();
    for (let i = 0; i < trialCount; i += 1) {
      this.moveAndPrint();
    }
    this.printWinners();
  }

  moveAndPrint() {
    this.#racingCar.tryMove();
    this.#racingCar
      .getNamesAndDistances()
      .forEach(([name, distance]) => OutputView.printDistance(name, distance));
    OutputView.printLineBreak();
  }

  printWinners() {
    OutputView.printWinner(this.#racingCar.getWinners());
  }
}

export default RacingCarController;
