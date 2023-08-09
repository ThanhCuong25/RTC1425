import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import todoSaga from "../../saga/todoSaga";
import rootReducers from "../reducers/rootReducers";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)

export default store