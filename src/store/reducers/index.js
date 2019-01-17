import {combineReducers} from 'redux'

import lista from './lista'
import carrinho from './carrinho'
import inserir from './inserir'

const rootReducer = combineReducers({
    lista,
    carrinho,
    inserir
})

export default rootReducer