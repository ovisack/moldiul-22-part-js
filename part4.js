const height =[65,66,68,72,78,60,65,66,1];


function getmin(numbers){
  let min =numbers[0];
  for(const num of numbers){
   if( num < min ){
     
     min =num ;

   }
  }
return min;

}

const min =getmin(height);
console.log('max value is ', min);