import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.map()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]

//drinkWithId.map((value,index,array)=>{...})
console.log([1,2,3,4,5].map((x) => x*2))

 const halfPrice = drinkWithId.map((value)=>{
    if(value.id === 1){
        return {
            ...value,price: value.price /2
        }
    }
    return value
})
console.log(halfPrice)

