setInterval(()=>{
const time = document.querySelector('#time');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (hours > 12) {
    hours = hours - 12; 
}
time.textContent = hours + ":" + minutes + ":" + seconds;
});