import Car from './Car.js';

class RacingCar {
  #cars;

  constructor(carNamesArray) {
    this.#cars = carNamesArray.map((carName) => new Car(carName));
  }

  tryMove() {
    this.#cars.forEach((car) => car.decideMoveOrStay());
  }

  getNamesAndDistances() {
    return this.#cars.map((car) => car.getNameAndDistance());
  }
}

export default RacingCar;
