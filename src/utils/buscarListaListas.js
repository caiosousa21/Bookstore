export const buscarListaListas = () => {
    const ListaListas = fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=')
    .then(response=> response.json())
    .then(json => json.results)
    .then(results=>results.map(result=>(result)));
    return ListaListas
}
