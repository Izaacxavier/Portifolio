const elemento = document.querySelector("#text");
const text = "Olá, sou o Izaac xavier!";
const intervalo = 200;

function typeText(elemento, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() =>{

        if(!char.length){
            return clearIntervalo(typer);
        }
        const next = char.pop();
            elemento.innerHTML += next;
        
    }, interval);
}

typeText(elemento, text, intervalo);

/* menu mobile */

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-bar");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})