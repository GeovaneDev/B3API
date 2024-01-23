"use client"
import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <DefaultSeo
        title="API B3: BrInvestAPI - Dados Financeiros Brasileiros em Tempo Real"
        description="Descubra a API B3 líder no mercado, BrInvestAPI. Fornece dados confiáveis e em tempo real sobre ações, cotações, índices e informações essenciais para o mercado financeiro do Brasil."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.pt/',
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
        canonical="https://www.brinvestapi.pt/"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow text-center">
          <img src="/BrInvestAPI.png" alt="BrInvestAPI Icon" style={{ width: '120px', height: '120px', marginBottom: '20px' }} />
          <h1 className="display-4 mb-4">BrInvestAPI</h1>
          <p className="lead">
            Dados em tempo real do mercado de ações brasileiro. Descubra oportunidades e tome decisões informadas.
          </p>
          <Link href="/docs" passHref className="btn btn-primary btn-lg mt-3">Começar Agora</Link>
        </div>

        <div className="mt-5 text-center">
          <h2 className="mb-4">Por que escolher a BrInvestAPI?</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Dados Abrangentes</h5>
                  <p className="card-text">Acesse uma ampla gama de dados do mercado de ações, incluindo métricas e índices financeiros.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Atualizações em Tempo Real</h5>
                  <p className="card-text">Mantenha-se informado com dados do mercado de ações em tempo real e atualizados para tomar decisões oportunas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Integração Fácil</h5>
                  <p className="card-text">Integração simples e fácil em suas aplicações com nossa API amigável para desenvolvedores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <h2 className="mb-4">Por que a BrInvestAPI Existe?</h2>
          <p className="lead">
            A BrInvestAPI foi criada para fornecer aos desenvolvedores acesso fácil e rápido a dados abrangentes e atualizados do mercado de ações brasileiro. Focando em ser gratuita e fornecer dados relativamente atualizados.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
