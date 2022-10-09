import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default(), sagaMiddleware]
    : [sagaMiddleware];

const configureStore = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default configureStore;
