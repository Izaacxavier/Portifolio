const elementos = document.querySelectorAll('[data-anima]');
const elMobile = document.querySelectorAll('[data-mobile]')
const animateClass = 'animate';
const mobileAnimate = 'animateMobile';

function mobile(){
    const windowTop = window.pageYOffset + window.innerHeight * 0.90;
    elMobile.forEach(function(elemento){
        if(windowTop > elemento.offsetTop){
            elemento.classList.add(mobileAnimate);
        }else{
            elemento.classList.remove(mobileAnimate);
        }
    })
    
}

function animateScroll(){
    const windowTop = window.pageYOffset + window.innerHeight * 0.5;
    elementos.forEach(function(elemento){
        if(windowTop > elemento.offsetTop){
            elemento.classList.add(animateClass);
        }else{
            elemento.classList.remove(animateClass)
        }
    });

}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animateScroll();
    })
}
if(elementos.length){
    window.addEventListener('scroll', function(){
        mobile();
    })
}


 