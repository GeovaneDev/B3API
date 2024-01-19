import axios from 'axios';

export default async (req, res) => {
  try {
    //Puxa o parametro da url
    const { ticker } = req.query;

    //Verifica se o parametro tem algum dado
    if (!ticker) {
      return res.status(400).json({ error: 'The "ticker" parameter is mandatory.' });
    }

    //URL da vercel ou localhost
    const URL = process.env.URL

    //Puxa a resposta
    const response = await axios.get(`${URL}api/fundamentus/result`);
    const data = response.data.data;

    if (data && data[ticker]) {
      //Retorna a resposta
      return res.status(200).json({ data: data[ticker] });
    } else {
      //Trata possiveis erros
      return res.status(404).json({ error: 'Ticker not found.' });
    }
  } catch (error) {
    //Trata possiveis erros
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
