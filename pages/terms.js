import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Termos de Uso"
        description="Leia os Termos de Serviço da BrInvestAPI para entender as condições de uso do serviço. Ao acessar e utilizar a API, você concorda com estes termos e políticas."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.me/terms',
          site_name: 'BrInvestAPI - Termos de Uso',
          images: [
            {
              url: 'https://www.brinvestapi.me/BrInvestAPI.png',
              width: 120,
              height: 120,
              alt: 'BrInvestAPI Icon',
            },
          ],
          title: "BrInvestAPI - Termos de Uso",
          description: "Leia os Termos de Serviço da BrInvestAPI para entender as condições de uso do serviço. Ao acessar e utilizar a API, você concorda com estes termos e políticas."
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
        canonical="https://www.brinvestapi.me/terms"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow">
          <h1 className="display-5 mb-4 text-center">Termos de Serviço</h1>

          <div className="alert alert-info" role="alert">
            Este é um projeto sem fins lucrativos e um hobby do desenvolvedor{' '}
            <a
              href="https://github.com/GeovaneDev"
              className="fw-bold text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeovaneDev
            </a>
            . Nosso objetivo é disponibilizar dados gratuitamente sobre o mercado financeiro brasileiro. Não buscamos lucro com a API. Portanto, pode ocorrer a mudança de domínio a cada 1 ano para garantir a continuidade deste serviço de forma sustentável.
          </div>

          <div className="mt-4">
            <h2 className="mb-4">1. Aceitação dos Termos</h2>
            <p className="lead">
              Ao acessar e utilizar o BrInvestAPI, você expressa seu consentimento e concordância com os presentes Termos de Serviço, assim como com todos os termos e políticas incorporados por referência. Se por acaso você não concordar com qualquer um destes termos, solicitamos que não utilize o serviço.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="mb-4">2. Uso Responsável</h2>
            <p className="lead">
              Ao utilizar o BrInvestAPI, você compromete-se a fazê-lo de maneira responsável e ética. O abuso do serviço, incluindo práticas como sobrecarga excessiva de solicitações, não é permitido e pode resultar na suspensão do acesso.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
