/* eslint-disable import/extensions */
import main from '../index.js';

const greatestCommonDevisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

export const task = () => 'Find the greatest common divisor of given numbers.';

const GameData = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const correctAnswer = greatestCommonDevisor(num1, num2);
  return [correctAnswer.toString(), `${num1} ${num2}\nYour answer: `];
};

const startGame = () => {
  main(task, GameData);
};

export default startGame;
