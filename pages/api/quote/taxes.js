import axios from 'axios';

async function selic(request, response) {
  try {
    // Use o método GET para obter dados da API
    const axiosResponse = await axios.get(`https://api.hgbrasil.com/finance/taxes`, {
      params: {
        key: process.env.APIKEYHG, // Use a chave da API do arquivo .env
      }
    });

    // Extraia os campos desejados
    const {
      results,
      execution_time,
      from_cache,
    } = axiosResponse.data;

    // Simplifique os nomes dos campos
    const simplifiedData = {
      date: results[0].date,
      cdi: results[0].cdi,
      selic: results[0].selic,
      dailyFactor: results[0].daily_factor,
      selicDaily: results[0].selic_daily,
      cdiDaily: results[0].cdi_daily,
    };

    // Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600');

    // Responde com os dados simplificados em JSON
    return response.status(200).json(simplifiedData);
  } catch (error) {
    // Responde em caso de erro
    console.error(error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

export default selic;
