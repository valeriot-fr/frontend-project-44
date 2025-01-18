import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = calculateExpression(num1, num2, operator);
  return [correctAnswer.toString(), `${num1} ${operator} ${num2}`];
};

const startGame = () => {
  const outputTask = 'What is the result of the expression?';
  playGame(outputTask, getGameData);
};

export default startGame;
