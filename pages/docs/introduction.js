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
              <h1 className="display-4 text-center mb-4">Documentação da API</h1>

              <div className="alert alert-warning" role="alert">
                A BrInvestAPI está em constante desenvolvimento. Caso encontre bugs ou tenha sugestões, por favor, relate-os em nossos{' '}
                <a href="https://github.com/GeovaneDev/BrInvestAPI/issues" className="fw-bold text-decoration-none" target="_blank" rel="noopener noreferrer">Issues no GitHub</a>.
              </div>

              <p className="lead">
                Bem-vindo à documentação oficial da BrInvestAPI. Antes de começar, certifique-se de ler nossos{' '}
                <Link href="/terms" passHref className="fw-bold text-decoration-none">Termos de Uso</Link>. A BrInvestAPI fornece dados do mercado de ações brasileiro e não exige autenticação para acesso.
              </p>

              <div className="border-top mt-4 pt-4">
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
      <script type="text/javascript"> var infolinks_pid = 3414726; var infolinks_wsid = 0; </script> <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
    </div>
  );
};

export default Introduction;