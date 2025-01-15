import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

export const outputTask = () => 'What is the result of the expression?';

const calculateExpression = (num1, num2, character) => {
  switch (character) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Invalid operator!');
  }
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const character = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = calculateExpression(num1, num2, character);
  return [correctAnswer.toString(), `${num1} ${character} ${num2}`];
};

const startGame = () => {
  playGame(outputTask, getGameData);
};

export default startGame;
