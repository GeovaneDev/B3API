import { NextSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocsMenu from '../components/DocsMenu';

const Docs = () => {
  return (
    <div>
      <NextSeo
        title="B3API - Documentação e Introdução | Dados Financeiros Brasileiros em Tempo Real"
        description="Explore a B3API, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Inicie sua jornada com nossa introdução e comece a utilizar a API hoje mesmo para obter informações precisas e atualizadas."
        canonical="https://b3api.me/docs/introduction"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://b3api.me/docs/introduction',
          site_name: 'B3API - Introdução da Documentação',
          title: 'B3API - Introdução | Dados em Tempo Real do Mercado de Ações Brasileiro',
          description: 'Descubra a B3API, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Explore nossa introdução e comece a utilizar a API hoje mesmo para obter informações precisas e atualizadas.',
          images: [
            {
              url: 'https://b3api.me/B3API.png',
              width: 120,
              height: 120,
              alt: 'B3API Icon',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            httpEquiv: 'Strict-Transport-Security',
            content: 'max-age=63072000; includeSubdomains; preload',
          },
          {
            httpEquiv: 'X-Content-Type-Options',
            content: 'nosniff',
          },
          {
            httpEquiv: 'X-XSS-Protection',
            content: '1; mode=block',
          },
          {
            name: 'referrer',
            content: 'same-origin',
          },
          {
            name: 'set-cookie',
            content: 'HttpOnly; Secure; SameSite=Strict',
          },
        ]}
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <DocsMenu />

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Documentação da API</h1>

              <div className="alert alert-warning" role="alert">
                A B3API está em constante desenvolvimento. Caso encontre bugs ou tenha sugestões, por favor, relate-os em nossos{' '}
                <a href="https://github.com/GeovaneDev/B3API/issues" className="fw-bold text-decoration-none" target="_blank" rel="noopener noreferrer">Issues no GitHub</a>.
              </div>

              <p className="lead text-center">
                Bem-vindo à documentação oficial da B3API. Antes de começar, certifique-se de ler nossos{' '}
                <Link href="/terms" passHref className="fw-bold text-decoration-none">Termos de Uso</Link>. A B3API fornece dados do mercado de ações brasileiro e não exige autenticação para acesso.
              </p>

              <div className="border-top mt-5 pt-4">
                <h2 className="mb-4">
                  <Link href="/docs/introduction" passHref className="text-decoration-none text-dark">Introdução</Link>
                </h2>
                <p className="text-muted">Uma visão geral da API e suas principais funcionalidades.</p>
              </div>

              <div className="border-top mt-4 pt-4">
                <h2 className="mb-4">
                  <Link href="/docs/endpoints" passHref className="text-decoration-none text-dark">Endpoints</Link>
                </h2>
                <p className="text-muted">Lista e descrição dos endpoints disponíveis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;