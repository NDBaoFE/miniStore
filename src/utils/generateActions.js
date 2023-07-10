import capitalizeFirstLetter from "./capitalizeFirstLetter";

const generateActions = (initialState, startWith = "set") => {
    const keys = Object.keys(initialState);

    return keys.reduce((acc, key) => {
        const _key = startWith ? startWith + capitalizeFirstLetter(key) : key;
        return {
            ...acc,
            [_key]: (state, action) => {
                state[key] = action.payload;
            },
        };
    }, {});
};

export default generateActions;
