import { CHANGE, CHANGE_MODE } from "./actions";
import {ACTION} from '../Types'
import changeMode from "../helpers/changeMode";

const initialState = {
    isLoading: false,
    errorMessage: "",
    colors: {},
    isDarkMode: false,
};

const Reducer = (state = initialState, action:ACTION) => {
    switch(action.type){
        case CHANGE:
            return {
                ...state,
                ...action.mutation
            }
        case CHANGE_MODE:
            const colors = changeMode(action.mode)
            return {
                ...state,
                isDarkMode: action.mode,
                colors,
            }
        default: return state
    }
};

export default Reducer;