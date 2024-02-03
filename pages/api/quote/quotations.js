import axios from 'axios';

async function quotations(request, response) {
  try {
    // Envie a solicitação GET para a API
    const axiosResponse = await axios.get("https://api.hgbrasil.com/finance/quotations", {
      params: {
        key: process.env.APIKEYHG, // Use a chave da API do arquivo .env
      }
    });

    // Extraia os campos desejados
    const {
      results: {
        currencies,
        stocks,
        bitcoin,
      },
      execution_time,
      from_cache,
    } = axiosResponse.data;

    // Inclua o Euro na seção de moedas
    const simplifiedCurrencies = {
      ...currencies.USD,
      EUR: currencies.EUR,
    };

    // Simplifique os nomes dos campos
    const simplifiedData = {
      currencies: simplifiedCurrencies,
      stocks: {
        bovespa: stocks.IBOVESPA,
        ifix: stocks.IFIX,
        nasdaq: stocks.NASDAQ,
        dowJones: stocks.DOWJONES,
        cac: stocks.CAC,
        nikkei: stocks.NIKKEI,
      },
      bitcoin: {
        blockchainInfo: bitcoin.blockchain_info.last,
        coinbase: bitcoin.coinbase.last,
        bitstamp: bitcoin.bitstamp.last,
        foxbit: bitcoin.foxbit.last,
        mercadoBitcoin: bitcoin.mercadobitcoin.last,
      },
    };

    // Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
    response.setHeader('CDN-Cache-Control', 'max-age=86400');
    response.setHeader('Cache-Control', 'max-age=86400');

    // Retorna em JSON
    return response.json(simplifiedData);
  } catch (error) {
    // Responda em caso de erro
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}

export default quotations;
