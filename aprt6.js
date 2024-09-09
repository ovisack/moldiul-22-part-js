
const number= [300,100,700,1200];






const products= [
  
 {name :'shampoo', price:300},
 {name:'chiruni', price:400},

 {name:'shet', price:700},
 {name:'pane', price:1200},


]



function getShoppingTotal(products){
let total =0;

for(const product of products ){
    //console.log(products);
 total=total+product.price;
}
return total;

}

const total = getShoppingTotal(products);
console.log('total ajke khosabo', total);
