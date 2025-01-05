/* eslint-disable import/extensions */
import main from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
      return null;
  }
};
export const task = () => 'What is the result of the expression?';

const GameData = () => {
  const maxNumber = 20;
  const num1 = getRandomNumber(1, maxNumber);
  const num2 = getRandomNumber(1, maxNumber);
  const operator = getRandomOperator();
  const correctAnswer = calculateExpression(num1, num2, operator);
  return [correctAnswer.toString(), `Question: ${num1} ${operator} ${num2}\nYour answer: `];
};

const startGame = () => {
  main(task, GameData);
};

export default startGame;
