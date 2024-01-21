import axios from 'axios';
import cheerio from 'cheerio';

export default async (request, response) => {
  try {
    //Url dos dados
    const url = 'http://www.fundamentus.com.br/resultado.php';

    //Dados retirados do site
    const data = {
      pl_min: '',
      pl_max: '',
      pvp_min: '',
      pvp_max: '',
      psr_min: '',
      psr_max: '',
      divy_min: '',
      divy_max: '', 
      pativos_min: '',
      pativos_max: '',
      pcapgiro_min: '',
      pcapgiro_max: '',
      pebit_min: '',
      pebit_max: '',
      fgrah_min: '',
      fgrah_max: '',
      firma_ebit_min: '',
      firma_ebit_max: '',
      margemebit_min: '',
      margemebit_max: '',
      margemliq_min: '',
      margemliq_max: '',
      liqcorr_min: '',
      liqcorr_max: '',
      roic_min: '',
      roic_max: '',
      roe_min: '',
      roe_max: '',
      liq_min: '',
      liq_max: '',
      patrim_min: '',
      patrim_max: '',
      divbruta_min: '',
      divbruta_max: '',
      tx_cresc_rec_min: '',
      tx_cresc_rec_max: '',
      setor: '',
      negociada: 'ON',
      ordem: '1',
      x: '28',
      y: '16'
    };

    //Puxa os dados
    const { data: content } = await axios.post(url, new URLSearchParams(data), {
      headers: {
        'User-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201',
        'Accept': 'text/html, text/plain, text/css, text/sgml, */*;q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });

    // Parsing HTML usando cheerio
    const $ = cheerio.load(content);

    // Extrair dados da tabela
    const result = {};
    $('table#resultado tbody tr').each((index, element) => {
      const columns = $(element).find('td');
      const key = $(columns[0]).text().trim();
      const value = {
        Cotacao: $(columns[1]).text(),
        'P/L': $(columns[2]).text(),
        'P/VP': $(columns[3]).text(),
        'PSR': $(columns[4]).text(),
        'DY': $(columns[5]).text(),
        'P/Ativo': $(columns[6]).text(),
        'P/Cap.Giro': $(columns[7]).text(),
        'P/EBIT': $(columns[8]).text(),
        'P/ACL': $(columns[9]).text(),
        'EV/EBIT': $(columns[10]).text(),
        'EV/EBITDA': $(columns[11]).text(),
        'Mrg.Ebit': $(columns[12]).text(),
        'Mrg.Liq.': $(columns[13]).text(),
        'Liq.Corr.': $(columns[14]).text(),
        'ROIC': $(columns[15]).text(),
        'ROE': $(columns[16]).text(),
        'Liq.2meses': $(columns[17]).text(),
        'Pat.Liq': $(columns[18]).text(),
        'Div.Brut/Pat.': $(columns[19]).text(),
        'Cresc.5anos': $(columns[20]).text(),
        'Div.Yield': $(columns[5]).text(),
        'Ativo Circulante': $(columns[18]).text(),
      };
      result[key] = value;
    });

    //Cache da Vercel
    response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
    response.setHeader('CDN-Cache-Control', 'max-age=21600');
    response.setHeader('Cache-Control', 'max-age=21600')

    // Envie os dados extraídos como resposta
    response.status(200).json({ data: result });
  } catch (error) {
    //Trata possiveis erros
    response.status(500).json({ error: 'Internal Server Error' });
  }
};
