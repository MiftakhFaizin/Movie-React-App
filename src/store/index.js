import { createStore } from "redux"

const initialState = {
    datasMovie: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_DATA_MOVIES":
            return {
                ...state,
                datasMovie: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store