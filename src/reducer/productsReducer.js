export const GET_PRODUCTS_REQUESTED = "GET_PRODUCTS_REQUESTED";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

function productsReducer(state = {}, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUESTED: {
            return {
                ...state,
                products: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: {
                    loading: false,
                    data: action.payload.data,
                    error: null
                }
            }
        }
        case GET_PRODUCTS_FAIL: {
            return {
                ...state,
                products: {
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

export default productsReducer;
