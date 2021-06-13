
let aplicarEventoMostrarIteracoes = ()=>{
    const allCards = document.querySelectorAll(".projeto")

    allCards.forEach( (card) =>{
        card.addEventListener("mouseover", () => { mostrarIteracoes(card)})
        card.addEventListener("mouseout", () => { fecharIteracoes(card)})
    })
}

let fecharIteracoes = (card) => {
    card.querySelector("div .iteracoes").classList.toggle("show")  
}
let mostrarIteracoes = (card) => {
    card.querySelector("div .iteracoes").classList.toggle("show")  
}

document.addEventListener("DOMContentLoaded", () =>{
    aplicarEventoMostrarIteracoes()
})
	
	