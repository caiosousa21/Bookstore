import { Types } from '../actions/carrinho'

const initialState = {
    carrinho: [],
}

export default function carrinho(state = initialState, action) {
    switch (action.type) {
        case Types.ADICIONAR_ITEM:
            return {
                carrinho: [
                    ...state.carrinho,
                    action.item
                ],
            }

        case Types.EXCLUIR_ITEM:
            return {
                ...state,
                carrinho: [
                    ...state.carrinho.slice(0, action.itemId),
                    ...state.carrinho.slice(action.itemId + 1)
                ]
            }
        default:
            return state
    }
}