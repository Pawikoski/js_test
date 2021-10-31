function pobierzliczbe(){
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);
 
    return a ,b;
}
 
const dodawanie = document.querySelector('#dodawanie');
const odejmowanie = document.querySelector('#odejmowanie');
const mnozenie = document.querySelector('#mnozenie');
const dzielenie = document.querySelector('#dzielenie');
const potegowanie = document.querySelector('#potegowanie');
 
let wynik = document.querySelector('#wynik');
 
dodawanie.addEventListener('click', ()=>{
    pobierzliczbe();
    wynik.innerText = "Wynik: " + (a + b);
})