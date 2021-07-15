import {
    GET_MAIN_DATA_BEGIN,
    GET_MAIN_DATA_SUCCESS,
    GET_MAIN_DATA_ERROR
} from '../constants/main'

const initialState = {
    mainData: {
        data: null,
        loading: false,
        error: null
    }
}

const main = (state = initialState, action) => { // The "action" object can include any data you want but we only need type and payload keys right now
    switch (action.type) {
        case GET_MAIN_DATA_BEGIN:
            return {...state, mainData: {data: null, loading: true, error: null}}

        case GET_MAIN_DATA_SUCCESS:
            return {...state, mainData: {data: action.payload, loading: false, error: null}}
    
        case GET_MAIN_DATA_ERROR:
            return {...state, mainData: {data: null, loading: false, error: action.payload}}
        
        default: // Return the initial state
            return state
    }
}

export default main