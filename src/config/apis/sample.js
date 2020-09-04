import axios from 'axios';
import getEndpoints from '../endpoints';

const sampleAPI = {
    getAllSampleData: async () => {
        const endpoint = getEndpoints().sample.getSampleData;
        const response = await axios.get(endpoint);
        return response;
    },
};

export default sampleAPI;
