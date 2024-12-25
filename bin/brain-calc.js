//рандомное число
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//рандомный оператор
const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
}
//вычисление выражения
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
  }
import readlineSync from 'readline-sync';
const startGame = () => {
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log("What is the result of the expression?");
    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const num1 = getRandomNumber(1, 20); //  первое случайное число
        const num2 = getRandomNumber(1, 20); //  второе случайное число
        const operator = getRandomOperator(); //  случайный оператор
        const correctAnswer = calculateExpression(num1, num2, operator); 
        const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer:`);
        if (parseInt(userAnswer) === correctAnswer) {
        console.log("Correct!");
        correctAnswersCount++;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}!`);
            correctAnswersCount = 0;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}
startGame();
