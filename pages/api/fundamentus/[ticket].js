import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

export default async function handler(req, res) {
    let { ticket } = req.query;

    try {
        // Obtém a URL da API do ambiente
        let URL = process.env.URL;

        // Faz uma solicitação para obter a lista de ações disponíveis
        const { data: { data: stockList } } = await axios.get(`${URL}/api/fundamentus/available`);

        // Converte o ticket para maiúsculas
        ticket = ticket.toUpperCase();

        // Verifica se o ticket fornecido está na lista de ações disponíveis
        const isTicketAvailable = stockList.some(stock => stock.ticker === ticket);

        if (!isTicketAvailable) {
            return res.status(400).json({ error: `Ticket not found in the available list. Go to ${URL}/api/fundamentus/available` });
        }

        // Faz a requisição para obter os dados de dividendos da nova API
        const dividendResponse = await axios.get(`${URL}/api/fundamentus/dividend?ticket=${ticket}`);
        const dividendData = dividendResponse.data;

        const response = await axios.post(
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

        const decodedResponse = iconv.decode(Buffer.from(response.data), 'latin1');

        const $ = cheerio.load(decodedResponse, { decodeEntities: false });

        const removeNewLines = (str) => str.replace(/\n/g, '');

        const data = {
            papel: removeNewLines($('table:nth-child(2) tr:nth-child(1) td:nth-child(2)').text()),
            tipo: removeNewLines($('table:nth-child(2) tr:nth-child(2) td:nth-child(2)').text()),
            empresa: removeNewLines($('table:nth-child(2) tr:nth-child(3) td:nth-child(2)').text()),
            setor: removeNewLines($('table:nth-child(2) tr:nth-child(4) td:nth-child(2)').text()),
            subsetor: removeNewLines($('table:nth-child(2) tr:nth-child(5) td:nth-child(2)').text()),
            cotacao: removeNewLines($('table:nth-child(2) tr:nth-child(1) td:nth-child(4)').text()),
            data_ult_cot: removeNewLines($('table:nth-child(2) tr:nth-child(2) td:nth-child(4)').text()),
            min_52_sem: removeNewLines($('table:nth-child(2) tr:nth-child(3) td:nth-child(4)').text()),
            max_52_sem: removeNewLines($('table:nth-child(2) tr:nth-child(4) td:nth-child(4)').text()),
            vol_med_2m: removeNewLines($('table:nth-child(2) tr:nth-child(5) td:nth-child(4)').text()),
            valor_mercado: removeNewLines($('table:nth-child(3) tr:nth-child(1) td:nth-child(2)').text()),
            valor_firma: removeNewLines($('table:nth-child(3) tr:nth-child(2) td:nth-child(2)').text()),
            ult_balanco_processado: removeNewLines($('table:nth-child(3) tr:nth-child(1) td:nth-child(4)').text()),
            nro_acoes: removeNewLines($('table:nth-child(3) tr:nth-child(2) td:nth-child(4)').text()),
            pl: removeNewLines($('table:nth-child(4) tr:nth-child(2) td:nth-child(4)').text()),
            p_vp: removeNewLines($('table:nth-child(4) tr:nth-child(3) td:nth-child(4)').text()),
            p_ebit: removeNewLines($('table:nth-child(4) tr:nth-child(4) td:nth-child(4)').text()),
            psr: removeNewLines($('table:nth-child(4) tr:nth-child(5) td:nth-child(4)').text()),
            p_ativos: removeNewLines($('table:nth-child(4) tr:nth-child(6) td:nth-child(4)').text()),
            p_cap_giro: removeNewLines($('table:nth-child(4) tr:nth-child(7) td:nth-child(4)').text()),
            p_ativ_circ_liq: removeNewLines($('table:nth-child(4) tr:nth-child(8) td:nth-child(4)').text()),
            div_yield: dividendData.dividendYield.porcentage,
            div_yield_value_12_meses: dividendData.dividendYield.value12month,
            evebitda: removeNewLines($('table:nth-child(4) tr:nth-child(10) td:nth-child(4)').text()),
            evebit: removeNewLines($('table:nth-child(4) tr:nth-child(11) td:nth-child(4)').text()),
            cres_rec_5a: removeNewLines($('table:nth-child(4) tr:nth-child(12) td:nth-child(4)').text()),
            lpa: removeNewLines($('table:nth-child(4) tr:nth-child(2) td:nth-child(6)').text()),
            vpa: removeNewLines($('table:nth-child(4) tr:nth-child(3) td:nth-child(6)').text()),
            marg_bruta: removeNewLines($('table:nth-child(4) tr:nth-child(4) td:nth-child(6)').text()),
            marg_ebit: removeNewLines($('table:nth-child(4) tr:nth-child(5) td:nth-child(6)').text()),
            marg_liquida: removeNewLines($('table:nth-child(4) tr:nth-child(6) td:nth-child(6)').text()),
            ebit_ativo: removeNewLines($('table:nth-child(4) tr:nth-child(7) td:nth-child(6)').text()),
            roic: removeNewLines($('table:nth-child(4) tr:nth-child(8) td:nth-child(6)').text()),
            roe: removeNewLines($('table:nth-child(4) tr:nth-child(9) td:nth-child(6)').text()),
            liquidez_corr: removeNewLines($('table:nth-child(4) tr:nth-child(10) td:nth-child(6)').text()),
            div_br_patrim: removeNewLines($('table:nth-child(4) tr:nth-child(11) td:nth-child(6)').text()),
            giro_ativos: removeNewLines($('table:nth-child(4) tr:nth-child(12) td:nth-child(6)').text()),
            ativo: removeNewLines($('table:nth-child(5) tr:nth-child(2) td:nth-child(2)').text()),
            disponibilidades: removeNewLines($('table:nth-child(5) tr:nth-child(3) td:nth-child(2)').text()),
            ativo_circulante: removeNewLines($('table:nth-child(5) tr:nth-child(4) td:nth-child(2)')?.text()),
            div_bruta: removeNewLines($('table:nth-child(5) tr:nth-child(2) td:nth-child(4)').text()),
            div_liquida: removeNewLines($('table:nth-child(5) tr:nth-child(3) td:nth-child(4)').text()),
            patrim_liq: removeNewLines($('table:nth-child(5) tr:nth-child(4) td:nth-child(4)')?.text()),
            receita_liquida_12_meses: removeNewLines($('table:nth-child(6) tr:nth-child(3) td:nth-child(2)').text()),
            ebit_12_meses: removeNewLines($('table:nth-child(6) tr:nth-child(4) td:nth-child(2)').text()),
            lucro_liquido_12_meses: removeNewLines($('table:nth-child(6) tr:nth-child(5) td:nth-child(2)').text()),
            receita_liquida_3_meses: removeNewLines($('table:nth-child(6) tr:nth-child(3) td:nth-child(4)').text()),
            ebit_3_meses: removeNewLines($('table:nth-child(6) tr:nth-child(4) td:nth-child(4)').text()),
            lucro_liquido_3_meses: removeNewLines($('table:nth-child(6) tr:nth-child(5) td:nth-child(4)').text()),
        };

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).end(); // Erro interno do servidor
    }
}
