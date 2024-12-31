const generateProgression = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;

    const progression = [];
    for(let i = 0; i < length; i++){
        progression.push(start + i * step);
    }
    const missingIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[missingIndex];
    progression[missingIndex] = '..';
    return [correctAnswer, progression.join()];
}

export const taskProgression = () => 'What number is missing in the progression?'

const brainProgression = () => {

    const [correctAnswer, progression] = generateProgression();
    return [correctAnswer.toString(), `Question: ${progression}\nYour answer: `]
}
export default brainProgression;