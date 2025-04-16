const input = document.querySelector('input')
const button = document.querySelector('button')

const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const regiao = document.getElementById('regiao')

const img = document.querySelector('img')

button.addEventListener("click", async (event) => {

    event.preventDefault()
    const cep = input.value;

    if(cep.length != 8) {
        alert("O cep informado é inválido!");
        return;
    }

    const dados = await buscaCep(cep)

    console.log(dados);

    if (dados.erro) {
        alert("Cep não encontrado!")
        return;
    }
    
    mostraInfos(dados)

});

async function buscaCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/` 

    const request = await fetch(url)

    return await request.json()
}

function mostraInfos(dados) {
    img.src = `./img/${dados.uf}.svg`

    logradouro.textContent = dados.logradouro
    cidade.textContent = dados.localidade
    bairro.textContent = dados.bairro
    estado.textContent = dados.estado
    regiao.textContent = dados.regiao
}