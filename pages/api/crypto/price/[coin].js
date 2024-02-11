import axios from 'axios';

export default async function handler(request, response) {
  try {
    let { coin } = request.query;
    const apiKey = process.env.APIKEYCRYPTO;

    if (typeof coin !== 'string') {
      throw new Error('Coin parameter must be a string');
    }

    coin = coin.toLowerCase();

    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
      params: {
        ids: `${coin}`,
        vs_currencies: "brl",
        x_cg_demo_api_key: apiKey
      },
    });

    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
    response.setHeader('CDN-Cache-Control', 'max-age=86400');
    response.setHeader('Cache-Control', 'max-age=86400');

    const data = response.data;
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}