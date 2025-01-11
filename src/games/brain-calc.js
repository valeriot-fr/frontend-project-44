import game from '../index.js';
import getRandomNumber from '../randomNum.js'

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown state!');
  }
};
export const task = () => 'What is the result of the expression?';

const gameData = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const operator = getRandomOperator();
  const correctAnswer = calculateExpression(num1, num2, operator);
  return [correctAnswer.toString(), `${num1} ${operator} ${num2}`];
};

const startGame = () => {
  game(task, gameData);
};

export default startGame;
