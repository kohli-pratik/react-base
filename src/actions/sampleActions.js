import Constants from '../utils/constants';

const sampleActions = {
    sampleAction1: (newData) => ({
        type: Constants.actions.SAMPLE_ACTION,
        data: newData,
    }),
};

export default sampleActions;
