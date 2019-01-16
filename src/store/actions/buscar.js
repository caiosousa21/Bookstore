import buscaInicial from '../../helpers/buscaInicial'

export const Types = {
    INICIO_BUSCA_LISTAS: 'buscar/INICIO_BUSCA_LISTAS',
    INICIO_BUSCA_LIVROS: 'buscar/INICIO_BUSCA_LIVROS',
    BUSCAR_LISTAS_SUCESSO: 'buscar/BUSCAR_LISTAS_SUCESSO',
    BUSCAR_LISTAS_FALHA: 'buscar/BUSCAR_LISTAS_FALHA',
    INICIO_BUSCAR_LIVROS_SUCESSO: 'buscar/INICIO_BUSCAR_LIVROS_SUCESSO',
    BUSCAR_LIVROS_FIM: 'buscar/BUSCAR_LIVROS_FIM',
    BUSCAR_LIVROS_FALHA: 'buscar/BUSCAR_LIVROS_FALHA',
    ADICIONAR_ITEM: 'buscar/ADICIONAR_iTEM',
    EXCLUIR_ITEM: 'EXCLUIR_ITEM',
    TELA_INICIADA: 'TELA_INICIADA',
}

export const Creators = {
    inicioBuscaListas: () => ({
        type: Types.INICIO_BUSCA_LISTAS,
    }),

    inicioBuscaLivros: () => ({
        type: Types.INICIO_BUSCA_LIVROS,
    }),
    //apikey=7a7846ce976e4df6ae218249bfb3a631   1HrlQk8lpCbcHkMRiAfKe6ctB0aKTSIG
    buscarListaListas: () => {
        return dispatch => {
            let i = 0;
            dispatch(Creators.inicioBuscaListas())
            fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=1HrlQk8lpCbcHkMRiAfKe6ctB0aKTSIG&lists=')
                .then(response => response.json())
                .then(json => {
                    const lista = json.results.map(result => ({ nomeL: result.list_name, nomeB: result.list_name_encoded, ref: i++ }))
                    return lista
                })
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

    buscarListaLivros: (lista0, lista1, lista2, lista3) => {
        return dispatch => {
            dispatch(Creators.inicioBuscaLivros())
            async function busca() {
                const res = await buscaInicial(lista0, lista1, lista2, lista3)
                dispatch(Creators.inicioBuscarLivrosSucesso(res))
            }
            busca()
        }
    },

    inicioBuscarLivrosSucesso: listaLivros => ({
        type: Types.INICIO_BUSCAR_LIVROS_SUCESSO,
        listaLivros,
    }),

    buscarLivrosFim: () => ({
        type: Types.BUSCAR_LIVROS_FIM,
    }),

    buscarLivrosFalha: () => ({
        type: Types.BUSCAR_LIVROS_FALHA,
    }),

    adicionarItem:(item) =>({
        type: Types.ADICIONAR_ITEM,
        item,
    }),

    excluirItem:(item) =>({
        type: Types.EXCLUIR_ITEM,
        item,
    }),

    telaIniciada:() =>({
        type: Types.TELA_INICIADA,
    })
}