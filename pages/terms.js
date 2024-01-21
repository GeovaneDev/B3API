import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Termos de Serviço"
        description="Leia os Termos de Serviço da BrInvestAPI para entender as condições de uso do serviço. Ao acessar e utilizar a API, você concorda com estes termos e políticas."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.pt/terms',
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
        canonical="https://www.brinvestapi.pt/terms"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow">
          <h1 className="display-5 mb-4">Termos de Serviço</h1>

          <div className="mt-4">
            <h2 className="text-center mb-4">1. Aceitação dos Termos</h2>
            <p className="lead">
              Ao acessar e utilizar o BrInvestAPI, você expressa seu consentimento e concordância com os presentes Termos de Serviço, assim como com todos os termos e políticas incorporados por referência. Se por acaso você não concordar com qualquer um destes termos, solicitamos que não utilize o serviço.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-center mb-4">2. Uso Responsável</h2>
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
