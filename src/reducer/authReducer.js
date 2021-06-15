export const GET_PROFILE_REQUESTED = "GET_PROFILE_REQUESTED";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case GET_PROFILE_REQUESTED: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        }
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: false,
                    data: action.payload.data,
                    error: null
                }
            }
        }
        case GET_PROFILE_FAIL: {
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
