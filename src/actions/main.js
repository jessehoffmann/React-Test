import {
    GET_MAIN_DATA_BEGIN,
    GET_MAIN_DATA_SUCCESS,
    GET_MAIN_DATA_ERROR
} from '../constants/main'

// The following three actions allow us to track response status for notifying user
export const getMainDataBegin = () => ({type: GET_MAIN_DATA_BEGIN})
export const getMainDataSuccess = (result) => ({type: GET_MAIN_DATA_SUCCESS, payload: result})
export const getMainDataError = (error) => ({type: GET_MAIN_DATA_ERROR, payload: error})

export const getMainData = () => {
    return dispatch => {
        dispatch(getMainDataBegin())
        return fetch('http://interview.wptdev.com/api/killfeed') // No method or headers needed for simple get request
            .then(response => response.json())
            .then(data => {
                if (data.status === "successful") {
                    console.log("Success", data.payload)
                    dispatch(getMainDataSuccess(data.payload))
                } else {
                    console.log("Error", data)
                    dispatch(getMainDataError(data))
                }
            })
            .catch(error => {
                // Catch any remaining errors just in case
                console.log("Error", error)
                dispatch(getMainDataError(error))
            })
    }
}