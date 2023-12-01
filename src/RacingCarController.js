import InputView from './Views/InputView.js';

class RacingCarController {
  async play() {
    await this.readCars();
  }

  async readCars() {
    const carsArray = await InputView.readCars();
  }
}

export default RacingCarController;
