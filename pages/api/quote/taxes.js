import axios from 'axios';

async function selic(request, response) {
  try {
    // Array de chaves da API
    const apiKeys = [
      process.env.APIKEYHG1,
      process.env.APIKEYHG2,
      process.env.APIKEYHG3,
      process.env.APIKEYHG4,
      process.env.APIKEYHG5,
      process.env.APIKEYHG6,
      process.env.APIKEYHG7,
    ];

    // Número máximo de tentativas permitidas
    const maxAttempts = 3;
    let attempts = 0;

    // Lógica para realizar até três tentativas em caso de resposta 403
    while (attempts < maxAttempts) {
      const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

      const axiosResponse = await axios.get(`https://api.hgbrasil.com/finance/taxes`, {
        params: {
          key: randomKey,
        }
      });

      const { results, execution_time, from_cache } = axiosResponse.data;

      // Verifica se a resposta é 403 (Forbidden)
      if (axiosResponse.status === 403) {
        attempts++;

        // Pausa por um curto período antes de tentar novamente
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // Se a resposta não for 403, saia do loop e processe os dados
        const simplifiedData = {
          date: results[0].date,
          cdi: results[0].cdi,
          selic: results[0].selic,
          dailyFactor: results[0].daily_factor,
          selicDaily: results[0].selic_daily,
          cdiDaily: results[0].cdi_daily,
        };

        // Cabeçalhos de cache para Vercel
        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=172800');
        response.setHeader('CDN-Cache-Control', 'max-age=172800');
        response.setHeader('Cache-Control', 'max-age=172800');

        // Responde com os dados simplificados em JSON
        return response.status(200).json(simplifiedData);
      }
    }

    // Se atingir o limite de tentativas, responda com erro 403
    return response.status(403).json({ error: "Maximum number of attempts reached" });
  } catch (error) {
    // Responde em caso de erro
    console.error(error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

export default selic;
