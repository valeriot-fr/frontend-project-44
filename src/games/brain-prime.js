import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const checkIfPrimeNumber = (a) => {
  let countZero = 0;
  for (let i = 1; i < a; i += 1) {
    countZero = a % i === 0 ? countZero + 1 : countZero;
  }
  return countZero === 1 ? 'yes' : 'no';
};

export const outputTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const num = getRandomNumber(100);
  return [checkIfPrimeNumber(num), `${num}`];
};

const startGame = () => {
  playGame(outputTask, getGameData);
};

export default startGame;
