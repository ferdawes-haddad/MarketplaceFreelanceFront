const { Button } = require("selenium-webdriver")

const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length
let pageActive = 1

//on attend le chargement de la page
window.onload = () => {
    //on aff la 1er page de formulaire
    document.querySelector(".page").style.display = "initial"


    pages.forEach((page, index ) => {
       //crée elt "num page"
       let element =document.createElement("div")
       element.classList.add("page-num")
       if(pageActive == index + 1 ){
           element.classList.add("active")
       }
       element.innerHTML = index + 1 
       header.appendChild(element)
    })

    //On gére les buttons "suivant"
    let buttons = document.querySelectorAll("button[type=button]")

    for(let button of buttons){
        button.addEventListener("click", pageSuivant)
    }
}
/**
 * Cette function fait avance le formulaire d'une page
 */
function pageSuivant(){
    // on increment pageActive
    pageActive++

    //on masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.nextElementSibling.style.display = "initial"

}