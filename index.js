const date = document.querySelector('#date');
const number = document.querySelector('#number');
const btn = document.querySelector('.btn-check');
const output = document.querySelector('#output');

btn.addEventListener('click', function(){
    let dateValue = date.value;
    let numberValue = number.value;

    console.log(dateValue.length);
    console.log(numberValue.length);
    const splitted = dateValue.split("-")
    const sum = Number(splitted[0]) + Number(splitted[1]) + Number(splitted[2]);
    
    if(!numberValue.length && !dateValue.length) {
        output.innerHTML = 'Please enter both fields'
    } else if (sum % (+numberValue) === 0) {
        output.innerHTML = `${numberValue} is a lucky number!!`;
    } else if (sum % (+numberValue) !== 0 && Number(sum % (+numberValue))){
        output.innerHTML = `${numberValue} isn't that lucky`;
    } 
    
})