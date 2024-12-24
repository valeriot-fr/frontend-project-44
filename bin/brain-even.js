
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}
const isEven = (number) => {
    return number % 2 === 0;
}

const startGame = () => {
    console.log("Welcome to the Brain Games!");
    const userName = prompt('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const randomNumber = getRandomNumber();
        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
        const userAnswer = prompt(`Question: ${randomNumber}\nYour answer:`).toLowerCase();
        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswersCount++; 
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            correctAnswersCount = 0;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}
startGame();