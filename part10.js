function mltiply(num1, num2){
if (typeof num1 !== 'number'){
    return 'piese provat the namer'
}

    const mult = num1 * num2;
return mult;     
}
const rejelt=mltiply('5', 'seven');
//console.log(rejelt)

function fullName(first, second){
   if(typeof first !=='string'){
    return 'please provad a string';
   }
   
    const full =first+ '' +second;
    return full;
}
const full= fullName('ovisack', 'joy')
console.log(full);