const express = require('express');
const { fetchAPI, parseAPI } = require('../services/apiAnalysis');

// Declaring 3 routers for API's that I want to fetch data from 

const clinicalTrialsGovRouter = express.Router();

// Declaring the rest later ... 


// Defining a get route at "studies", req = request obj (contains query params), res = response obj 
clinicalTrialsGovRouter.get('/studies', async (req, res) => {
    try {
        // Declare a url and fetch data from it
        const url = 'https://clinicaltrials.gov/data-api/api#extapi'; 
        const apiData = await fetchAPI(url);

        // Parse the data 
        const parsedData = parseAPI(apiData, 'protocolSection'); // Extract 'name' field    
        res.json({ parsedData });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = clinicalTrialsGovRouter;
