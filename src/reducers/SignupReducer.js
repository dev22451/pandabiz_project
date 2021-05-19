const SignupReducer = (state = { details: [] }, action) => {
    switch (action.type) {
        case "ADD_DETAILS":
            return { details: action.payload };

        default:
            return state;
    }
}

export default SignupReducer