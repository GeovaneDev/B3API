import axios from 'axios';

export default async (request, response) => {
  try {
    let URL;

    if (process.env.ENV === 'production') {
      // URL da produção no Vercel ou localhost com https
      URL = `${process.env.URL}`;
    } else {
      // URL de desenvolvimento localhost com http
      URL = 'http://localhost:3000';
    }
    //Envia o request
    const listResponse = await axios.get(`${URL}/api/fundamentus/result`);
    //Salva os dados
    const data = listResponse.data.data;

    //Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600')

    if (data) {
      //Separa somente os nomes
      const listaAtivos = Object.keys(data);
      //Retorna a lita em json
      return response.status(200).json({ data: listaAtivos });
    } else {
      //Trata possiveis erros
      return response.status(404).json({ error: 'Unable to retrieve the list of assets.' });
    }
  } catch (error) {
    //Trata possiveis erros
    console.error(error)
    response.status(500).json({ error: `Internal Server Error` });
  }
};
