const horass = document.querySelector('#horas')
const minutoss = document.querySelector('#minutos')
const segundoss = document.querySelector('#segundos')
const dateToday = new Date();
const hr = dateToday.getHours();

function tempo() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let num = "0"

    if(min < 10){
        min += '0' 
    }
    else if(sec < 10){
        sec += '0' 
    }
    horass.textContent = hr;
    minutoss.textContent = min;
    segundoss.textContent = sec;
}

const relogio = setInterval(tempo, 1000)

if(hr >= 18 && hr <= 24){
    alert("Boa Noite!")
}
else if(hr >= 0 && hr < 5){
    alert("Boa Madrugada!")
}
else if(hr >= 5 && hr < 12){
    alert("Bom Dia!")
}
else if(hr > 12 && hr < 18){
    alert("Boa Tarde!")
}
