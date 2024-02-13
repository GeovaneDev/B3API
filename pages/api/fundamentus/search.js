import axios from 'axios';

// Função que trata a requisição para buscar ações com base em uma consulta
export default async (request, response) => {
    try {
        // Faz solicitações em paralelo para obter a lista de ações disponíveis e a consulta da requisição
        const [availableStocksResponse, { query }] = await Promise.all([
            axios.get(`${process.env.URL}/api/fundamentus/available`),
            request.query
        ]);

        const stockList = availableStocksResponse.data.data;

        // Verifica se a consulta está presente
        if (!query) {
            return response.status(400).json({ error: 'Query parameter "query" is required' });
        }

        // Converte a consulta para maiúsculas para garantir correspondência insensível a maiúsculas e minúsculas
        const queryUpperCase = query.toUpperCase();

        // Cria um índice de ações para otimizar a filtragem
        const stockIndex = {};
        for (const stock of stockList) {
            stockIndex[stock.ticker] = true;
        }

        // Filtra as ações com base na consulta e no índice
        const filteredStocks = stockList.filter(stock => 
            (stock.ticker.includes(queryUpperCase) || stock.name.toUpperCase().includes(queryUpperCase)) && stockIndex[stock.ticker]
        );

        // Cache da Vercel
        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
        response.setHeader('CDN-Cache-Control', 'max-age=86400');
        response.setHeader('Cache-Control', 'max-age=86400');

        // Responde com as ações filtradas
        response.status(200).json({ data: filteredStocks });
    } catch (error) {
        // Trata erros durante a execução da função
        console.error('Error searching stocks:', error);

        // Verifica o tipo de erro e responde adequadamente
        if (error.response) {
            response.status(error.response.status).json({ error: "Internal server error" });
        } else if (error.request) {
            response.status(500).json({ error: 'No response from the server. Please try again.' });
        } else {
            response.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
        }
    }
};
