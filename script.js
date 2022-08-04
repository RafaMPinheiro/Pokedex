var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {
    //Bloqueia refresh da pagina
    e.preventDefault()

    //Url da pesquisa
    let urlform = "https://pokeapi.co/api/v2/pokemon/"

    //Url do input nome
    let nome = document.getElementById("name")

    //concatena a url com o input
    urlform = urlform + this.name.value

    //Deixa a url em minuscula
    urlform = urlform.toLocaleLowerCase()

    //ID content
    let resposta = document.getElementById('content')

    //ID imgpokemon
    let imagem = document.getElementById('imgpokemon')

    //HTML
    let html = ''

    fetch(urlform)
        .then(resposta => resposta.json())
        .then(function (data) {
            console.log(data)
            html = 'Id: ' + data.id + '<br>'
            html = html + 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"

        })
        .catch(function (err) {
            if (err == 'Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado!'
            } else {
                html = 'Erro: ' + err
            }
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}