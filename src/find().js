import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.find()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]

// find
//const returnValue = drinkWithId.every((value,index,array)=>{...},thisArg)
console.log(['a','b','c','d'].find(x=> x==='a'))

const found = drinkWithId.find(value=>value.name === 'lime')
console.log(found)