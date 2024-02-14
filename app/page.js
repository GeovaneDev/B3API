"use client";
import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <DefaultSeo
        title="BrInvestAPI - Dados Financeiros Brasileiros | API B3"
        description="Descubra a melhor API B3, BrInvestAPI. Fornece dados confiáveis e em tempo real sobre ações, cotações, índices e informações essenciais para o mercado financeiro do Brasil. Experimente agora!"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.me/',
          site_name: 'BrInvestAPI - Dados Financeiros Brasileiros em Tempo Real',
          images: [
            {
              url: 'https://www.brinvestapi.me/BrInvestAPI.png',
              width: 120,
              height: 120,
              alt: 'BrInvestAPI Icon',
            },
          ],
          title: 'BrInvestAPI - Dados Financeiros Brasileiros em Tempo Real | API B3 Líder no Mercado',
          description: 'Descubra a API B3 líder no mercado, BrInvestAPI. Fornece dados confiáveis e em tempo real sobre ações, cotações, índices e informações essenciais para o mercado financeiro do Brasil. Experimente agora!',
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
        canonical="https://www.brinvestapi.me/"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="text-center">
          <Image src="/BrInvestAPI.png" alt="Ícone BrInvestAPI" width={140} height={140} />
          <h1 className="display-4 my-4">BrInvestAPI</h1>
          <p className="lead mb-4">
            Sua fonte confiável de dados em tempo real sobre ações, cotações e índices do mercado financeiro brasileiro.
          </p>
          <Link href="/docs" passHref className="btn btn-primary btn-lg rounded-pill">Começar agora</Link>
        </div>

        <div className="my-5 text-center">
          <h2 className="mb-4">Por que escolher a BrInvestAPI?</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 rounded shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Dados Abrangentes</h5>
                  <p className="card-text">Acesse uma ampla gama de dados do mercado de ações, incluindo métricas e índices financeiros.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 rounded shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Atualizações em Tempo Real</h5>
                  <p className="card-text">Mantenha-se informado com dados do mercado de ações em tempo real e atualizados para tomar decisões oportunas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 rounded shadow border-0">
                <div className="card-body">
                  <h5 className="card-title">Integração Fácil</h5>
                  <p className="card-text">Integração simples e fácil em suas aplicações com nossa API amigável para desenvolvedores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-12">
          <div className="card rounded shadow border-0">
            <div className="card-body">
              <h2 className="mb-4 text-center">Por que a BrInvestAPI Existe?</h2>
              <p className="lead text-center">
                A BrInvestAPI foi criada para fornecer aos desenvolvedores acesso fácil e rápido a dados abrangentes e atualizados do mercado de ações brasileiro. Nosso compromisso é oferecer uma API gratuita, de código aberto e com dados sempre atualizados.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
