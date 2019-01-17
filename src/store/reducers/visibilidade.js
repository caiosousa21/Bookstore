import { Types } from '../actions/visibilidade'

const initialState = {
    busca_visivel: false,
    inserir_visivel: false,
}

export default function buscar(state = initialState, action) {
    switch (action.type) {
        case Types.MUDAR_VISIBILIDADE_INSERIR:
            return {
                ...state,
                inserir_visivel: !state.inserir_visivel,
            }
        case Types.MUDAR_VISIBILIDADE_BUSCA:
            return {
                ...state,
                busca_visivel: !state.busca_visivel,
            }
        default:
            return state;
    }
}
