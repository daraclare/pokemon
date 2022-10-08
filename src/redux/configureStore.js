import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const configureStore = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(watcherSaga);

export default configureStore;
