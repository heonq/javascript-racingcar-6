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

  getWinners() {
    const sortedCars = this.getNamesAndDistances().sort((carA, carB) => carB[1] - carA[1]);
    const winners = sortedCars.filter((car) => car[1] === sortedCars[0][1]).map((car) => car[0]);
    return winners;
  }
}

export default RacingCar;
