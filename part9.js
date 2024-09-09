function add(num1, num2){
    return num1 + num2
}
 function substakt(num1,num2){
    return num1 - num2
 }
 function multply(num1, num2){
    return num1 *num2
 }
 function divide (num1, num2){
    return num1 /num2;

 }

 function cltor(a, b,operation){
if(operation ==='add'){
  const rejelt =add (a,b);
  return rejelt;
    }
    else if(operation === 'subtract'){
        const rejelt=substakt(a,b);
        return rejelt;
    }
    else if(operation ==='multiply'){
    return multply(a,b);

    

}
else{
    return"only 'add'opershi'"
}
 }
const rejelt =cltor(5,7,"add")
 console.log(rejelt);