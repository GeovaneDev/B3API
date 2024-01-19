import axios from 'axios';

async function quote(request, response) {
  //Puxa a query da url
  const { id } = request.query;
  //verifica se a query está na url
  if (!id) {
    return response.status(400).json({ error: 'ID is missing' });
  }
  //Constroi a url da api
  const url = `https://brapi.dev/api/quote/${id}`;

  try {
    //Envia a requesição em get
    const axiosResponse = await axios.get(url, {
      params: {
        token: process.env.TOKEN, //Usa o token do arquivo .env
      },
    });
    //Salva os dados
    const data = axiosResponse.data;
    //Salva o cache local e da vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600');
    //Responde com os dados
    return response.status(200).json(data);
  } catch (error) {
    //Responde com o erro
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}

export default quote;