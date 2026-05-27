import { createStore } from 'redux'

// 1)Store
// 2)Actions Reducers
// 3)Dispatches
let initialState={
    sum:100
}

function reducer(state=initialState,Actions){
    switch(Actions.type){
        case "a":
            return {...state,
                sum:state.sum+1
            }
            case "b":
                return {
                    ...state,
                    sum:state.sum-1
                }
                default:
                    return state
    }
}
export let store=createStore(reducer)
// console.log(store)