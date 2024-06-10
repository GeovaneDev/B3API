"use client";
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="hero-section text-center my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              <img src="/B3API.png" alt="B3API Logo" width="140" height="140" />
              <h1 className="hero-title">B3API</h1>
              <p className="lead-text">Sua fonte confiável de dados em tempo real sobre ações, cotações e índices do mercado financeiro brasileiro.</p>
              <Link href="/docs" className="btn btn-primary btn-lg rounded-pill start-button">Comece Agora</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="feature-section text-center my-5">
      <div className="container">
        <h2 className="section-title">Por que Escolher a B3API?</h2>
        <div className="row justify-content-center">
          <FeatureItem title="Dados Abrangentes" text="Acesse uma ampla gama de dados do mercado de ações, incluindo métricas e índices financeiros." color="blue" icon="fas fa-database" />
          <FeatureItem title="Atualizações em Tempo Real" text="Mantenha-se informado com dados atualizados do mercado de ações." color="green" icon="fas fa-clock" />
          <FeatureItem title="Integração Fácil" text="Integração simples e fácil em suas aplicações com nossa API amigável para desenvolvedores." color="teal" icon="fas fa-plug" />
        </div>
      </div>
    </section>
  );
};

function FeatureItem({ title, text, color, icon }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className={`card bg-${color} text-dark shadow`}>
        <div className="card-body">
          <i className={`fas ${icon} fa-3x mb-3`} />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </>
  );
};

export default Home;