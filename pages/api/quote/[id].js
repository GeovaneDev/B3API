import axios from 'axios';

async function quote(request, response) {
  try {
    // Puxa a query da URL
    const { id } = request.query;

    // Verifica se a query está na URL
    if (!id) {
      return response.status(400).json({ error: 'ID is missing' });
    }

    // Obtém a lista de ações disponíveis
    const availableStocksUrl = `${process.env.URL}/api/quote/available`;
    const availableStocksResponse = await axios.get(availableStocksUrl);
    const availableStocks = availableStocksResponse.data.available;

    // Verifica se o ID é uma string e se a ação está na lista de ações disponíveis
    if (typeof id !== 'string' || !availableStocks.includes(id.toUpperCase())) {
      return response.status(400).json({
        error: 'Invalid input. Stock ID must be a string and should be in the available stocks list.',
      });
    }

    // Constroi a URL da API
    const url = `https://brapi.dev/api/quote/${id}`;

    // Envia a requesição em GET
    const axiosResponse = await axios.get(url, {
      params: {
        token: process.env.TOKEN, // Usa o token do arquivo .env
      },
    });

    // Extrai os campos desejados
    const {
      currency,
      marketCap,
      shortName: name,
      longName,
      regularMarketPrice: price,
      regularMarketDayRange: dayRange,
      symbol,
      ...restData
    } = axiosResponse.data.results[0];

    // Cria um objeto com os dados simplificados
    const simplifiedData = {
      currency,
      marketCap,
      name,
      longName,
      price,
      dayRange,
      symbol,
      ...restData,
    };

    // Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600');

    // Responde com os dados simplificados
    return response.status(200).json(simplifiedData);
  } catch (error) {
    // Responde com o erro
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}

export default quote;
