import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.find()</h1>';

const newDrinks = [['A',1],['B',2],['C',3]]
const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]
// findIndex
 const idIndex= drinkWithId.findIndex(value =>value.name === 'Peach')
console.log(drinkWithId[idIndex])

const foundItem = drinkWithId.find(value =>value.name === 'Peach')
console.log(foundItem)

console.log(newDrinks)
const drinksClone = [...newDrinks]
const drinksClone2 = Array.from(newDrinks)
console.log(drinksClone2)
const drinksClone3 = JSON.parse(JSON.stringify(newDrinks)) // Deep Cloning
console.log(drinksClone3)

console.log(drinksClone[0][1] = 1000)
console.log(newDrinks) 