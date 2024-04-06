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
        title="B3API - Documentação dos Endpoints | Acesse Dados Financeiros Brasileiros em Tempo Real"
        description="Explore a documentação completa dos endpoints da B3API para acessar dados financeiros brasileiros em tempo real. Descubra como utilizar cada endpoint de forma eficiente e obtenha informações precisas para suas análises e aplicações."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://b3api.online/docs/endpoints',
          site_name: 'B3API - Documentação dos Endpoints',
          images: [
            {
              url: 'https://b3api.online/B3API.png',
              width: 120,
              height: 120,
              alt: 'B3API Icon',
            },
          ],
          title: "B3API - Documentação dos Endpoints | Acesse Dados Financeiros Brasileiros em Tempo Real",
          description: "Explore a documentação completa dos endpoints da B3API para acessar dados financeiros brasileiros em tempo real. Descubra como utilizar cada endpoint de forma eficiente e obtenha informações precisas para suas análises e aplicações.",
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
        canonical="https://b3api.online/docs/endpoints"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <DocsMenu />

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Endpoints da B3API</h1>

              <div className="alert alert-warning" role="alert">
                <p className="mb-0">
                  Devido ao alto volume de solicitações, implementamos um sistema de rate limit. Por favor, evite enviar solicitações em excesso.
                </p>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Fundamentus</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Buscar opções disponíveis:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/fundamentus/available</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Informações sobre os fundamentos da empresa:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/fundamentus/[TICKER]</code> (substitua [TICKER] por um item da API /api/fundamentus/available)
                    </li>
                    <li className="list-group-item">
                      <strong>Dados de dividendos como porcentagem e valor nos últimos 12 meses:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/fundamentus/dividend?ticket=[TICKER]</code> (substitua [TICKER] por um item da API /api/fundamentus/available)
                    </li>
                    <li className="list-group-item">
                      <strong>Pesquisar por ticker:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/fundamentus/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como PETR para resultados como PETR4 e PETR3)
                    </li>
                  </ul>
                  <div className="mt-3">
                    <strong>Exemplos:</strong>
                    <ul>
                      <li>
                        <Link href="https://b3api.online/api/fundamentus/PETR4" passHref target="_blank">https://b3api.online/api/fundamentus/PETR4</Link> - Retorna informações sobre os fundamentos da PETR4.
                      </li>
                      <li>
                        <Link href="https://b3api.online/api/fundamentus/search?query=PETR" passHref target="_blank">https://b3api.online/api/fundamentus/search?query=PETR</Link> - Pesquisa por "PETR" e retorna os resultados, o nome também pode ser usado para pesquisar.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Quote</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Buscar opções disponíveis:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/available</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Retornar o CDI e SELIC:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/taxes</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Pesquisar por ticker:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/search?query=[QUERY]</code> (substitua [QUERY] por uma pesquisa, como ALP para resultados como ALPA4 e ALPK3)
                    </li>
                    <li className="list-group-item">
                      <strong>Retornar dados de uma ação específica:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/[TICKER]</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Retornar todos os dados disponíveis de ações:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/result</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Pesquisar por índice ou nome da empresa:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/quote/search?query=[QUERY]</code> (substitua [QUERY] pela pesquisa de índice ou nome)
                    </li>
                  </ul>
                  <div className="mt-3">
                    <strong>Exemplos:</strong>
                    <ul>
                      <li>
                        <Link href="https://b3api.online/api/quote/VALE3" passHref target="_blank">https://b3api.online/api/quote/VALE3</Link> - Retorna informações sobre a ação VALE3.
                      </li>
                      <li>
                        <Link href="https://b3api.online/api/quote/search?query=VALE" passHref target="_blank">https://b3api.online/api/quote/search?query=VALE</Link> - Pesquisa por "VALE" retornando resultados, incluindo dados sobre o setor, nome, sock, etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Dados de fundamentus e Quote juntos</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Retorna dados de fundamentus e quote juntos de uma ação:</strong> [GET/POST]{' '}
                      <code>https://b3api.online/api/all/[TICKET]</code>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <strong>Exemplo:</strong>
                    <ul>
                      <li>
                        <Link href="https://b3api.online/api/all/VALE3" passHref target="_blank">https://b3api.online/api/all/VALE3</Link> - Retorna informações sobre a ação VALE3.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Crypto</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Retorna dados sobre uma criptomoeda específica:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/all/(COIN)</code> (substitua (COIN) pelo código da criptomoeda)
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna todas as criptomoedas aceitas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/all/coins</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Mostra informações sobre uma transação da blockchain pelo id:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/transaction/(TRANSACTION)</code> (substitua (TRANSACTION) pelo ID da transação)
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna dados sobre uma carteira de criptomoedas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/wallet/(WALLET)</code> (substitua (WALLET) pelo ID da carteira)
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna o histórico de preço de uma criptomoedas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/history/(COIN)</code> (substitua (COIN) pela criptomoeda.)
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna a maioria dos dados gerais sobre criptomoedas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/all</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna informações sobre o mercado global de criptomoedas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/global</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Retorna dados dos últimos blocos minerados:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/latestblock</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Mostra as criptomoedas em alta no mercado:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/trending</code>
                    </li>
                    <li className="list-group-item">
                      <strong>Mostra transações de criptomoedas não confirmadas/mineradas:</strong> [GET]{' '}
                      <code>https://b3api.online/api/crypto/unconfirmed-transactions</code>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <strong>Exemplos:</strong>
                    <ul>
                      <li>
                        <Link href="https://b3api.online/api/crypto/all/bitcoin" passHref target="_blank">https://b3api.online/api/crypto/all/bitcoin</Link> - Retorna dados sobre a criptomoeda Bitcoin (BTC).
                      </li>
                      <li>
                        <Link href="https://b3api.online/api/crypto/wallet/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" passHref target="_blank">https://b3api.online/api/crypto/wallet/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</Link> - Retorna informações a carteira de criptomoedas.
                      </li>
                      <li>
                        <Link href="https://b3api.online/api/crypto/transaction/20e64580a0d8520dd676357421f6f39873e61c69c96a1f56f499a21b26592883" passHref target="_blank">https://b3api.online/api/crypto/transaction/20e64580a0d8520dd676357421f6f39873e61c69c96a1f56f499a21b26592883</Link> - Retorna informações sobre uma transação da blockchain.
                      </li>
                    </ul>
                  </div>
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
