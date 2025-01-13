import game from '../index.js';
import getRandomNumber from '../randomNum.js';

const isGreatestCommonDevisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

export const task = () => 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const correctAnswer = isGreatestCommonDevisor(num1, num2);
  return [correctAnswer.toString(), `${num1} ${num2}`];
};

const startGame = () => {
  game(task, getGameData);
};

export default startGame;
