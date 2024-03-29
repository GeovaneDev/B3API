import axios from 'axios';

export default async function handler(request, response) {
    try {
        const cryptoResponse = await axios.get(`https://blockchain.info/unconfirmed-transactions?format=json`);

        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
        response.setHeader('CDN-Cache-Control', 'max-age=86400');
        response.setHeader('Cache-Control', 'max-age=86400');

        const data = cryptoResponse.data;
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ error: "Internal server error" });
    }
}
