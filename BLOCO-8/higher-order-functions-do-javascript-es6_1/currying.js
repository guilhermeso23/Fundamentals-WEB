const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const validation = (feedback) => (proofAnswer) => feedback === proofAnswer.toLowerCase();

console.log(validation(correctAnswer)(userAnswer));