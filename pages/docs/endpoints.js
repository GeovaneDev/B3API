import { DefaultSeo } from 'next-seo';
import React from 'react';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Endpoints = () => {
    const pathname = usePathname();

    const isCurrentPage = (page) => {
        return pathname === `/docs${page}`;
    };

    return (
        <div>
            <DefaultSeo
                title="BrInvestAPI - Documentação dos Endpoints"
                description="Explore a documentação completa dos endpoints da BrInvestAPI para acessar dados financeiros brasileiros em tempo real."
                openGraph={{
                    type: 'website',
                    locale: 'pt_BR',
                    url: 'https://www.brinvestapi.pt/docs',
                    site_name: 'BrInvestAPI - Dados Financeiros Brasileiros em Tempo Real',
                    images: [
                        {
                            url: 'https://www.brinvestapi.pt/BrInvestAPI.png',
                            width: 120,
                            height: 120,
                            alt: 'BrInvestAPI Icon',
                        },
                    ],
                }}
                canonical="https://www.brinvestapi.pt/docs"
            />
            <Navbar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <Link href="/docs" passHref className={`list-group-item list-group-item-action ${isCurrentPage('') ? 'active' : ''}`}>Documentação</Link>
                            <Link href="/docs/introduction" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/introduction') ? 'active' : ''}`}>Introdução</Link>
                            <Link href="/docs/domain" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/domain') ? 'active' : ''}`}>Informações sobre o Domínio</Link>
                            <Link href="/docs/endpoints" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/endpoints') ? 'active' : ''}`}>Endpoints</Link>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="bg-light p-5 rounded shadow">
                            <h1 className="display-4 text-center mb-4">Endpoints da BrInvestAPI</h1>
                            <div className="endpoint-section">
                                <h2 className="text-center mb-4">Fundamentus</h2>
                                <p>
                                    <strong>Buscar opções disponíveis:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/fundamentus/available</code>
                                </p>
                                <p>
                                    <strong>Informações sobre os fundamentos da empresa:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/fundamentus/[TICKER]</code> (substitua [TICKER] por um item da API /api/fundamentus/available)
                                </p>
                                <p>
                                    <strong>Pesquisar por ticker:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/fundamentus/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como PETR para resultados como PETR4 e PETR3)
                                </p>
                                <div className="mt-3">
                                    <strong>Exemplos:</strong>
                                    <ul>
                                        <li>
                                            <Link href="https://brinvestapi.vercel.app/api/fundamentus/PETR4" passHref target="_blank">https://brinvestapi.vercel.app/api/fundamentus/PETR4</Link>
                                            - Retorna informações sobre os fundamentos da PETR4.
                                        </li>
                                        <li>
                                            <Link href="https://brinvestapi.vercel.app/api/fundamentus/search?query=PETR" passHref target="_blank">https://brinvestapi.vercel.app/api/fundamentus/search?query=PETR</Link>
                                            - Pesquisa por "PETR" e retorna os resultados, o nome também pode ser usado para pesquisar. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="endpoint-section mt-5">
                                <h2 className="text-center mb-4">Quote</h2>
                                <p>
                                    <strong>Buscar opções disponíveis:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/available</code>
                                </p>
                                <p>
                                    <strong>Retornar o CDI e SELIC:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/taxes</code>
                                </p>
                                <p>
                                    <strong>Pesquisar por ticker:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como ALP para resultados como ALPA4 e ALPK3)
                                </p>
                                <p>
                                    <strong>Retornar dados de uma ação específica:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/[TICKER]</code>
                                </p>
                                <p>
                                    <strong>Retornar todos os dados disponíveis de ações:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/result</code>
                                </p>
                                <p>
                                    <strong>Pesquisar por índice ou nome da empresa:</strong> [GET/POST] <code>https://brinvestapi.vercel.app/api/quote/search?query=[QUERY]</code> (substitua [QUERY] pela pesquisa de índice ou nome)
                                </p>
                                <div className="mt-3">
                                    <strong>Exemplos:</strong>
                                    <ul>
                                        <li>
                                            <Link href="https://brinvestapi.vercel.app/api/quote/VALE3" passHref target="_blank">https://brinvestapi.vercel.app/api/quote/ITUB4</Link>
                                            - Retorna informações sobre a ação VALE3.
                                        </li>
                                        <li>
                                            <Link href="https://brinvestapi.vercel.app/api/quote/search?query=VALE" passHref target="_blank">https://brinvestapi.vercel.app/api/quote/search?query=VALE</Link>
                                            - Pesquisa por "VALE" retornando resultados, incluindo dados sobre o setor, nome, sock, etc.
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
