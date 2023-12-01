import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';

class RacingCarController {
  async play() {
    await this.readCars();
  }

  async readCars() {
    const carsArray = await InputView.readCars();
    this.handleCarsArray(carsArray);
  }

  handleCarsArray(carsArray) {
    Validator.validateCarName(carsArray);
    this.readTrialCount();
  }

  async readTrialCount() {
    const trialCount = await InputView.readTrialCount();
  }
}

export default RacingCarController;
