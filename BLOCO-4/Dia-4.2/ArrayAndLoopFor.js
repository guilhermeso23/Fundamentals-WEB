let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let aux;
for(let i = (numbers.length -1) ; i >= 1 ; i -= 1){
  for(let j = 0 ; j < i ; j += 1){
    if(numbers[j] > numbers[j+1]){
      aux = numbers[j];
      numbers[j] = numbers[j+1];
      numbers[j+1] = aux;
    }
  }
}
for(let index = 0 ; index < numbers.length ; index += 1){
  console.log(numbers[index]);
  sum += numbers[index];
}
console.log("Soma dos valores: " + sum);
console.log("Média aritmética: " + (sum / numbers.length));
if((sum/numbers.length) > 20)
  console.log("Valor maior que 20");
else
  console.log("Valor menor ou igual a 20");
console.log("Maior valor: " + numbers[numbers.length - 1])