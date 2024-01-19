import axios from 'axios';

export default async (request, response) => {
  try {
    //Puxa o parametro da url
    const { ticket } = request.query;

    //Verifica se o parametro tem algum dado
    if (!ticket) {
      return response.status(400).json({ error: 'The "ticket" parameter is mandatory.' });
    }

    //URL da vercel ou localhost
    const URL = process.env.URL

    //Puxa a resposta
    const fundamentusResponse = await axios.get(`${URL}api/fundamentus/result`);
    const data = fundamentusResponse.data.data;

    //Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600')

    if (data && data[ticket]) {
      //Retorna a resposta
      return response.status(200).json({ data: data[ticket] });
    } else {
      //Trata possiveis erros
      return response.status(404).json({ error: 'ticket not found.' });
    }
  } catch (error) {
    //Trata possiveis erros
    response.status(500).json({ error: 'Internal Server Error' });
  }
};