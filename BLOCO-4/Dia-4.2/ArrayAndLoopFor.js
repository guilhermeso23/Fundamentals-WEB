let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let index = 0 ; index < numbers.length ; index += 1) {
  console.log(numbers[index]);
  sum += numbers[index];
}
console.log("Soma dos valores: " + sum);
console.log("Média aritmética: " + (sum / numbers.length));
if((sum/numbers.length) > 20)
  console.log("Valor maior que 20");
  else
  console.log("Valor menor ou igual a 20");