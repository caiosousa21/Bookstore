import { Types } from '../actions/buscar'

const initialState = {
    listaListas: [],
    listaLivros: [],
    carregandoListas: false,
    carregandoLivros: false,
    erro:false,
}

export default function buscar(state = initialState, action) {
    switch (action.type) {
        case Types.INICIO_BUSCA:
            return {
                ...state,
                carregandoListas: true,
                carregandoLivros:true,
            }
        case Types.BUSCAR_LISTAS_SUCESSO:
            return {
                ...state, 
                carregandoListas:false,
                listaListas:action.listaListas,
            }
        case Types.BUSCAR_LIVROS_SUCESSO:
            return {
                ...state,
                carregandoLivros:false,
                listaLivros:[...state.listaLivros, action.listaLivros],
            }
        default:
            return state;
    }
}
