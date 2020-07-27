import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.find()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]

const drinks = ['A','B','C']
const newDrink = ['water',...drinks]
const newDrinks = [['A',1],['B',2],['C',3]]

// Merg Arrays
const merged = newDrink.concat(newDrinks)
console.log(merged)
const merged2 = [...newDrink,...newDrinks]
console.log(merged2)
const item =['Apple',89]
const merged3 = [item,...newDrinks,item] // begin or end
console.log(merged3)

console.log(newDrinks.reverse())
console.log(drinkWithId.sort((a,b)=> b.price - a.price))

console.log(Array.isArray([]))
console.log(Object.prototype.toString.call([]))
