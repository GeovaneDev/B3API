import axios from 'axios';

export default async (request, response) => {
    try {
        // Obtém a URL da API do ambiente
        const apiUrl = `${process.env.URL}/api/quote/result`;

        // Faz solicitações em paralelo para obter todos os dados disponíveis e a consulta da requisição
        const [allDataResponse, { query }] = await Promise.all([
            axios.get(apiUrl),
            request.query
        ]);

        const allData = allDataResponse.data.data;

        // Verifica se a consulta está presente
        if (!query) {
            return response.status(400).json({ error: 'Query parameter "query" is required' });
        }

        // Converte a consulta para maiúsculas para garantir correspondência insensível a maiúsculas e minúsculas
        const queryUpperCase = query.toUpperCase();

        // Filtra os dados com base na consulta
        const filteredData = {
            stocks: allData.stocks.filter(stock => stock.stock.includes(queryUpperCase) || stock.name.includes(query)),
            indexes: allData.indexes.filter(index => index.stock.includes(queryUpperCase) || index.name.includes(query)),
        };

        // Define o cabeçalho de controle de cache
        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=86400');
        response.setHeader('CDN-Cache-Control', 'max-age=86400');
        response.setHeader('Cache-Control', 'max-age=86400');

        // Responde com os dados filtrados
        response.status(200).json({ data: filteredData });
    } catch (error) {
        // Trata erros durante a execução da função
        console.error('Error searching data:', error);

        // Verifica o tipo de erro e responde adequadamente
        if (error.response) {
            response.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            response.status(500).json({ error: 'No response from the server. Please try again.' });
        } else {
            response.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
        }
    }
};
