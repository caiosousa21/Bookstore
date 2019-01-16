import { Types } from '../actions/buscar'

const initialState = {
    listaListas: [],
    listaLivros: [],
    carregandoListas: false,
    carregandoLivros: false,
    erro: false,
    tela:false,
    carrinho:[]
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
        case Types.ADICIONAR_ITEM:
            return{
                ...state,
                carrinho:[...state.carrinho, action.item]
            }
        case Types.TELA_INICIADA:
            return{
                ...state,
                tela:true,
            }
        default:
            return state;
    }
}
