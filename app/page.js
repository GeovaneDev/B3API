"use client";
import React from 'react';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <DefaultSeo
        title="BrInvestAPI - Dados Financeiros Brasileiros | API B3"
        description="A BrInvestAPI oferece dados financeiros brasileiros confiáveis e em tempo real. Experimente nossa API B3 líder no mercado agora!"
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
          description: 'A BrInvestAPI oferece dados financeiros brasileiros confiáveis e em tempo real. Experimente nossa API B3 líder no mercado agora!',
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
      <section className="hero-section text-center my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <Image src="/BrInvestAPI.png" alt="BrInvestAPI Logo" width={140} height={140} priority={true} />
                <h1 className="mb-4">Bem-vindo à BrInvestAPI</h1>
                <p className="lead mb-4">Sua fonte confiável de dados em tempo real sobre ações, cotações e índices do mercado financeiro brasileiro.</p>
                <Link href="/docs" className="btn btn-primary btn-lg rounded-pill">Comece Agora</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section bg-light text-center my-5">
        <div className="container">
          <h2 className="mb-5">Por que Escolher a BrInvestAPI?</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="feature-item rounded shadow p-4">
                <h3 className="mb-3">Dados Abrangentes</h3>
                <p className="mb-0">Acesse uma ampla gama de dados do mercado de ações, incluindo métricas e índices financeiros.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="feature-item rounded shadow p-4">
                <h3 className="mb-3">Atualizações em Tempo Real</h3>
                <p className="mb-0">Mantenha-se informado com dados atualizados do mercado de ações.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="feature-item rounded shadow p-4">
                <h3 className="mb-3">Integração Fácil</h3>
                <p className="mb-0">Integração simples e fácil em suas aplicações com nossa API amigável para desenvolvedores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
