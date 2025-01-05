/* eslint-disable import/extensions */
import main from '../index.js';

const isPrimeNumber = (a) => {
  let countZero = 0;
  for (let i = 1; i < a; i += 1) {
    countZero = a % i === 0 ? countZero + 1 : countZero;
  }
  return countZero === 1 ? 'yes' : 'no';
};

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
export const task = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const GameData = () => {
  const num = getRandomNumber(10);
  return [isPrimeNumber(num), `Question: ${num}\nYour answer: `];
};

const startGame = () => {
  main(task, GameData);
};

export default startGame;
