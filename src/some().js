import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.some()</h1>';

const drinkWithId = [
    {id:1, name:'lemon',price: 10, promo:false,stock:true},
    {id:2, name:'lime' ,price: 11,promo:true,stock:true},
    {id:3, name:'Peach',price: 12,promo:false,stock:false}
]
// some
//const returnValue = drinkWithId.some((value,index,array)=>{...},thisArg)
console.log([1,2,3].some(x=>x>1))

const isInPromo = drinkWithId.some((value)=>value.promo)
console.log(isInPromo)

const total = isInPromo ? 33 : drinkWithId.reduce((prev,next)=> prev + next.price,0)
console.log(total);


