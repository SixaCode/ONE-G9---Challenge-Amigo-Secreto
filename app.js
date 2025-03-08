function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    if (amigo == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
    }

    listaAmigos.innerHTML = "";

    for (i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li");
        let amigoAnadir = document.createTextNode(amigos[i]);
        elementoLista.appendChild(amigoAnadir);
        listaAmigos.appendChild(elementoLista);
    }
}

let amigos = [];

