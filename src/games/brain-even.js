import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

export const outputTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `${randomNumber} `];
};

const startGame = () => {
  playGame(outputTask, getGameData);
};

export default startGame;
