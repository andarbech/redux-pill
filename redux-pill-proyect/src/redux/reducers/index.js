import { combineReducers } from "redux";
import { shoppingReducer } from "./cartReducer";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducer";

const reducer = combineReducers({
    contador: contadorReducer,
    shopping: shoppingReducer,
    crud:crudReducer,
    
})

export default reducer;