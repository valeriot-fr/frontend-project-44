import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `${randomNumber} `];
};

const startGame = () => {
  const outputTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(outputTask, getGameData);
};

export default startGame;
