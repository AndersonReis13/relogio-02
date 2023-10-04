//DOM

const sem = document.querySelector('#date')
const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

//EVENT

setInterval(relogio,1000)

function relogio(){
    let hoje = new Date()

    let hr = hoje.getHours()

    let min = hoje.getMinutes()

    let second = hoje.getSeconds()

    let day = hoje.getDate()

    let month = hoje.getMonth()

    let year = hoje.getFullYear() 
    
    if(min<10){
         min = "0"+min
    }

    if(second<10){
        second = "0"+second
    }

    if(hr>12 && hr<=18){
        sem.textContent = "Boa Tarde"
    }

    if(hr>18){
        sem.textContent = "Boa noite"
    }

    if(hr>6 && hr<12){
        sem.textContent = "Bom dia"
    }

    if(day<10){
        day = "0"+day
    }

    if(month<10){
        month = 1+month
    }


    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = second
    dia.textContent = day
    mes.textContent = month
    ano.textContent = year

}