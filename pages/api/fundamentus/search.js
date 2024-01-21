import axios from 'axios';

export default async (req, res) => {
    try {
        let URL;

        if (process.env.ENV === 'production') {
            // URL da produção no Vercel ou localhost com https
            URL = `https://${process.env.URL}`;
        } else {
            // URL de desenvolvimento localhost com http
            URL = 'http://localhost:3000';
        }

        const { data: { data: stockList } } = await axios.get(`${URL}/api/fundamentus/available`);
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter "query" is required' });
        }

        const queryUpperCase = query.toUpperCase();

        const stockIndex = stockList.reduce((index, ticker) => {
            index[ticker] = true;
            return index;
        }, {});

        const filteredStocks = stockList.filter(ticker => ticker.includes(queryUpperCase) && stockIndex[ticker]);

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
