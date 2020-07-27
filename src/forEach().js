import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.forEach()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]

//drinkWithId.forEach((value,index,array)=>{...})
drinkWithId.forEach((value)=>{
    console.log(value.name)
    app.innerHTML +=`
    <li>
    ${value.id} ${value.name} - ${(value.price/100).toFixed(2)} // fix the number
    </li>
    `
})
