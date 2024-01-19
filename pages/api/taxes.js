import axios from 'axios';

async function selic(request, response){
    //Usa o get para puxar dados da api
    await axios.get(`https://api.hgbrasil.com/finance/taxes`, {
        params: {
            key: process.env.APIKEYHG, //Usa a apikey do arquivo .env
        }
    })
    .then((axiosResponse) => {
        //Salva os dados da resposta da api
        const data = axiosResponse.data;

        //Cache da Vercel
        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
        response.setHeader('CDN-Cache-Control', 'max-age=21600');
        response.setHeader('Cache-Control', 'max-age=21600')

        //Responde com a resposta em json
        return response.status(200).json(data)
    })
    //Trata os erros
    .catch((error) => {
        //Responde com o erro
        return response.status(500).json({ error: "Internel Server Error" });
    })
}

export default selic