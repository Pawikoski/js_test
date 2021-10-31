function pobierzliczbe(){
    let a = document.querySelector('#liczbaA').value;
    let b = document.querySelector('#liczbaB').value;
 
    a = parseInt(a);
    b = parseInt(b);

    let ab = [a, b];

    return ab;
}
 
const dodawanie = document.querySelector('#dodawanie');
const odejmowanie = document.querySelector('#odejmowanie');
const mnozenie = document.querySelector('#mnozenie');
const dzielenie = document.querySelector('#dzielenie');
const potegowanie = document.querySelector('#potegowanie');
 
let wynik = document.querySelector('#wynik');
 
dodawanie.addEventListener('click', ()=>{
    let ab = pobierzliczbe();
    let a = ab[0];
    let b = ab[1];

    wynik.innerText = "Wynik: " + (a + b);
})