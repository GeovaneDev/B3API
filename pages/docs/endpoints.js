import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DocsMenu from '../../components/DocsMenu';

const Endpoints = () => {
    return (
        <div>
            <DefaultSeo
                title="BrInvestAPI - Documentação dos Endpoints | Acesse Dados Financeiros Brasileiros em Tempo Real"
                description="Explore a documentação completa dos endpoints da BrInvestAPI para acessar dados financeiros brasileiros em tempo real. Descubra como utilizar cada endpoint de forma eficiente e obtenha informações precisas para suas análises e aplicações."
                openGraph={{
                    type: 'website',
                    locale: 'pt_BR',
                    url: 'https://www.brinvestapi.me/docs/endpoints',
                    site_name: 'BrInvestAPI - Documentação dos Endpoints',
                    images: [
                        {
                            url: 'https://www.brinvestapi.me/BrInvestAPI.png',
                            width: 120,
                            height: 120,
                            alt: 'BrInvestAPI Icon',
                        },
                    ],
                    title: "BrInvestAPI - Documentação dos Endpoints | Acesse Dados Financeiros Brasileiros em Tempo Real",
                    description: "Explore a documentação completa dos endpoints da BrInvestAPI para acessar dados financeiros brasileiros em tempo real. Descubra como utilizar cada endpoint de forma eficiente e obtenha informações precisas para suas análises e aplicações.",
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1.0',
                    },
                    {
                        name: 'robots',
                        content: 'index, follow',
                    },
                    {
                        name: 'Strict-Transport-Security',
                        content: 'max-age=63072000; includeSubdomains; preload',
                    },
                    {
                        name: 'X-Content-Type-Options',
                        content: 'nosniff',
                    },
                    {
                        name: 'X-Frame-Options',
                        content: 'DENY',
                    },
                    {
                        name: 'X-XSS-Protection',
                        content: '1; mode=block',
                    },
                    {
                        name: 'Referrer-Policy',
                        content: 'same-origin',
                    },
                    {
                        name: 'Set-Cookie',
                        content: 'HttpOnly; Secure; SameSite=Strict',
                    }
                ]}
                canonical="https://www.brinvestapi.me/docs/endpoints"
            />
            <Navbar />

            <div className="container mt-5">
                <div className="row">
                    <DocsMenu />

                    <div className="col-md-9">
                        <div className="bg-light p-5 rounded shadow">
                            <h1 className="display-4 text-center mb-4">Endpoints da BrInvestAPI</h1>

                            <div className="endpoint-section">
                                <h2 className="text-center mb-4">Fundamentus</h2>
                                <p>
                                    <strong>Buscar opções disponíveis:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/fundamentus/available</code>
                                </p>
                                <p>
                                    <strong>Informações sobre os fundamentos da empresa:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/fundamentus/[TICKER]</code> (substitua [TICKER] por um item da API /api/fundamentus/available)
                                </p>
                                <p>
                                    <strong>Dados de dividendos como porcentagem e valor nos últimos 12 meses:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/fundamentus/dividend?ticket=[TICKER]</code> (substitua [TICKER] por um item da API /api/fundamentus/available)
                                </p>
                                <p>
                                    <strong>Pesquisar por ticker:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/fundamentus/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como PETR para resultados como PETR4 e PETR3)
                                </p>
                                <div className="mt-3">
                                    <strong>Exemplos:</strong>
                                    <ul>
                                        <li>
                                            <Link href="https://www.brinvestapi.me/api/fundamentus/PETR4" passHref target="_blank">https://www.brinvestapi.me/api/fundamentus/PETR4</Link> - Retorna informações sobre os fundamentos da PETR4.
                                        </li>
                                        <li>
                                            <Link href="https://www.brinvestapi.me/api/fundamentus/search?query=PETR" passHref target="_blank">https://www.brinvestapi.me/api/fundamentus/search?query=PETR</Link> - Pesquisa por "PETR" e retorna os resultados, o nome também pode ser usado para pesquisar.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="endpoint-section mt-5">
                                <h2 className="text-center mb-4">Quote</h2>
                                <p>
                                    <strong>Buscar opções disponíveis:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/available</code>
                                </p>
                                <p>
                                    <strong>Retornar o CDI e SELIC:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/taxes</code>
                                </p>
                                <p>
                                    <strong>Pesquisar por ticker:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como ALP para resultados como ALPA4 e ALPK3)
                                </p>
                                <p>
                                    <strong>Retornar dados de uma ação específica:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/[TICKER]</code>
                                </p>
                                <p>
                                    <strong>Retornar todos os dados disponíveis de ações:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/result</code>
                                </p>
                                <p>
                                    <strong>Pesquisar por índice ou nome da empresa:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/quote/search?query=[QUERY]</code> (substitua [QUERY] pela pesquisa de índice ou nome)
                                </p>
                                <div className="mt-3">
                                    <strong>Exemplos:</strong>
                                    <ul>
                                        <li>
                                            <Link href="https://www.brinvestapi.me/api/quote/VALE3" passHref target="_blank">https://www.brinvestapi.me/api/quote/VALE3</Link> - Retorna informações sobre a ação VALE3.
                                        </li>
                                        <li>
                                            <Link href="https://www.brinvestapi.me/api/quote/search?query=VALE" passHref target="_blank">https://www.brinvestapi.me/api/quote/search?query=VALE</Link> - Pesquisa por "VALE" retornando resultados, incluindo dados sobre o setor, nome, sock, etc.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="endpoint-section mt-5">
                                <h2 className="text-center mb-4">Dados de fundamentus e Quote juntos</h2>
                                <p>
                                    <strong>Retorna dados de fundamentus e quote juntos de uma ação:</strong> [GET/POST]{' '}
                                    <code>https://www.brinvestapi.me/api/all/[TICKET]</code>
                                </p>
                                <div className="mt-3">
                                    <strong>Exemplo:</strong>
                                    <ul>
                                        <li>
                                            <Link href="https://www.brinvestapi.me/api/all/VALE3" passHref target="_blank">https://www.brinvestapi.me/api/all/VALE3</Link> - Retorna informações sobre a ação VALE3.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Endpoints;
