import axios from 'axios';

export default async (req, res) => {
  try {
    // Obter dados de /api/quote/taxes
    const quoteResponse = await axios.get('https://www.brinvestapi.me/api/quote/taxes');
    const cdiRateAnual = quoteResponse.data.results[0].cdi_daily;

    // Obter parâmetros da requisição
    const { valor, tempo, porcentagemCdi } = req.query;

    // Validar parâmetros
    if (!valor || !tempo || !porcentagemCdi) {
      return res.status(400).json({ error: 'Parâmetros inválidos. Certifique-se de fornecer valor, tempo e porcentagemCdi.' });
    }

    // Calcular o valor do CDB conforme a fórmula correta
    const valorInicial = parseFloat(valor);
    const tempoMeses = parseInt(tempo);
    const porcentagemCdiDecimal = parseFloat(porcentagemCdi) / 100; // Converter porcentagem para decimal

    // Ajustar a taxa CDI anual para um formato mensal
    const taxaCdiMensal = Math.pow(1 + cdiRateAnual / 100, 1 / 12) - 1;

    // Calcular apenas o rendimento, sem incluir o capital
    const rendimento = valorInicial * (Math.pow(1 + taxaCdiMensal * porcentagemCdiDecimal, tempoMeses) - 1);

    // Calcular o imposto de renda sobre os rendimentos
    let taxaIr;
    if (tempoMeses <= 180) {
      taxaIr = 0.225;
    } else if (tempoMeses <= 360) {
      taxaIr = 0.2;
    } else if (tempoMeses <= 720) {
      taxaIr = 0.175;
    } else {
      taxaIr = 0.15;
    }

    // Calcular o valor total (capital + juro com desconto de imposto de renda)
    const valorTotal = valorInicial + rendimento * (1 - taxaIr);

    // Responder com o valor total do CDB calculado
    res.status(200).json({ valorCdb: valorTotal.toFixed(2) });
  } catch (error) {
    console.error('Erro ao calcular valor total do CDB:', error);

    // Verificar o tipo de erro e responder adequadamente
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      res.status(500).json({ error: 'Sem resposta do servidor. Tente novamente.' });
    } else {
      res.status(500).json({ error: 'Ocorreu um erro inesperado. Tente novamente.' });
    }
  }
};
