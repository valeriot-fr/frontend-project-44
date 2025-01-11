import game from '../index.js';
import getRandomNumber from '../randomNum.js'

export const task = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
  const randomNumber = getRandomNumber(100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, `${randomNumber} `];
};

const startGame = () => {
  game(task, gameData);
};

export default startGame;
