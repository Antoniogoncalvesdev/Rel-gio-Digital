const horass = document.querySelector('#horas')
const minutoss = document.querySelector('#minutos')
const segundoss = document.querySelector('#segundos')
const date = document.querySelector('#data')

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let data = `${dateToday.getDate()}/${dateToday.getMonth()}/${dateToday.getFullYear()}`;

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    if (data < 10) data = '0' + data

    horass.textContent = hr;
    minutoss.textContent = min;
    segundoss.textContent = sec;
    date.textContent = data;

})