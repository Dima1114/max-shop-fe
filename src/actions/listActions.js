import {GET_ENTITY_LIST_FAIL, GET_ENTITY_LIST_REQUESTED, GET_ENTITY_LIST_SUCCESS} from "../reducer/listReducer";
import {formRequestProps} from "../utils/formRequestProps";
import {publicApi} from "../api";

export function getEntityList(store, entities, params = {}) {
    return function (dispatch) {
        dispatch(getEntityListRequest(store));
        publicApi.get(entities + formRequestProps(params))
            .then(response => {
                const data = response.data || response
                dispatch(getEntityListSuccess(store, data))
            })
            .catch(error => {
                console.log(error)
                const message = error.responseJSON || error.responseText;
                dispatch(getEntityListFail(store, message))
            })
    }
}

function getEntityListRequest(storeName) {
    return {
        type: GET_ENTITY_LIST_REQUESTED,
        payload: {
            storeName: storeName
        }
    }
}

function getEntityListSuccess(storeName, payload) {
    return {
        type: GET_ENTITY_LIST_SUCCESS,
        payload: {
            storeName: storeName,
            data: payload
        }
    }
}

function getEntityListFail(storeName, payload) {
    return {
        type: GET_ENTITY_LIST_FAIL,
        payload: {
            storeName: storeName,
            error: payload
        }
    }
}
