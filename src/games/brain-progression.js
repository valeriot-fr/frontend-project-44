import game from '../index.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const missingIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[missingIndex];
  progression[missingIndex] = '..';

  return [correctAnswer, progression.join(' ')];
};

export const task = () => 'What number is missing in the progression?';

const gameData = () => {
  const [correctAnswer, progression] = generateProgression();
  return [correctAnswer.toString(), `${progression}`];

};

const startGame = () => {
  game(task, gameData);
};

export default startGame;
