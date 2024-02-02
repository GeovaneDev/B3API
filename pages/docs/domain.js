import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DocsMenu from '../../components/DocsMenu';

const DomainInfo = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Informações sobre o Domínio"
        description="Descubra detalhes sobre o domínio BrInvestAPI e por que recomendamos a estabilidade e consistência oferecidas pelo domínio Vercel."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.me/docs/domain',
          site_name: 'BrInvestAPI - Informações sobre o Domínio',
          images: [
            {
              url: 'https://www.brinvestapi.me/BrInvestAPI.png',
              width: 120,
              height: 120,
              alt: 'BrInvestAPI Icon',
            },
          ],
          title: "BrInvestAPI - Informações sobre o Domínio",
          description: "Explore o domínio da BrInvestAPI e saiba por que recomendamos a estabilidade da Vercel para garantir consistência.",
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
        canonical="https://www.brinvestapi.me/docs/domain"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <DocsMenu />

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Informações sobre o Domínio da BrInvestAPI</h1>

              <p className="lead text-center">
                A estabilidade e consistência do domínio são essenciais para garantir uma experiência confiável ao usar a BrInvestAPI.
              </p>

              <div className="mt-5">
                <h2 className="text-center mb-4">Domínio Atual</h2>
                <p className="text-center">
                  O domínio atual é <strong>brinvestapi.me</strong> e é fornecido gratuitamente, com uma duração de 1 ano. No entanto, recomendamos fortemente o uso do domínio fornecido pela <a href='https://vercel.com'>Vercel</a> para garantir estabilidade contínua.
                </p>

                <div className="text-center">
                  <h5>Domínio Vercel Recomendado</h5>
                  <p>O domínio fornecido pela <a href='https://vercel.com'>Vercel</a> é <strong>https://brinvestapi.vercel.app/</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DomainInfo;
