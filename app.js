const aba = document.getElementById("aba-direcionamento");
const corpo = document.querySelector("body");

function fecharAba(){
    aba.style.display = "none";
    corpo.style.position = "relative"
}
function abrirAba(){
    aba.style.display = "flex";
    corpo.style.position = "fixed"
}