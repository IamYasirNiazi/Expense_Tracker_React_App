import initialState from '../State'

export const expenseReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_RECORD':
            return  [
                ...state,
                state = [action.payload, ...state]
            ] 
            
        default:
            return state
    }

}







// import initialState from '../State'

// export const expenseReducer = (state = initialState, action)=>{
//     switch (action.type) {
//         case 'ADD_RECORD':
//             return  {
//                 ...state, 
//                     record: {
//                         year: {
//                             month:{
//                                 Jan: [
//                                     ...state, action.payload
//                                 ]
//                             }
//                         }
//                     } 
//             } 
            
//         default:
//             return state
//     }

// }