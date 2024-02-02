import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

export default async function handler(req, res) {
  const { ticket } = req.query;

  // Cache da Vercel
  res.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
  res.setHeader('CDN-Cache-Control', 'max-age=21600');
  res.setHeader('Cache-Control', 'max-age=21600');

  //Evita do ticket estar vazio
  if (!ticket) {
    return res.status(400).json({ error: 'Ticket parameter is required' });
  }

  try {
    // Converte o ticket para maiúsculas e codifica para URL
    const encodedTicket = encodeURIComponent(ticket.toUpperCase());

    //Envia o request
    const response = await axios.get(`https://statusinvest.com.br/acoes/${encodedTicket}`, {
      responseType: 'arraybuffer',
      headers: {
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:122.0) Gecko/20100101 Firefox/122.0',
        'Accept': 'text/html, text/plain, text/css, text/sgml, */*;q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });

    //Usa o utf-8
    const html = iconv.decode(response.data, 'iso-8859-1');
    const $ = cheerio.load(html);

    //Puxa os dados
    const dividendYieldValue = $('.value').eq(3).text().trim();
    const dividendYield12mes = $('.sub-value').eq(3).text().trim();

    //Adiciona a porcentagem
    const dividendYieldValueWithPercentage = dividendYieldValue + '%';

    //Responde com um json
    res.status(200).json({
      dividendYield: {
        porcentage: dividendYieldValueWithPercentage,
        value12month: dividendYield12mes,
      },
    });

  } catch (error) {
    //Trata os erros
    console.error('Erro ao obter dados:', error);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
}
