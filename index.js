import { kutyaOsszeallit } from"./fuggvenyek.js";
import { KUTYAK } from"./adatok.js";

const valasztott=document.querySelector(".valasztott");

const ADATOK=document.querySelectorAll(".adatok");
ADATOK[0].innerHTML=kutyaOsszeallit(KUTYAK);

const KARTYA=document.querySelectorAll(".adatok.kutyakartya");

function szinezes(lista) {
    for (let index = 0; index < lista.length; index++) {
        lista[index].addEventListener("mouseover", function(event) {
            event.target.closest("div").classList.add("valasztott");
        });
    }
}
szinezes(document.querySelectorAll(".kutyakartya"))

function vissza(lista){
    for(let index=0; index < lista.length; index++){
        lista[index].addEventListener("mouseout", function(event){
            event.target.closest("div").classList.remove("valasztott");
        })
    }
}
vissza(document.querySelectorAll("kutyakartya"))

function kivalaszt(lista){
    for(let index=0; index < lista.length; index++){
        lista[index].addEventListener("click", function(event){
            console.log(event.target.innerHTML);
            valasztott.innerHTML += event.target.innerHTML;
        })
    }
}
kivalaszt(document.querySelectorAll("kutyakartya"))
