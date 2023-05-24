import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session'

// this is on the exam
const rootReducer = combineReducers({session: sessionReducer}) // every k/v pair is a slice of state

let enhancer; 

if (process.env.NODE_ENV === 'production') {

    enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));


}

// this is on the exam 
const configureStore = (preloadedState) => {

    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore; // used by index.js to a
// attaatch the redux store to the react application


 
    
