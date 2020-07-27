import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.every()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]

// every
//const returnValue = drinkWithId.every((value,index,array)=>{...},thisArg)
console.log([true,true,false].every(Boolean))

const isInStock = drinkWithId.every((value)=>value.stock)
if (!isInStock){
    console.log(
        `Sorry, ${drinkWithId.find((value)=>!value.stock).name} is out of stock`
    )
}
console.log(drinkWithId)