export const GET_IMAGE_REQUESTED = "GET_IMAGE_REQUESTED";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAIL = "GET_IMAGE_FAIL";

function imageReducer(state = {}, action) {
    switch (action.type) {
        case GET_IMAGE_REQUESTED: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        }
        case GET_IMAGE_SUCCESS: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: false,
                    data: action.payload.data,
                    error: null
                }
            }
        }
        case GET_IMAGE_FAIL: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: false,
                    data: null,
                    error: action.payload.error
                }
            }
        }
        default:
            return state;
    }
}

export default imageReducer;
