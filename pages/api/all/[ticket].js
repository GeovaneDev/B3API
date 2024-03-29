import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

export default async function handler(request, response) {
    let { ticket } = request.query;

    try {
        const { data: { data: stockList } } = await axios.get(`${process.env.URL}/api/fundamentus/available`);

        if (typeof ticket !== 'string') {
            return response.status(400).json({ error: 'Invalid input. Ticket must be a string.' });
        }

        ticket = ticket.toUpperCase();

        const isTicketAvailable = stockList.some(stock => stock.ticker === ticket);

        if (!isTicketAvailable) {
            return response.status(400).json({ error: `Ticket not found in the available list. Go to ${process.env.URL}/api/fundamentus/available` });
        }

        const responseAxios = await axios.post(
            `https://www.fundamentus.com.br/detalhes.php?papel=${ticket}`,
            {},
            {
                responseType: 'arraybuffer',
                headers: {
                    'User-agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201',
                    'Accept': 'text/html, text/plain, text/css, text/sgml, */*;q=0.01',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            }
        );

        const decodedResponse = iconv.decode(Buffer.from(responseAxios.data), 'latin1');

        const $ = cheerio.load(decodedResponse, { decodeEntities: false });

        const getValue = (selector) => {
            const value = $(selector).text().replace(/\n/g, '');
            return value ? value.trim() : null;
        };

        const data = {
            papel: getValue('table:nth-child(2) tr:nth-child(1) td:nth-child(2)'),
            tipo: getValue('table:nth-child(2) tr:nth-child(2) td:nth-child(2)'),
            empresa: getValue('table:nth-child(2) tr:nth-child(3) td:nth-child(2)'),
            setor: getValue('table:nth-child(2) tr:nth-child(4) td:nth-child(2)'),
            subsetor: getValue('table:nth-child(2) tr:nth-child(5) td:nth-child(2)'),
            cotacao: getValue('table:nth-child(2) tr:nth-child(1) td:nth-child(4)'),
            data_ult_cot: getValue('table:nth-child(2) tr:nth-child(2) td:nth-child(4)'),
            min_52_sem: getValue('table:nth-child(2) tr:nth-child(3) td:nth-child(4)'),
            max_52_sem: getValue('table:nth-child(2) tr:nth-child(4) td:nth-child(4)'),
            vol_med_2m: getValue('table:nth-child(2) tr:nth-child(5) td:nth-child(4)'),
            valor_mercado: getValue('table:nth-child(3) tr:nth-child(1) td:nth-child(2)'),
            valor_firma: getValue('table:nth-child(3) tr:nth-child(2) td:nth-child(2)'),
            ult_balanco_processado: getValue('table:nth-child(3) tr:nth-child(1) td:nth-child(4)'),
            nro_acoes: getValue('table:nth-child(3) tr:nth-child(2) td:nth-child(4)'),
            pl: getValue('table:nth-child(4) tr:nth-child(2) td:nth-child(4)'),
            p_vp: getValue('table:nth-child(4) tr:nth-child(3) td:nth-child(4)'),
            p_ebit: getValue('table:nth-child(4) tr:nth-child(4) td:nth-child(4)'),
            psr: getValue('table:nth-child(4) tr:nth-child(5) td:nth-child(4)'),
            p_ativos: getValue('table:nth-child(4) tr:nth-child(6) td:nth-child(4)'),
            p_cap_giro: getValue('table:nth-child(4) tr:nth-child(7) td:nth-child(4)'),
            p_ativ_circ_liq: getValue('table:nth-child(4) tr:nth-child(8) td:nth-child(4)'),
            evebitda: getValue('table:nth-child(4) tr:nth-child(10) td:nth-child(4)'),
            evebit: getValue('table:nth-child(4) tr:nth-child(11) td:nth-child(4)'),
            cres_rec_5a: getValue('table:nth-child(4) tr:nth-child(12) td:nth-child(4)'),
            lpa: getValue('table:nth-child(4) tr:nth-child(2) td:nth-child(6)'),
            vpa: getValue('table:nth-child(4) tr:nth-child(3) td:nth-child(6)'),
            marg_bruta: getValue('table:nth-child(4) tr:nth-child(4) td:nth-child(6)'),
            marg_ebit: getValue('table:nth-child(4) tr:nth-child(5) td:nth-child(6)'),
            marg_liquida: getValue('table:nth-child(4) tr:nth-child(6) td:nth-child(6)'),
            ebit_ativo: getValue('table:nth-child(4) tr:nth-child(7) td:nth-child(6)'),
            roic: getValue('table:nth-child(4) tr:nth-child(8) td:nth-child(6)'),
            roe: getValue('table:nth-child(4) tr:nth-child(9) td:nth-child(6)'),
            liquidez_corr: getValue('table:nth-child(4) tr:nth-child(10) td:nth-child(6)'),
            div_br_patrim: getValue('table:nth-child(4) tr:nth-child(11) td:nth-child(6)'),
            giro_ativos: getValue('table:nth-child(4) tr:nth-child(12) td:nth-child(6)'),
            ativo: getValue('table:nth-child(5) tr:nth-child(2) td:nth-child(2)'),
            disponibilidades: getValue('table:nth-child(5) tr:nth-child(3) td:nth-child(2)'),
            ativo_circulante: getValue('table:nth-child(5) tr:nth-child(4) td:nth-child(2)'),
            div_bruta: getValue('table:nth-child(5) tr:nth-child(2) td:nth-child(4)'),
            div_liquida: getValue('table:nth-child(5) tr:nth-child(3) td:nth-child(4)'),
            patrim_liq: getValue('table:nth-child(5) tr:nth-child(4) td:nth-child(4)'),
            receita_liquida_12_meses: getValue('table:nth-child(6) tr:nth-child(3) td:nth-child(2)'),
            ebit_12_meses: getValue('table:nth-child(6) tr:nth-child(4) td:nth-child(2)'),
            lucro_liquido_12_meses: getValue('table:nth-child(6) tr:nth-child(5) td:nth-child(2)'),
            receita_liquida_3_meses: getValue('table:nth-child(6) tr:nth-child(3) td:nth-child(4)'),
            ebit_3_meses: getValue('table:nth-child(6) tr:nth-child(4) td:nth-child(4)'),
            lucro_liquido_3_meses: getValue('table:nth-child(6) tr:nth-child(5) td:nth-child(4)'),
        };

        const cacheControlHeader = 'max-age=86400';
        response.setHeader('Vercel-CDN-Cache-Control', cacheControlHeader);
        response.setHeader('CDN-Cache-Control', cacheControlHeader);
        response.setHeader('Cache-Control', cacheControlHeader);

        response.status(200).json(data);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
}
