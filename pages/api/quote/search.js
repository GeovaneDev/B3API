import axios from 'axios';

export default async (req, res) => {
    try {
        let URL;

        if (process.env.ENV === 'production') {
            // URL da produção no Vercel ou localhost com https
            URL = `${process.env.URL}`;
        } else {
            // URL de desenvolvimento localhost com http
            URL = 'http://localhost:3000';
        }

        res.setHeader('Cache-Control', 'max-age=3600');
        const { data: availableData } = await axios.get(`${URL}/api/quote/available`);
        const data = availableData;
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter "query" is required' });
        }

        const queryUpperCase = query.toUpperCase();
        const filteredData = {
            indexes: data.indexes.filter(index => index.includes(queryUpperCase)),
            stocks: data.stocks.filter(stock => stock.includes(queryUpperCase)),
        };

        res.status(200).json({ data: filteredData });
    } catch (error) {
        console.error('Error searching data:', error);

        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            res.status(500).json({ error: 'No response from the server. Please try again.' });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
        }
    }
};
