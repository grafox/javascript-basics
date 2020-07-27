import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.reduce()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]
//drinkWithId.reduce((prev,next,index,array)=>{...},0)
console.log([1,2,3,4,5].reduce((prev,next)=>prev+next)) // ecumelat
console.log([1,2,3,4,5].reduce((prev,next)=>{
    console.log(prev,next)
    return prev+next
}))
console.log([1,2,3,4,5].reduce((prev,next)=>{
    console.log(prev,next)
    return prev+next
},10))

//map and reduce
const reduced = drinkWithId
.map((value)=> value.price)
.reduce((prev,next)=> prev+next)
 
console.log(reduced)

// array of objects

const reduced2 = drinkWithId.reduce((prev,next)=> prev+next.price,0)
console.log(reduced2)
