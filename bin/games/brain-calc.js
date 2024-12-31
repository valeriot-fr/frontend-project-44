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
export const taskCalc = () => 'What is the result of the expression?';

const brainCalc = () => {
        const num1 = getRandomNumber(1, 20); 
        const num2 = getRandomNumber(1, 20); 
        const operator = getRandomOperator(); 
        const correctAnswer = calculateExpression(num1, num2, operator); 
        return [correctAnswer.toString(), `Question: ${num1} ${operator} ${num2}\nYour answer: `]

}
export default brainCalc;
