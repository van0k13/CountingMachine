const ADD_NUMBER = 'ADD_NUMBER';
const RESET_NUMBER = 'RESET_NUMBER';
const MAX_VALUE_CHANGE = 'MAX_VALUE_CHANGE'
const START_VALUE_CHANGE = 'START_VALUE_CHANGE'
const SET_VALUE = 'SET_VALUE'



const initialState = {
    displayingNumber: Number(0),
    displayingNumberMax: false,
    startValue: Number(0),
    maxValue: Number(2),
    wrongValue: false,

    controllers: [
        { id: 1, name: 'INC', isDisabled: true },
        { id: 2, name: 'RESET', isDisabled: true },
        { id: 3, name: 'SET', isDisabled: false }
    ],
};


const reducer = (state = initialState, action) => {
    console.log(state.displayingNumber)
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                displayingNumberMax: state.displayingNumber === action.value,
                displayingNumber: Number(state.displayingNumber < state.maxValue)
                    ? state.displayingNumber + 1 : state.displayingNumber
                
            };
        case RESET_NUMBER:
            return {
                ...state, displayingNumber: 0, displayingNumberMax: false
            };
        case MAX_VALUE_CHANGE:
            return {
                ...state, maxValue: action.value,
                wrongValue: state.maxValue <= state.startValue,
                controllers: [...state.controllers.map( c => {
                    switch (c.name) {
                        case "INC":
                            return {...c, isDisabled: true};
                        case "RESET":
                            return{...c, isDisabled: true};
                        case "SET":
                            return{...c, isDisabled: false};
                        default:
                            return c;
                    }
                } 
                )]
            };
        case START_VALUE_CHANGE:
            return {
                ...state, startValue: action.value,
                wrongValue: state.startValue >= state.maxValue,
                controllers: [...state.controllers.map( c => {
                    switch (c.name) {
                        case "INC":
                            return {...c, isDisabled: true};
                        case "RESET":
                            return{...c, isDisabled: true};
                        case "SET":
                            return{...c, isDisabled: false};
                        default:
                            return c;
                    }
                } 
                )]
            };
        case SET_VALUE:
            return {
                ...state, controllers: [...state.controllers.map( c => {
                    switch (c.name) {
                        case "INC":
                            return {...c, isDisabled: false};
                        case "RESET":
                            return{...c, isDisabled: false};
                        case "SET":
                            return{...c, isDisabled: true};
                        default:
                            return c;
                    }
                })], displayingNumber: Number(state.startValue)
            }
        default:
            return state;
    }
}

export const addNumber = (value) => ({ type: ADD_NUMBER, value })
export const resetNumber = () => ({ type: RESET_NUMBER })
export const maxValueChange = (value) => ({ type: MAX_VALUE_CHANGE, value })
export const startValueChange = (value) => ({ type: START_VALUE_CHANGE, value })
export const setValue = () => ({type: SET_VALUE})

export default reducer;