import {GET_PROFILE_FAIL, GET_PROFILE_REQUESTED, GET_PROFILE_SUCCESS} from "../reducer/authReducer";
import {api} from "../api";

const storeName = 'profile'

export function getUserInfo() {
    return function (dispatch) {
        dispatch(getProfileRequest());
        api.get("users/profile")
            .then(response => {
                const data = response.data || response
                dispatch(getProfileSuccess(data))
            })
            .catch(error => {
                console.log(error)
                const message = error.responseJSON || error.responseText;
                dispatch(getProfileFail(message))
            })
    }
}

function getProfileRequest() {
    return {
        type: GET_PROFILE_REQUESTED,
        payload: {
            storeName: storeName
        }
    }
}

function getProfileSuccess(payload) {
    localStorage.setItem('authenticated', 'true')
    return {
        type: GET_PROFILE_SUCCESS,
        payload: {
            storeName: storeName,
            data: payload
        }
    }
}

function getProfileFail(payload) {
    localStorage.removeItem('authenticated')
    return {
        type: GET_PROFILE_FAIL,
        payload: {
            storeName: storeName,
            error: payload
        }
    }
}
