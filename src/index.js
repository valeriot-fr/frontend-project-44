import readlineSync from 'readline-sync';

const roundCount = 3;

const playGame = (outputTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(outputTask);
  for (let i = 1; i <= roundCount; i += 1) {
    const [correctAnswer, question] = getGameData();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
