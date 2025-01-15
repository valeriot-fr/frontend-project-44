import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const outputTask = () => 'What number is missing in the progression?';

const getGameData = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(length, start, step);
  const missingIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[missingIndex]);
  progression[missingIndex] = '..';
  return [correctAnswer, progression.join(' ')];
};

const startGame = () => {
  playGame(outputTask, getGameData);
};

export default startGame;
