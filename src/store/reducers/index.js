import {combineReducers} from 'redux'

import buscar from './buscar'
import carrinho from './carrinho'

const rootReducer = combineReducers({
    buscar,
    carrinho
})

export default rootReducer