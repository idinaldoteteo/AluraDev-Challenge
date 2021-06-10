
const areaDoCodigo = document.querySelector(".codigo-wrapper")
const linguagem = document.querySelector(".linguagem");
const botaoHighlight = document.querySelector(".botao-highlight")
const botaoHambuguer = document.querySelector(".img-hamburguer")
const botaoExportar = document.querySelector(".fa-angle-double-down")
const botaoDownload = document.querySelector(".fa-download")
const quadroExportar = document.querySelector(".div-quadro-exportar")
const getDivQuadroExportar = document.querySelector(".div-textarea")

botaoDownload.addEventListener("click", () => { downloadCodigo()})
function downloadCodigo(){    
    let nomeFile = document.querySelector(".input-nome-file")
    let tipoFile = document.querySelector(".select-tipo-file")
    let quadroCodigo = document.querySelector(".fieldset-quadro")

    domtoimage.toBlob(quadroCodigo)
    .then(function (resultado) {
        if( tipoFile.value == "svg"){
            saveAsSvg(quadroCodigo, `${nomeFile.value}`);
        }else{
            window.saveAs(resultado, `${nomeFile.value}.${tipoFile.value}`);
        }
        nomeFile.value = ""
        tipoFile.value = ""
        document.querySelector(".div-quadro-exportar").classList.toggle("acao-quadro-exportar")        
    });
}

function saveAsSvg(resultado, nomeFile){    
    var svg_data = resultado.innerHTML
    var head = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'
    var full_svg = head + svg_data + "</svg>"
    var blob = new Blob([full_svg], {type: "image/svg+xml"});  
    window.saveAs(blob, `${nomeFile}.svg`);
}

getDivQuadroExportar.addEventListener("click", () => {
    if( quadroExportar.classList.contains("acao-quadro-exportar")) {
        quadroExportar.classList.toggle("acao-quadro-exportar")
    }
})


botaoExportar.addEventListener("click", () => { mostrarDivDownload() })
function mostrarDivDownload(){
    document.querySelector(".div-quadro-exportar").classList.toggle("acao-quadro-exportar")
}

botaoHambuguer.addEventListener("click", () =>{ abrirMenuLateral()})
function abrirMenuLateral(){ 
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




