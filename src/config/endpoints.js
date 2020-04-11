export default function getEndpoints() {
    const baseUrl = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : '';

    const endpoints = {
        sample: {
            getSampleData: `${baseUrl}/sampleData`,
        },
    };

    return endpoints;
}
