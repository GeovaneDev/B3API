import axios from 'axios';

export default async (request, response) => {
  try {
    // URL dos dados
    const apiUrl = 'https://brapi.dev/api/quote/list?token=' + process.env.TOKEN;

    // Faz uma solicitação para obter os dados de ações
    const { data } = await axios.get(apiUrl);

    //Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600');

    // Envie os dados extraídos como resposta
    response.status(200).json({ data });
  } catch (error) {
    // Trata possíveis erros
    response.status(500).json({ error: 'Internal Server Error' });
  }
};
