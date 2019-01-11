export const Types = {
    INICIO_BUSCA_LISTAS: 'buscar/INICIO_BUSCA_LISTAS',
    INICIO_BUSCA_LIVROS: 'buscar/INICIO_BUSCA_LIVROS',
    BUSCAR_LISTAS_SUCESSO: 'buscar/BUSCAR_LISTAS_SUCESSO',
    BUSCAR_LISTAS_FALHA: 'buscar/BUSCAR_LISTAS_FALHA',
    BUSCAR_LIVROS_SUCESSO: 'buscar/BUSCAR_LIVROS_SUCESSO',
    BUSCAR_LIVROS_FALHA: 'buscar/BUSCAR_LIVROS_FALHA',
}

export const Creators = {
    inicioBuscaListas: () => ({
        type: Types.INICIO_BUSCA_LISTAS,
    }),

    inicioBuscaLivros: () => ({
        type: Types.INICIO_BUSCA_LIVROS,
    }),

    buscarListaListas: () => {
        return dispatch => {
            let i = 0;
            dispatch(Creators.inicioBuscaListas())
            fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=')
                .then(response => response.json())
                .then(json => {
                    const lista = json.results.map(result => ({ nomeL: result.list_name, nomeB: result.list_name_encoded, ref:i++}))
                    return lista
                }
                )
                .then((lista) => dispatch(Creators.buscarListasSucesso(lista)))
                .catch(() => dispatch(Creators.buscarListasFalha()))
        }
    },

    buscarListasSucesso: listaListas => ({
        type: Types.BUSCAR_LISTAS_SUCESSO,
        listaListas,
    }),

    buscarListasFalha: () => ({
        type: Types.BUSCAR_LISTAS_FALHA,
    }),

    buscarListaLivros: lista => {
        return dispatch => {
            dispatch(Creators.inicioBuscaLivros())
            
            fetch('https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=' + lista)
                .then(response => response.json())
                .then((json) => json.results)
                .then(results => {
                    const detalhes = results.map(result => ({ detalhes: result.book_details[0], data: result.published_date }))
                    return detalhes
                })
                .then(detalhes => {
                    const livro = detalhes.map(detalhe => ({ titulo: detalhe.detalhes.title, autor: detalhe.detalhes.author, editora: detalhe.detalhes.publisher, data: detalhe.data }))
                    return livro
                })
                .then((livro) => dispatch(Creators.buscarLivrosSucesso(livro)))
                .catch(() => dispatch(Creators.buscarLivrosFalha()))
        }
    },

    buscarLivrosSucesso: listaLivros => ({
        type: Types.BUSCAR_LIVROS_SUCESSO,
        listaLivros,
    }),

    buscarLivrosFalha: () => ({
        type: Types.BUSCAR_LIVROS_FALHA,
    }),
}