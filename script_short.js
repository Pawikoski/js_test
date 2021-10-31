let a = 0;
let b = 0;

function pobierzLiczbe(){
    a = parseInt(document.querySelector('#liczbaA').value);
    b = parseInt(document.querySelector('#liczbaB').value);
}
 
const dodawanie = document.querySelector('#dodawanie');
const odejmowanie = document.querySelector('#odejmowanie');
const mnozenie = document.querySelector('#mnozenie');
const dzielenie = document.querySelector('#dzielenie');
const potegowanie = document.querySelector('#potegowanie');
 
let wynik = document.querySelector('#wynik');
 
dodawanie.addEventListener('click', ()=>{
    pobierzLiczbe();
    wynik.innerText = "Wynik: " + (a + b);

    console.log(a, b);
})