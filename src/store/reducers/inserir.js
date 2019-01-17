import { Types } from '../actions/inserir'

const initialState = {
    visivel: false,
}

export default function buscar(state = initialState, action) {
    switch (action.type) {
        case Types.MUDAR_VISIBILIDADE:
            return {
                ...state,
                visivel: !state.visivel,
            }
        default:
            return state;
    }
}
