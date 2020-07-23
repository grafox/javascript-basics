import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

const number=10
//const anotherNumber=1
//const result ='The number is ' + (number ===1?'one':'no Match')
const result =`The number is  ${(number ===1
    ?'one'
    : number===99
    ? 'ninty-nine'
    :number)}
    `

console.log(result)