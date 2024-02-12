import axios from 'axios';

export default async function handler(request, response) {
    try {
        const { wallet } = request.query;

        if (typeof wallet !== 'string') {
            throw new Error('Wallet parameter must be a string');
          }

        const cryptoResponse = await axios.get(`https://blockchain.info/rawaddr/${wallet}`);

        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
        response.setHeader('CDN-Cache-Control', 'max-age=86400');
        response.setHeader('Cache-Control', 'max-age=86400');

        const data = cryptoResponse.data;
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}
