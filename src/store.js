import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducer";

const middleware = [thunk]

import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;