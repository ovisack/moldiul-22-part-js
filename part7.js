const products =[
    {name :'shampoo', price:300,quantity:2},
    {name:'chiruni', price:400,quantity:3},
   
    {name:'shet', price:700,quantity:5},
    {name:'pane', price:1200,quantity:1},
]

function  cartTotal (product){
    let total=0;
     for(const product of products){
        total =total +product.price;

     }
     return total;
}
const shoppingCot= cartTotal(products);
console.log(shoppingCot);
