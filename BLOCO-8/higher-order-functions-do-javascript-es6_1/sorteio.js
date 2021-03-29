const prizeDraw = (luckyNumber, callback) => {
  const number = Math.floor(Math.random() * ((5 - 1) + 1));
  return callback(luckyNumber, number);
}

const analyzes = (number1, number2) => {
  return((number1 === number2) ? 'Parabéns você ganhou' : 'Tente novamente');
}

console.log(prizeDraw(2, analyzes));