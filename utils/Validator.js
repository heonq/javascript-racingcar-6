import MESSAGES from '../constants/Messages.js';
import VALUES from '../constants/Values.js';

const Validator = {
  validateCarName(carArray) {
    if (carArray.some((car) => car.length > VALUES.maxNameLength))
      throw new Error(MESSAGES.invalidNameLength);
    if (carArray.length < VALUES.minCarCount) throw new Error(MESSAGES.invalidCarCount);
    if (carArray.length !== new Set(carArray).size) throw new Error(MESSAGES.duplicatedName);
  },
};

export default Validator;
