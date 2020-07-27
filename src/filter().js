import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.filter()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]
//drinkWithId.filter((value,index,array)=>{...})
console.log([true,true,false].filter(Boolean))

const expensivItems = drinkWithId.filter((value)=>{
    value.price <10
})
console.log(expensivItems);
