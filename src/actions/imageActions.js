import {GET_IMAGE_FAIL, GET_IMAGE_REQUESTED, GET_IMAGE_SUCCESS} from "../reducer/imageReducer";
import {formRequestProps} from "../utils/formRequestProps";
import {publicApi} from "../api";

export function getImage(path, id, params = {}) {
    return function (dispatch) {
        dispatch(getImageRequest(id));
        publicApi.get('images/' + path + '/' + id + formRequestProps(params), {responseType: 'arraybuffer'})
            .then(response => {
                const type = response.headers['content-type']
                const base64 = btoa(
                    new Uint8Array(response.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '',));
                dispatch(getImageSuccess(id, `data:${type};base64,${base64}`))
            })
            .catch(error => {
                console.log(error)
                const message = error.responseJSON || error.responseText;
                dispatch(getImageFail(id, message))
            })
    }
}

function getImageRequest(storeName) {
    return {
        type: GET_IMAGE_REQUESTED,
        payload: {
            storeName: storeName
        }
    }
}

function getImageSuccess(storeName, payload) {
    return {
        type: GET_IMAGE_SUCCESS,
        payload: {
            storeName: storeName,
            data: payload
        }
    }
}

function getImageFail(storeName, payload) {
    return {
        type: GET_IMAGE_FAIL,
        payload: {
            storeName: storeName,
            error: payload
        }
    }
}
