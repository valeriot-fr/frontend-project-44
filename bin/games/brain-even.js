const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const isEven = (number) => {
    return number % 2 === 0;
}

export const taskEven = () => 'Answer "yes" if the number is even, otherwise answer "no".'


const brainEven = () => {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [correctAnswer, `Question: ${randomNumber}\nYour answer:`];
};
export default brainEven;