const greatestCommonDevisor = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

export const taskGCD = () => 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const correctAnswer = greatestCommonDevisor(num1, num2);
  return [correctAnswer.toString(), `Question: ${num1} ${num2}\nYour answer: `];
};
export default brainGCD;
