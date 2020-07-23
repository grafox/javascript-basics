import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

console.log(1 == '1')
console.log([])
console.log(!!-3.14)
const condition=false
if(condition){
    console.log('true')
}else{
    console.log('false')
}
const number =99
let result
if(number === 1){
    result='one'
}else{
    result ='No Match'
}
console.log(result)