async function foo(lista0, lista1, lista2, lista3) {
    const busca = async (lista) =>
        await fetch('https://api.nytimes.com/svc/books/v3/lists.json?api-key=1HrlQk8lpCbcHkMRiAfKe6ctB0aKTSIG&list=' + lista)
            .then(resolve => resolve.json())
            .then(json => json.results)
            .then(results => {
                const detalhes = results.map(result => ({ detalhes: result.book_details[0], data: result.published_date }))
                return detalhes
            })
            .then(detalhes => {
                const livro = detalhes.map(detalhe => ({ titulo: detalhe.detalhes.title, autor: detalhe.detalhes.author, editora: detalhe.detalhes.publisher, data: detalhe.data }))
                return livro
            })


    const retorno = () => Promise.all(
        [
            busca(lista0),
            busca(lista1),
            busca(lista2),
            busca(lista3)
        ]
    )
    return retorno()
}
export default foo