const listaFilme = document.querySelector('#films')
const secaoCategoria = document.querySelector('#secaoCategoria')

function listarFilmes(colecaoFilmes) {

    listaFilme.innerHTML = ''

    colecaoFilmes.forEach(filme => {
        criarTemplate(filme)
    });
}

function criarTemplate(filme) {
    listaFilme.innerHTML += `
        <li>
            <figure>
                <img src="${filme.url}" alt="">
            </figure>
            <h2> ${filme.nome} </h2>
        </li>
    
    `
}

function filtrarFilme(filtroCategoria){
    const filmesFiltrados = filmes.filter( filme => {

        if(filtroCategoria == filme.categoria) {
            return filme
        }
    })

    listarFilmes(filmesFiltrados)
}

function buscarFilme() {
    const filmeBuscado = document.querySelector('#filmeBuscado').value
    
    const find = filmes.find(filmes => filmes.nome === filmeBuscado)

    if(find == undefined){
        listaFilme.style.justifyContent = 'center'
        listaFilme.innerHTML = `
            <h2>
                Desculpe, não achamos nada em sua pesquisa!
            </h2>
        `
    } else {
        listaFilme.innerHTML = ''
        criarTemplate(find)
    }

}

secaoCategoria.addEventListener("click", event => {
    event.preventDefault()

    const categoriaSelecionada = event.target.text

    if(categoriaSelecionada == 'Mostrar Todos'){
        listarFilmes(filmes)
    } else {
        filtrarFilme(categoriaSelecionada)
    }
})

listarFilmes(filmes)