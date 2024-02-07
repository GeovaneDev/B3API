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
              <h1 className="display-4 text-center mb-4">Introdução à BrInvestAPI</h1>

              <p className="lead">
                Bem-vindo à BrInvestAPI, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Nossa API oferece uma variedade de informações financeiras. Confira abaixo:
              </p>

              <div className="row mt-5">
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h2 className="h3 mb-4">Dados Fundamentus</h2>
                      <p className="card-text">
                        A BrInvestAPI fornece informações sobre os fundamentos de uma empresa, incluindo dados como P/L, P/VP, PSR, DY, ROIC, ROE, Div. Yield, Cresc. 5 anos, entre outros.
                      </p>
                      <a href="https://www.fundamentus.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill p-2">Saiba Mais</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h2 className="h3 mb-4">Taxas CDI e SELIC</h2>
                      <p className="card-text">
                        Mantenha-se atualizado com as taxas CDI e SELIC. A BrInvestAPI utiliza dados fornecidos pelo serviço HG Brasil para oferecer informações sobre essas taxas essenciais.
                      </p>
                      <a href="https://hgbrasil.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill p-2">Saiba Mais</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h2 className="h3 mb-4">Dados de Ações</h2>
                      <p className="card-text">
                        Obtenha dados de ações atualizados a cada 3 horas. A BrInvestAPI utiliza informações fornecidas pelo serviço BrAPI para mantê-lo informado sobre as últimas mudanças no mercado de ações brasileiro.
                      </p>
                      <a href="https://brapi.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill p-2">Saiba Mais</a>
                    </div>
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

export default Introduction;