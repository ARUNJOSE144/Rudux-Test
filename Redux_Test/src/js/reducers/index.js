import {
    combineReducers
} from "redux";

import commonReducer from "./CommonReducer"
import articleReducer from "./articleReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
    commmons: commonReducer,
    articles: articleReducer,
    books: bookReducer
});
