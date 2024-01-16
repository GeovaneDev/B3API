import axios from 'axios';

function apiAvailable(request, response) {
    //Usa o get para puxar dados da api
    axios.get(`https://brapi.dev/api/available`, {
        params: {
            token: process.env.TOKEN //Usa o token do arquivo .env
        }
    })
        .then((axiosResponse) => {
            //Salva os dados da resposta da api
            const data = axiosResponse.data;

            //Cache da Vercel
            response.setHeader('Vercel-CDN-Cache-Control', 'max-age=43200');
            response.setHeader('CDN-Cache-Control', 'max-age=43200');
            response.setHeader('Cache-Control', 'max-age=43200')

            //Responde com a resposta em json
            return response.json(data);
        })
        //Trata os erros
        .catch((error) => {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error' });
        });
}

export default apiAvailable