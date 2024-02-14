import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DocsMenu from '../../components/DocsMenu';

const Introduction = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Introdução | Dados em Tempo Real do Mercado de Ações Brasileiro"
        description="Descubra a BrInvestAPI, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Explore nossa introdução e comece a utilizar a API hoje mesmo para obter informações precisas e atualizadas."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.me/docs/introduction',
          site_name: 'BrInvestAPI - Introdução da Documentação',
          images: [
            {
              url: 'https://www.brinvestapi.me/BrInvestAPI.png',
              width: 120,
              height: 120,
              alt: 'BrInvestAPI Icon',
            },
          ],
          title: "BrInvestAPI - Introdução | Dados em Tempo Real do Mercado de Ações Brasileiro",
          description: "Descubra a BrInvestAPI, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Explore nossa introdução e comece a utilizar a API hoje mesmo para obter informações precisas e atualizadas.",
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
        canonical="https://www.brinvestapi.me/docs/introduction"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <DocsMenu />

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Introdução da API</h1>
              <p className="lead text-center">A BrInvestAPI é sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Seja você um investidor, desenvolvedor ou entusiasta do mercado financeiro, nossa API oferece acesso fácil e rápido a uma ampla gama de informações financeiras atualizadas.</p>

              <div className="card mt-5">
                <div className="card-body">
                  <h2 className="card-title">Dados Disponíveis na API</h2>
                  <p className="card-text">A BrInvestAPI oferece uma variedade de dados para atender às necessidades dos usuários, incluindo:</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Informações fundamentais das empresas listadas na bolsa de valores brasileira.</li>
                    <li className="list-group-item">Cotações de ações em tempo real, incluindo preços de mercado, volumes de negociação e variações de preço.</li>
                    <li className="list-group-item">Dados de dividendos, incluindo porcentagens e valores distribuídos nos últimos 12 meses.</li>
                    <li className="list-group-item">Informações sobre índices financeiros, como CDI e SELIC.</li>
                  </ul>
                  <p className="mt-3">Esses são apenas alguns exemplos dos dados disponíveis na BrInvestAPI. Explore nossa documentação completa para descobrir todos os dados e recursos que nossa API tem a oferecer.</p>
                </div>
              </div>

              <div className="text-center mt-5">
                <Link href="/docs/endpoints" className="btn btn-primary btn-lg">Explorar Endpoints</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Introduction;
