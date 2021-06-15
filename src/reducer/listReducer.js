export const GET_ENTITY_LIST_REQUESTED = "GET_ENTITY_LIST_REQUESTED";
export const GET_ENTITY_LIST_SUCCESS = "GET_ENTITY_LIST_SUCCESS";
export const GET_ENTITY_LIST_FAIL = "GET_ENTITY_LIST_FAIL";

function listReducer(state = {}, action) {
    switch (action.type) {
        case GET_ENTITY_LIST_REQUESTED: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        }
        case GET_ENTITY_LIST_SUCCESS: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: false,
                    data: action.payload.data,
                    error: null
                }
            }
        }
        case GET_ENTITY_LIST_FAIL: {
            return {
                ...state,
                [action.payload.storeName]: {
                    loading: false,
                    data: [],
                    error: action.payload.error
                }
            }
        }
        default:
            return state;
    }
}

export default listReducer;
