export const initialState = {
    basket:[],
    user:null
}

export const getTotal = (basket) => {
    
    let total = basket.reduce((prev,cur) => {
        return prev + cur.price
    },0)
    
    return total;
}

export const reducer = (state,action) => {
    switch(action.type) {
        
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.value]
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket:action.value
            };
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }
        default:
            return state;
    }
}