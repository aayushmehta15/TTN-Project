import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../Auth/authReducer";
import commentReducer from "../Comments/commentReducer";
import postReducer from "../Posts/postReducer";
import userReducer from "../User/userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    feeds: userReducer,
    posts: postReducer,
    comments: commentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
