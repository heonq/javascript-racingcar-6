import { Random } from '@woowacourse/mission-utils';
import VALUES from '../constants/Values.js';

class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  decideMoveOrStay() {
    const value = Random.pickNumberInRange(VALUES.minRandomValue, VALUES.maxRandomValue);
    if (value >= VALUES.minMoveValue) this.#distance += 1;
  }

  getNameAndDistance() {
    return [this.#name, this.#distance];
  }
}

export default Car;
