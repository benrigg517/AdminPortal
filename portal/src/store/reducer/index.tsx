import { combineReducers } from "redux";
import { FAQReducer } from "./FAQ/FAQReducer";
import { appReducer } from "./App/appReducer";

export default combineReducers({
    App: appReducer,
    FAQ: FAQReducer
});
