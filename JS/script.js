function adicionarAtributo(){
    let atributo = document.getElementById("atributo");
    atributo.setAttribute('style', 'color:blue; font-size:24px');
}

function removerAtributo(){
    let atributo = document.getElementById('atributo');
    atributo.removeAttribute('style', 'color:blue; font-size:24px');
}