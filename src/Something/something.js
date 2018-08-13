const something = () => (
    (dispatch, getStore) => {
        console.log("Dispatch is: ", dispatch({type:"SOMETHING_ELSE", payload: "hellobobbb"}))
        console.log("Getstore is: ", getStore())
    }
)

export default something;