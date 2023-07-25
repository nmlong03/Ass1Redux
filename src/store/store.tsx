import { combineReducers, legacy_createStore as createStore} from 'redux'
import { productReducer } from '../reducers/productReducer'

// const rootReducer = combineReducers({
//     products: productReducer
// })
const store = createStore(productReducer);
export default store