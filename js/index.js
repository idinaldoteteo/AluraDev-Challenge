
const areaDoCodigo = document.querySelector(".codigo-wrapper")
const linguagem = document.querySelector(".linguagem");
const botaoHighlight = document.querySelector(".botao-highlight")
const botaoHambuguer = document.querySelector(".img-hamburguer")


botaoHambuguer.addEventListener("click", () =>{ abrirMenuLateral()})

function abrirMenuLateral(){ 
    console.log("clicado")  
    document.querySelector(".section-esquerda").classList.toggle("hamburguer")    
}

function trocarLinguagem(){
    let codigo = areaDoCodigo.querySelector("code")
    let linguagem = linguagem.querySelector(".linguagem option:first-child").value
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem} contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener("change", () => {
    trocarLinguagem()
})

botaoHighlight.addEventListener("click", (elemento) => {
    elemento.preventDefault()
    let codigo = areaDoCodigo.querySelector("code")
    hljs.highlightBlock(codigo);
})



