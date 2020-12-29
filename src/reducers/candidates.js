const stateInit = {
    candidates: [
        { choice_1: "Alan", choice_2: "Juliette" },
        { choice_1: "Phi", choice_2: "Bernard" },
        { choice_1: "Lisa", choice_2: "Elise" },
        { choice_1: "Cecilia", choice_2: "Alice" },
    ],
    choices: [],
    count: 0,
    message: "",
};

const reducer = (state = stateInit, action) => {
    switch(action.type) {
        case "ADD_CHOICES":
            return {
                ...state,
                choices: state.choices.concat(action.choice),
                count: state.count + 1,
                message: "",
            };
        
        case "REBOOT_CHOICES":
            return {
                ...state,
                choices: [],
                count: 0,
                message: "",
            }

        default:
            return state;
    }
}

export default reducer;