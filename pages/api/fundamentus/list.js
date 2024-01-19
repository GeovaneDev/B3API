import axios from 'axios';

export default async (req, res) => {
  try {
    //URL da vercel ou localhost
    const URL = process.env.VERCEL_URL || "http://localhost:3000";
    //Envia o request
    const response = await axios.get(`${URL}/api/fundamentus/result`);
    //Salva os dados
    const data = response.data.data;

    if (data) {
      //Separa somente os nomes
      const listaAtivos = Object.keys(data);
      //Retorna a lita em json
      return res.status(200).json({ data: listaAtivos });
    } else {
      //Trata possiveis erros
      return res.status(404).json({ error: 'Unable to retrieve the list of assets.' });
    }
  } catch (error) {
    //Trata possiveis erros
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
