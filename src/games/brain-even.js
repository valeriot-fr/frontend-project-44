/* eslint-disable import/extensions */
import main from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const task = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const GameData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `Question: ${randomNumber}\nYour answer:`];
};

const startGame = () => {
  main(task, GameData);
};

export default startGame;
