import axios from 'axios';

export default async (req, res) => {
    try {
        const listResponse = await axios.get(`${process.env.URL}/api/fundamentus/list`);
        const { data: stockList } = listResponse.data;

        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter "query" is required' });
        }

        const filteredStocks = stockList.filter(ticker => ticker.includes(query.toUpperCase()));

        res.status(200).json({ data: filteredStocks });
    } catch (error) {
        console.error('Error searching stocks:', error);

        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            res.status(500).json({ error: 'No response from the server. Please try again.' });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
        }
    }
};
