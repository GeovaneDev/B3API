import axios from 'axios';

async function quotations(request, response) {
    //Envia o request GET para a api
    await axios.get("https://api.hgbrasil.com/finance/quotations", {
        params: {
            key: process.env.APIKEYHG, //Usa a apikey do arquivo .env
        }
    })
    .then((axiosResponse) => {
        //Salva a resposta
        const data = axiosResponse.data;

        //Cache da Vercel
        response.setHeader('Vercel-CDN-Cache-Control', 'max-age=21600');
        response.setHeader('CDN-Cache-Control', 'max-age=21600');
        response.setHeader('Cache-Control', 'max-age=21600')

        //Retorna em json
        return response.json(data);
    })
    .catch((error) => {
        //Responde em caso de erro
        return response.json({ error: "Internel server error" });
    })
}

export default quotations;