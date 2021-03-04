//Logica de programação e Algotitmo 4.3
let n = 5;
let symbol = '';
for(let horizontal = 0 ; horizontal < n ; horizontal += 1){
    symbol +='*';
}
for(let vertical = 0 ; vertical < n; vertical += 1){
    console.log(symbol);
}