import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

export default async function handler(request, response) {
    let { ticket } = request.query;

    try {
        const { data: { data: stockList } } = await axios.get(`${process.env.URL}/api/fundamentus/available`);

        if (typeof ticket !== 'string') {
            return response.status(400).json({ error: 'Invalid input. Ticket must be a string.' });
        }

        ticket = ticket.toUpperCase();

        const isTicketAvailable = stockList.some(stock => stock.ticker === ticket);

        if (!isTicketAvailable) {
            return response.status(400).json({ error: `Ticket not found in the available list. Go to ${process.env.URL}/api/fundamentus/available` });
        }

        const cacheControlHeader = 'max-age=86400';
        response.setHeader('Vercel-CDN-Cache-Control', cacheControlHeader);
        response.setHeader('CDN-Cache-Control', cacheControlHeader);
        response.setHeader('Cache-Control', cacheControlHeader);

        response.status(200).json(data);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
}
