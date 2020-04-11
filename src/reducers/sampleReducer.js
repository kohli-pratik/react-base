import Constants from '../utils/constants';

const initialState = [];

export default function handleSample1Data(state = initialState, action) {
    switch (action.type) {
        case Constants.actions.SAMPLE_ACTION: {
            return action.data;
        }
        default:
            return state;
    }
}
