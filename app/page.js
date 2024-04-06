"use client";
import React from 'react';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./globals.css"

const Home = () => {
  return (
    <>
      <DefaultSeo
        title="B3API - Dados Financeiros Brasileiros | API B3"
        description="A B3API oferece dados financeiros brasileiros confiáveis e em tempo real. Experimente nossa API B3 líder no mercado agora!"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://b3api.online/',
          site_name: 'B3API - Dados Financeiros Brasileiros em Tempo Real',
          images: [
            {
              url: 'https://b3api.online/B3API.png',
              width: 120,
              height: 120,
              alt: 'B3API Icon',
            },
          ],
          title: 'B3API - Dados Financeiros Brasileiros em Tempo Real | API B3 Líder no Mercado',
          description: 'A B3API oferece dados financeiros brasileiros confiáveis e em tempo real. Experimente nossa API B3 líder no mercado agora!',
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
        canonical="https://b3api.online/"
      />
      <Navbar />
      <section className="hero-section text-center my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <Image src="/B3API.png" alt="B3API Logo" width={140} height={140} priority={true} />
                <h1 className="hero-title">B3API</h1>
                <p className="lead-text">Sua fonte confiável de dados em tempo real sobre ações, cotações e índices do mercado financeiro brasileiro.</p>
                <Link href="/docs" className="btn btn-primary btn-lg rounded-pill start-button">Comece Agora</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section text-center my-5">
        <div className="container">
          <h2 className="section-title">Por que Escolher a B3API?</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="feature-item">
                <h3 className="feature-title blue-title">Dados Abrangentes</h3>
                <p className="feature-text">Acesse uma ampla gama de dados do mercado de ações, incluindo métricas e índices financeiros.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="feature-item">
                <h3 className="feature-title green-title">Atualizações em Tempo Real</h3>
                <p className="feature-text">Mantenha-se informado com dados atualizados do mercado de ações.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="feature-item">
                <h3 className="feature-title teal-title">Integração Fácil</h3>
                <p className="feature-text">Integração simples e fácil em suas aplicações com nossa API amigável para desenvolvedores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero-title {
          font-weight: 600;
          font-size: 2.8rem;
          color: #333;
          margin-bottom: 1rem;
        }
        .lead-text {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .start-button {
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .section-title {
          font-weight: 600;
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }
        .feature-item {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          transition: transform 0.3s ease-in-out;
          padding: 1rem;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .feature-title {
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .blue-title {
          color: #007bff;
        }
        .green-title {
          color: #28a745;
        }
        .teal-title {
          color: #17a2b8;
        }
        .feature-text {
          margin-bottom: 0;
        }
        .btn-primary:hover {
          background: #0056b3;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default Home;
