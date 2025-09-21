
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === '') {
        alert("Por favor, digite um nome para adicionar!");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        amigoInput.value = '';
        return;
    }

    amigos.push(nomeAmigo);
    amigoInput.value = '';

    atualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para fazer o sorteio.");
        return;
    }

    embaralhar(amigos);
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado = amigos[(i + 1) % amigos.length];
        
        let itemLista = document.createElement('li');
        itemLista.innerHTML = `${amigos[i]} tirou ${amigoSorteado}`;
        itemLista.classList.add('resultado-item');
        listaResultado.appendChild(itemLista);
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function atualizarListaAmigos() {
    let listaAmigosUL = document.getElementById('listaAmigos');
    listaAmigosUL.innerHTML = '';

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        li.classList.add('name-item');
        listaAmigosUL.appendChild(li);
    });
}