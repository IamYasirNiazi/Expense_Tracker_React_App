
export const addRecord = (details)=>{
    console.log(details)
    return {
        type: 'ADD_RECORD',
        payload: details
    }
}

export default addRecord