import readlineSync from 'readline-sync';
import brainEven, { taskEven } from '../bin/games/brain-even';
import brainCalc, { taskCalc } from '../bin/games/brain-calc';
import brainGCD, { taskGCD } from '../bin/games/brain-gcd';
import brainProgression, { taskProgression } from '../bin/games/brain-progression';
import brainPrime, { taskBrainPrime } from '../bin/games/brain-prime';

const condition = (userName, handler) => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [correctAnswer, question] = handler();
    const userAnswer = readlineSync.question(question).toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      correctAnswersCount = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const main = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const nameProgramm = process.argv[2];
  let handler;
  switch (nameProgramm) {
    case 'brain-even':
      console.log(taskEven());
      handler = brainEven;
      break;
    case 'brain-calc':
      console.log(taskCalc());
      handler = brainCalc;
      break;
    case 'brain-gcd':
      console.log(taskGCD());
      handler = brainGCD;
      break;
    case 'brain-progression':
      console.log(taskProgression());
      handler = brainProgression;
      break;
    case 'brain-prime':
      console.log(taskBrainPrime());
      handler = brainPrime;
      break;
    default:
      break;
  }
  condition(userName, handler);
};

main();
