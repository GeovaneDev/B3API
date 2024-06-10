import { NextSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div>
      <NextSeo
        title="B3API - Termos de Uso | Políticas de Acesso e Uso da API B3"
        description="Consulte os Termos de Uso da B3API para orientações sobre o uso da API. Ao acessar nossos serviços, você aceita os termos e políticas aplicáveis."
        canonical="https://b3api.me/terms"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://b3api.me/terms',
          site_name: 'B3API - Termos de Uso | Políticas de Acesso e Uso da API B3',
          title: 'B3API - Termos de Uso | Políticas de Acesso e Uso da API B3',
          description: 'Consulte os Termos de Uso da B3API para orientações sobre o uso da API. Ao acessar nossos serviços, você aceita os termos e políticas aplicáveis.',
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
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="bg-light text-dark p-5 rounded shadow">
              <h1 className="display-5 mb-4 text-center">Termos de Serviço</h1>

              <div className="alert alert-info" role="alert">
                A B3API é um projeto sem fins lucrativos e um hobby do desenvolvedor GeovaneDev. Nosso objetivo é disponibilizar dados gratuitamente sobre o mercado financeiro brasileiro. Não buscamos lucro com a API. Portanto, pode ocorrer a mudança de domínio a cada 1 ano para garantir a continuidade deste serviço de forma sustentável.
              </div>

              <div className="mt-4">
                <h2 className="mb-4">1. Aceitação dos Termos</h2>
                <p className="lead">
                  Ao acessar e utilizar o B3API, você expressa seu consentimento e concordância com os presentes Termos de Serviço, assim como com todos os termos e políticas incorporados por referência. Se por acaso você não concordar com qualquer um destes termos, solicitamos que não utilize o serviço.
                </p>
              </div>

              <div className="mt-4">
                <h2 className="mb-4">2. Uso Responsável</h2>
                <p className="lead">
                  Ao utilizar o B3API, você compromete-se a fazê-lo de maneira responsável e ética. O abuso do serviço, incluindo práticas como sobrecarga excessiva de solicitações, não é permitido e pode resultar na suspensão do acesso.
                </p>
              </div>

              <div className="mt-4">
                <h2 className="mb-4">3. Limitação de Responsabilidade</h2>
                <p className="lead">
                  A B3API não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais, consequentes ou punitivos, incluindo, mas não se limitando a, lucros cessantes, perda de dados, uso indevido, interrupção do negócio ou quaisquer outros danos similares, decorrentes ou relacionados ao uso ou incapacidade de usar nosso serviço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
