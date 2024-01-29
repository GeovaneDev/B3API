import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

export default async function handler(req, res) {
  const { ticket } = req.query;

  try {
    const response = await axios.get(`https://statusinvest.com.br/acoes/${ticket}`, {
      responseType: 'arraybuffer',
      headers: {
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:122.0) Gecko/20100101 Firefox/122.0',
        'Accept': 'text/html, text/plain, text/css, text/sgml, */*;q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });

    const html = iconv.decode(response.data, 'iso-8859-1');
    const $ = cheerio.load(html);

    const dividendYieldValue = $('.value').eq(3).text().trim();
    const dividendYield12mes = $('.sub-value').eq(3).text().trim();

    const dividendYieldValueWithPercentage = dividendYieldValue + '%';

    res.status(200).json({
      dividendYield: {
        porcentage: dividendYieldValueWithPercentage,
        value12month: dividendYield12mes,
      },
    });

  } catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
}
