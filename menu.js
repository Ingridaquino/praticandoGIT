let show = true // o estado inicial do menu seja true

const menuSection = document.querySelector(".menu-section")
const menuBurguer = menuSection.querySelector(".menu-burguer")

menuBurguer.addEventListener("click", () => {
    menuSection.classList.toggle("on", show) // aqui ele irá add a class on, toggle é uma função de  colocar e tirar.
    show = !show // show será diferente do atual ( será false)
})