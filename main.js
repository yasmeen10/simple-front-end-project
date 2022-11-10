var navBurger=document.querySelector(".nav-burger")

var isopen=false;

navBurger.addEventListener("click", toggleBurgerMenu)

function toggleBurgerMenu(){

    if(isopen==true){
        navBurger.classList.remove("open");
        isopen=false;
    }
    else{
        navBurger.classList.add("open")
        isopen=true;
    }
}