const dodawanie = document.querySelector('#dodawanie');
const odejmowanie = document.querySelector('#odejmowanie');
const mnozenie = document.querySelector('#mnozenie');
const dzielenie = document.querySelector('#dzielenie');
const potegowanie = document.querySelector('#potegowanie');
 
let wynik = document.querySelector('#wynik');
 
dodawanie.addEventListener('click', ()=>{
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
 
    wynik.innerText = "Wynik: " + (a + b);
})
 
odejmowanie.addEventListener('click', ()=>{
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
    
    wynik.innerText = "Wynik: " + (a - b);
})
 
mnozenie.addEventListener('click', ()=>{
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
    
    wynik.innerText = "Wynik: " + (a * b);
})
 
dzielenie.addEventListener('click', ()=>{
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
    
    wynik.innerText = "Wynik: " + (a / b);
})
 
potegowanie.addEventListener('click', ()=>{
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
    
    wynik.innerText = "Wynik: " + Math.pow(a, b);
})