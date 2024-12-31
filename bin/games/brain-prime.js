const isPrimeNumber = (a) => {
    let countZero = 0;
    for(let i = 1; i < a; i++){
        countZero = a % i === 0 ? countZero + 1 : countZero;
    }
    return countZero === 1 ? "yes" : "no";
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}
export const taskBrainPrime = () => 'Answer "yes" if given number is prime. Otherwise answer "no".'

const brainPrime = () => {
    const num = getRandomNumber(10);
    return [isPrimeNumber(num), `Question: ${num}\nYour answer: `];
}
export default brainPrime;