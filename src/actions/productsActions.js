import {GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUESTED, GET_PRODUCTS_SUCCESS} from "../reducer/productsReducer";
import {formRequestProps} from "../utils/formRequestProps";
import $ from 'jquery'


export function getEntityList(store, entities, params = {}) {
    return function (dispatch) {
        dispatch(getEntityListRequest(store));
        $.ajax({
            type: 'GET',
            url: 'https://max-shop.free.beeceptor.com/' + entities + formRequestProps(params),
            contentType: 'application/json',
        }).then(response => {
            console.log(response)
            dispatch(getEntityListSuccess(store, response))
        }).catch(error => {
            console.log(error)
            const message = error.responseJSON || error.responseText;
            dispatch(getEntityListFail(store, message))
        })
    }
}

function getEntityListRequest(storeName) {
    return {
        type: GET_PRODUCTS_REQUESTED,
        payload: {
            storeName: storeName
        }
    }
}

function getEntityListSuccess(storeName, payload) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: {
            storeName: storeName,
            data: payload
        }
    }
}

function getEntityListFail(storeName, payload) {
    return {
        type: GET_PRODUCTS_FAIL,
        payload: {
            storeName: storeName,
            error: payload
        }
    }
}
