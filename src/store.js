import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restlistReducer} from '../src/reducers/restreducer' 

const reducers = combineReducers({
    restReducer : restlistReducer
})

const middleware = [thunk]

//store creation
const store = createStore(reducers,applyMiddleware(...middleware))

//export store
export default store
