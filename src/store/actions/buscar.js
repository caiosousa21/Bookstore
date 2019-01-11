export const Types = {
    INICIO_BUSCA: 'buscar/INICIO_BUSCA',
    BUSCAR_LISTAS_SUCESSO: 'buscar/BUSCAR_LISTAS_SUCESSO',
    BUSCAR_LISTAS_FALHA: 'buscar/BUSCAR_LISTAS_FALHA',
    BUSCAR_LIVROS_SUCESSO: 'buscar/BUSCAR_LIVROS_SUCESSO',
    BUSCAR_LIVROS_FALHA: 'buscar/BUSCAR_LIVROS_FALHA',
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
            .then(json=>{
                const lista = json.results.map(result=> ({nomeL:result.list_name, nomeB: result.list_name_encoded})) 
                return lista}
                )
            .then((lista)=>dispatch(Creators.buscarListasSucesso(lista)))
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

    buscarListaLivros: lista =>{
        return dispatch=>{
            fetch('https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=' + lista)
            .then(response=> response.json())
            .then((json)=>dispatch(Creators.buscarLivrosSucesso(json.results)))
            .catch(()=>dispatch(Creators.buscarLivrosFalha()))
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