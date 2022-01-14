const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

gerarValorAleatorio = () =>{
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => { // função de chamada de API
    let  numeroAleatorio;
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'aplication/pson'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        condicao.innerHTML = data.status;
    }); // promessa de resposta

    botao.onclick = pegarPersonagem;

}

