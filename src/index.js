import '../assets/css/style.css';

//import { arguments, arguments } from 'file-loader';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

//const number=10
//let result
//const anotherNumber=1
//const result ='The number is ' + (number ===1?'one':'no Match')
/* 
const result =`The number is  ${(number ===1
    ?'one'
    : number===99
    ? 'ninty-nine'
    :number)}
    `
console.log(result) */
/* switch(number){
    case 1:result='one'; break
    case 99:result= 'Ninty-nine'; break
    default: result='No Match'
 }

 switch(number){
    case 1:{
        const h='hi'
        result='one'+h; 
        break
    }
    case 99:
        result= 'Ninty-nine'; 
        break

        default: result='No Match'
 }
 console.log(result)
//constructor
 console.log(new Number(66)) */
/* 
 const literalNumber=99

 console.log(literalNumber)
 console.log(Number('99'))
 console.log(new Number('44px'))
 console.log(new Number(100/3))
 console.log(new Number(0.1+0.2))

 const price1 =9.33
 const price2 =9.33*100 
 const quantity=3
 console.log(price1*quantity)

 console.log((price2*quantity)/100)

console.log(parseInt('0110',2))
console.log(Number('55e10'))
console.log(9 + + '99.5555')
console.log(isNaN('I am a String!'))
console.log(Number.isInteger(66))

///Numbers
const immutableNumber=99
let referencedNumber=immutableNumber
referencedNumber=44
console.log(immutableNumber)
console.log(referencedNumber)

console.log(typeof 99)
console.log(99 instanceof Number)
console.log(new Number('99') instanceof Number)
console.log({}.toString())
console.log(Object.prototype.toString(99))
console.log(Object.prototype.toString.call(99).slice(8,-1))
console.log(Object.prototype.toString.call(99).slice(8,-1)=== Number)
console.log(Object.prototype.toString.call(99).slice(8,-1)=== 'Number')

console.log(Number.prototype)
console.log((99.12345678).toFixed(2))
console.log((99.12345678).toPrecision(4))
console.log(new Number(99).valueOf())
 */

/* console.log(String(55+11))
console.log(String({name: 'Pizza'}))

console.log(JSON.stringify({name: 'Pizza'}))

console.log(new String(5599).length)
const pizza='Pepperoni'
console.log(pizza[1],pizza.length - 1)

const imutable = 'I shall not change'
console.log(imutable.toUpperCase())
console.log(typeof pizza)
console.log(pizza instanceof String)

console.log(String('Pepperoni') instanceof String)
console.log(new String('Pepperoni') instanceof String)
console.log(String.prototype)
console.log(pizza.indexOf('p'))
if(pizza.indexOf('p') !== -1){
    console.log('Not last letter')
}
console.log(pizza.replace('oni','fire'))
console.log(pizza.slice(0,1))
console.log(pizza.slice(0,1))
console.log(pizza.split('e')[1])
console.log('   4444 5555 6666 777   '.trim().replace(/\s/g))

 */
// Function Decoration
/* 
function makeCar(name=''){
   // name = name || ''
console.log(`Making Car... ${name.toUpperCase()}`)
}
makeCar("Ferrari")
makeCar()


// Function xpresion

const makeCarExpression = function myFunction(){
    console.log(makeCarExpression.name)
}
makeCarExpression()

// Arrow Function

const makeCarArrow = ()=> console.log('Making Car inside Arrow')
makeCarArrow()

// rest parametor Function
function makeCarPrice(){
    console.log(arguments,Array.isArray(arguments))
    Array.from(arguments).forEach(value =>console.log(value))
    const total=Array.from(arguments).reduce((prev,next)=>{return prev + next})
    console.log(`Total ${total}`)
}
makeCarPrice(11,44,55,99,22)

function makeCarPriceRest(...params){
    console.log(Array.isArray(params))
    const total=Array.from(arguments).reduce((prev,next)=>{return prev + next})
    console.log(`Total ${total}`)
}
makeCarPriceRest(11,44,55,99,22)

const makeCarPrice2 = (...params)=>{
    console.log(Array.isArray(params))
    const total=params.reduce((prev,next)=>{return prev + next})
    return total
}
makeCarPrice2(11,44,55,99,22)
 */

const drink = {
    id:'001',
    name:'Papce',
    price:99,
    getDrinkDetails(){
        return `Drink ${this.name} (${this.price})`
    },
    'abc 123':'I am the value',
    100:'I am a number'
}
//////
const id ='001'
const name ='Papce'
const price = 99
const someKey='name'

const drink2 = {
    id,
    [someKey]:name,
    price,
    getDrinkDetails(){
        return `Drink ${this.name} (${this.price})`
    },
    'abc 123':'I am the value',
    100:'I am a number'
}


const drinkRefrence = drink
drinkRefrence.name='Cola'

console.log(drink)
console.log(drink2)
console.log(new Object() instanceof Object )
console.log(Object() instanceof Object)
///
console.log(drink.getDrinkDetails())
console.log(drink['abc 123'])
console.log(drink['100'])


const newDrink = {
    id:'001',
    name:'Papce',
    price:{
        sale:99,
        full:129
    }
}

const {sale,full} = newDrink.price
console.log(sale,full)

if(newDrink.id){
    console.log(newDrink.id)
}

for(const prop in newDrink){
    if(newDrink[prop] === 'Papce'){
        console.log(newDrink[prop])
    }
}

console.log(Object.values(newDrink).includes('Papce'))

// property exists
console.log(newDrink.hasOwnProperty('name'))
console.log(Object.prototype.hasOwnProperty.call(newDrink,'name'))
console.log(Object.keys(newDrink).includes('name'))

newDrink.brand = 'My Drinks'
newDrink.name = 'Peach'

function propUpdate(prop,value){
    newDrink[prop] = value
}
propUpdate('brand','my Drink')
console.log(newDrink)

//delete newDrink.id
//newDrink.id=undefined

//const drinkClone = Object.assign({},newDrink)
//const drinkClone = {...newDrink}
//drinkClone.id='abcd'
const drinkStringified = JSON.stringify(newDrink)
console.log(drinkStringified)
const drinkClone = JSON.parse(drinkStringified)

console.log(drinkClone)

// merg Object

const price2 ={
    sale:100,
    ful:129
} 
const mergedDrink = {...newDrink,...{price2}}
console.log(mergedDrink)