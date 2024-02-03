import axios from 'axios';

export default async function handler(req, res) {
  const ticket = req.query.ticket;

  try {
    // URL do env
    const URL = process.env.URL;

    // Cache da Vercel
    res.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
    res.setHeader('CDN-Cache-Control', 'max-age=86400');
    res.setHeader('Cache-Control', 'max-age=86400');

    // Obter dados da API fundamentus
    const fundamentusResponse = await axios.get(`${URL}/api/fundamentus/${ticket}`);
    const fundamentusData = fundamentusResponse.data;

    // Obter dados da API quote
    const quoteResponse = await axios.get(`${URL}/api/quote/${ticket}`);
    const quoteData = quoteResponse.data;
    // Criar objeto combinado
    const combinedData = {
      empresa: fundamentusData.empresa,
      papel: fundamentusData.papel,
      logourl: quoteData.logourl,
      tipo: fundamentusData.tipo,
      setor: fundamentusData.setor,
      subsetor: fundamentusData.subsetor,
      cotacao: quoteData.price,
      data_ult_cot: fundamentusData.data_ult_cot,
      min_52_sem: fundamentusData.min_52_sem,
      max_52_sem: fundamentusData.max_52_sem,
      vol_med_2m: fundamentusData.vol_med_2m,
      valor_mercado: fundamentusData.valor_mercado,
      valor_firma: fundamentusData.valor_firma,
      ult_balanco_processado: fundamentusData.ult_balanco_processado,
      nro_acoes: fundamentusData.nro_acoes,
      pl: fundamentusData.pl,
      p_vp: fundamentusData.p_vp,
      p_ebit: fundamentusData.p_ebit,
      psr: fundamentusData.psr,
      p_ativos: fundamentusData.p_ativos,
      p_cap_giro: fundamentusData.p_cap_giro,
      p_ativ_circ_liq: fundamentusData.p_ativ_circ_liq,
      div_yield: fundamentusData.div_yield,
      div_yield_value_12_meses: fundamentusData.div_yield_value_12_meses,
      evebitda: fundamentusData.evebitda,
      evebit: fundamentusData.evebit,
      cres_rec_5a: fundamentusData.cres_rec_5a,
      lpa: fundamentusData.lpa,
      vpa: fundamentusData.vpa,
      marg_bruta: fundamentusData.marg_bruta,
      marg_ebit: fundamentusData.marg_ebit,
      marg_liquida: fundamentusData.marg_liquida,
      ebit_ativo: fundamentusData.ebit_ativo,
      roic: fundamentusData.roic,
      roe: fundamentusData.roe,
      liquidez_corr: fundamentusData.liquidez_corr,
      div_br_patrim: fundamentusData.div_br_patrim,
      giro_ativos: fundamentusData.giro_ativos,
      ativo: fundamentusData.ativo,
      disponibilidades: fundamentusData.disponibilidades,
      ativo_circulante: fundamentusData.ativo_circulante,
      div_bruta: fundamentusData.div_bruta,
      div_liquida: fundamentusData.div_liquida,
      patrim_liq: fundamentusData.patrim_liq,
      receita_liquida_12_meses: fundamentusData.receita_liquida_12_meses,
      ebit_12_meses: fundamentusData.ebit_12_meses,
      lucro_liquido_12_meses: fundamentusData.lucro_liquido_12_meses,
      receita_liquida_3_meses: fundamentusData.receita_liquida_3_meses,
      ebit_3_meses: fundamentusData.ebit_3_meses,
      lucro_liquido_3_meses: fundamentusData.lucro_liquido_3_meses,
      marketCap: quoteData.marketCap,
      longName: quoteData.longName,
      dayRange: quoteData.dayRange,
      twoHundredDayAverage: quoteData.twoHundredDayAverage,
      twoHundredDayAverageChange: quoteData.twoHundredDayAverageChange,
      twoHundredDayAverageChangePercent: quoteData.twoHundredDayAverageChangePercent,
      regularMarketChange: quoteData.regularMarketChange,
      regularMarketChangePercent: quoteData.regularMarketChangePercent,
      regularMarketTime: quoteData.regularMarketTime,
      regularMarketDayHigh: quoteData.regularMarketDayHigh,
      regularMarketDayLow: quoteData.regularMarketDayLow,
      regularMarketVolume: quoteData.regularMarketVolume,
      regularMarketPreviousClose: quoteData.regularMarketPreviousClose,
      regularMarketOpen: quoteData.regularMarketOpen,
      averageDailyVolume3Month: quoteData.averageDailyVolume3Month,
      averageDailyVolume10Day: quoteData.averageDailyVolume10Day,
      fiftyTwoWeekLowChange: quoteData.fiftyTwoWeekLowChange,
      fiftyTwoWeekLowChangePercent: quoteData.fiftyTwoWeekLowChangePercent,
      fiftyTwoWeekRange: quoteData.fiftyTwoWeekRange,
      fiftyTwoWeekHighChange: quoteData.fiftyTwoWeekHighChange,
      fiftyTwoWeekHighChangePercent: quoteData.fiftyTwoWeekHighChangePercent,
      fiftyTwoWeekLow: quoteData.fiftyTwoWeekLow,
      fiftyTwoWeekHigh: quoteData.fiftyTwoWeekHigh,
      priceEarnings: quoteData.priceEarnings,
      earningsPerShare: quoteData.earningsPerShare,
    };

    res.status(200).json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
}