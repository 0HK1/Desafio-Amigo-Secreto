let listaAmigos = [];

function adicionarAmigo(){
    var amigo = document.getElementById('amigo');
    if (amigo != "") {
        listaAmigos.push(amigo.value);
        adicionarNomeNaLista();
    }
    if (amigo == "") {
        alert('Digite um Nome Válido');
    }
    amigo.value = '';
}

function adicionarNomeNaLista(){
    var tabelaAmigos = document.getElementById('listaAmigos');
    tabelaAmigos.innerHTML += `<li>${listaAmigos[listaAmigos.length - 1]}</li>`;
}

function sortearAmigo() {
    const numSorteado = parseInt(Math.random() * listaAmigos.length);
    var tabelaAmigoSorteado = document.getElementById('resultado');

    if (listaAmigos[numSorteado] == undefined) {
        alert("Lista Vazia")
    }
    if (listaAmigos[numSorteado] != undefined) {
        tabelaAmigoSorteado.innerHTML = `<li>${listaAmigos[numSorteado]}</li>`;
    }
}

function reiniciarLista() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}