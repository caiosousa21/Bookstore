import {combineReducers} from 'redux'

import lista from './lista'
import carrinho from './carrinho'
import visibilidade from './visibilidade'

const rootReducer = combineReducers({
    lista,
    carrinho,
    visibilidade
})

export default rootReducer