import readlineSync from 'readline-sync';

const main = (task, GameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task());
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [correctAnswer, question] = GameData();
    const userAnswer = readlineSync.question(`Question: ${question}`).toLowerCase();
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

export default main;
