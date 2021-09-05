const counter = document.getElementById('counter');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');

let count = 0;
increment.addEventListener("click", ()=>{
    count++;
    counter.innerHTML = count;
});

decrement.addEventListener("click", ()=>{
    count--;
    counter.innerHTML = count;
});




