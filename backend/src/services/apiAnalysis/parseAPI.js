const axios = require('axios');

// Function to fetch data from an API
const fetchAPI = async (url, params = {}) => {
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching API data: ${error.message}`);
        throw error;
    }
};

module.exports = fetchAPI;
