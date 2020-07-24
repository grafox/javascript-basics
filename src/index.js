import '../assets/css/style.css';

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

console.log(String(55+11))
console.log(String({name: 'Pizza'}))



