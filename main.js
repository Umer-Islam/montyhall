door_1 = document.querySelector('.door1').addEventListener('click',funcDoor1)
door_2 = document.querySelector('.door2').addEventListener('click',funcDoor2)
door_3 = document.querySelector('.door3').addEventListener('click',funcDoor3)



let car = Math.random()*3 







function funcDoor1(){
    document.querySelector('.door1').innerText = "🐐"
}

function funcDoor2(){
    
    document.querySelector('.door2').innerText = "❌"
    document.querySelector('h2').innerText = "Think again"
}

function funcDoor3(){}


