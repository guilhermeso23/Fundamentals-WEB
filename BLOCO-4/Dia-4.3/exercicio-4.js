let n = 5;
let symbol = '';
let m = n/2;
for(let horizontal = 0 ; horizontal < (n) ; horizontal += 2){
    symbol ='';
    let cont = 0;
    for(let vertical = 0 ; vertical < n ; vertical += 1){
        if((vertical > (n-horizontal-m-1)) && (cont < (horizontal+1))){
            symbol += "*";
            cont += 1;
        }
        else{
            symbol += " ";
        }
    }
    m -= 1;
    console.log(symbol);
}