const botaoabrir=document.querySelector("header-mobile > button")
 
const body = document.querySelector("body")
const nav =  document.querySelector(".header-mobile nav")

console.log(body)

botaoabrir.addEventListener('click',abrirmenu)

function abrirmenu() {
 body.classList.add ("escurecer")
}