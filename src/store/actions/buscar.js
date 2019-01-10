export const Types = {
    INICIO_BUSCA: 'INICIO_BUSCA',
    BUSCAR_LISTAS_SUCESSO: 'BUSCAR_LISTAS_SUCESSO',
    BUSCAR_LISTAS_FALHA: 'BUSCAR_LISTAS_FALHA',
    BUSCAR_LIVROS_SUCESSO: 'BUSCAR_LIVROS_SUCESSO',
    BUSCAR_LIVROS_FALHA: 'BUSCAR_LIVROS_FALHA',
}

export const Creators = {
    inicioBusca: () => ({
        type: Types.INICIO_BUSCA,
    }),

    buscarListaListas:()=>{
        return dispatch=>{
            dispatch(Creators.inicioBusca())
            fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=')
            .then(response=> response.json())
            .then((json)=>dispatch(Creators.buscarListasSucesso(json.results)))
            .catch(()=>dispatch(Creators.buscarListasFalha()))
        }
    },

    buscarListasSucesso: listaListas => ({
        type: Types.BUSCAR_LISTAS_SUCESSO,
        listaListas,
    }),

    buscarListasFalha: () => ({
        type: Types.BUSCAR_LISTAS_FALHA,
    }),

    buscarLivrosSucesso: listaLivros => ({
        type: Types.BUSCAR_LIVROS_SUCESSO,
        listaLivros,
    }),

    buscarLivrosFalha: () => ({
        type: Types.BUSCAR_LIVROS_FALHA,
    }),


}