import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import user from "./user/reducers";
import giftCards from "./gift-cards/reducers";


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user,
    giftCards
})

export default createRootReducer