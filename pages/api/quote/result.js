import axios from 'axios';

export default async (request, response) => {
  try {
    // Faz uma solicitação para obter os dados de ações
    const { data } = await axios.post('https://brapi.dev/api/quote/list');

    //Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
    response.setHeader('CDN-Cache-Control', 'max-age=86400');
    response.setHeader('Cache-Control', 'max-age=86400');

    // Envie os dados extraídos como resposta
    response.status(200).json({ data });
  } catch (error) {
    // Trata possíveis erros
    response.status(500).json({ error: 'Internal Server Error' });
  }
};
