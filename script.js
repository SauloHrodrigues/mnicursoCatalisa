
const imagem = document.querySelector('#imagem');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

gerarValorAleatorio = () =>{ // => aero function
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => { // função de chamada de API
    let  numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {// a crase no JS permite a alteração em tempo real
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    }); // promessa de resposta
}
botao.onclick = pegarPersonagem;
