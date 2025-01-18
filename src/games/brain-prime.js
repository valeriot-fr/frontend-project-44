import playGame from '../index.js';
import getRandomNumber from '../randomNum.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  };
  return true;
};

const checkIfPrimeNumber = (num) => (isPrime(num) ? 'yes' : 'no');

const getGameData = () => {
  const num = getRandomNumber(100);
  return [checkIfPrimeNumber(num), `${num}`];
};

const startGame = () => {
  const outputTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(outputTask, getGameData);
};

export default startGame;
