import axios from 'axios';

export default async function handler(request, response) {
    try {
        const apiKey = process.env.APIKEYCRYPTO;
        const coin = request.query.history;

        const cryptoResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart`, {
            params: {
                vs_currency: 'brl',
                days: `max`,
                x_cg_demo_api_key: apiKey
            },
        });

        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
        response.setHeader('CDN-Cache-Control', 'max-age=86400');
        response.setHeader('Cache-Control', 'max-age=86400');

        const data = cryptoResponse.data;
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ error: "Internal server error" });
    }
}
