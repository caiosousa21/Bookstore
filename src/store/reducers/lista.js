import { Types } from '../actions/lista'

const initialState = {
    listaListas: [],
    listaLivros: [],
    carregandoListas: false,
    carregandoLivros: false,
    erro: false,
    tela: false,
}

export default function buscar(state = initialState, action) {
    switch (action.type) {
        case Types.INICIO_BUSCA_LISTAS:
            return {
                ...state,
                carregandoListas: true,
                carregandoLivros: true,
            }

        case Types.BUSCAR_LISTAS_SUCESSO:
            return {
                ...state,
                carregandoListas: false,
                listaListas: action.listaListas,
            }

        case Types.INICIO_BUSCA_LIVROS:
            return {
                ...state,
            }

        case Types.INICIO_BUSCAR_LIVROS_SUCESSO:
            return {
                ...state,
                carregandoLivros: false,
                listaLivros: action.listaLivros,
            }

        case Types.TELA_INICIADA:
            return {
                ...state,
                tela: true,
            }

        case Types.INSERIR_LIVRO:
            return {
                ...state,
                listaLivros:[
                    ...state.listaLivros.slice(0, action.listaId),
                    action.lista,
                    ...state.listaLivros.slice(action.listaId + 1)]
            }

        default:
            return state;
    }
}
