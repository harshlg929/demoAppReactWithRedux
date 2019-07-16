
import * as Actions from '../actions/actionType';


const initalState = {
    name: '',
    count: 0
};
const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case Actions.LOGIN:
            return {
                ...state,
                name: action.data,
                count: state.count + 1
            };
        case Actions.SIGNUP:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
export default Reducer;