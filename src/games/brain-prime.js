import game from '../index.js';
import getRandomNumber from '../randomNum.js'

const isPrimeNumber = (a) => {
  let countZero = 0;
  for (let i = 1; i < a; i += 1) {
    countZero = a % i === 0 ? countZero + 1 : countZero;
  }
  return countZero === 1 ? 'yes' : 'no';
};

export const task = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const num = getRandomNumber(100);
  return [isPrimeNumber(num), `${num}`];
};

const startGame = () => {
  game(task, gameData);
};

export default startGame;
