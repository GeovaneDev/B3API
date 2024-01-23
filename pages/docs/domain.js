import { DefaultSeo } from 'next-seo';
import React from 'react';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DomainInfo = () => {
  const pathname = usePathname();

  const isCurrentPage = (page) => {
    return pathname === `/docs${page}`;
  };

  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Informações sobre o Domínio"
        description="Explore informações sobre o domínio da BrInvestAPI e saiba por que recomendamos o uso do domínio da Vercel para garantir estabilidade e consistência."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.pt/docs/domain',
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
        canonical="https://www.brinvestapi.pt/docs/domain"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <Link href="/docs" passHref className={`list-group-item list-group-item-action ${isCurrentPage('') ? 'active' : ''}`}>Documentação</Link>
              <Link href="/docs/introduction" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/introduction') ? 'active' : ''}`}>Introdução</Link>
              <Link href="/docs/domain" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/domain') ? 'active' : ''}`}>Informações sobre o Domínio</Link>
              <Link href="/docs/endpoints" passHref className={`list-group-item list-group-item-action ${isCurrentPage('/endpoints') ? 'active' : ''}`}>Endpoints</Link>
            </div>
          </div>

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Informações sobre o Domínio da BrInvestAPI</h1>

              <p className="lead">
                A estabilidade e consistência do domínio são essenciais para garantir uma experiência confiável ao usar a BrInvestAPI.
              </p>

              <div className="mt-5">
                <h2 className="text-center mb-4">Domínio Atual: <span className="text-primary">https://www.brinvestapi.pt</span></h2>
                <p>
                  O domínio atual, <strong>https://www.brinvestapi.pt</strong>, é fornecido gratuitamente e tem uma duração de 1 ano. Recomendamos o seu uso para projetos de curto prazo. No entanto, para projetos de longo prazo, é altamente recomendado usar o domínio fornecido pela Vercel para garantir estabilidade contínua.
                </p>
                <p>
                  Recomendamos o uso do domínio <strong>https://brinvestapi.vercel.app/</strong> para projetos de longo prazo. Este domínio é fornecido pela Vercel.
                </p>
                <p>
                  Ao optar pelo domínio da Vercel, você evita possíveis problemas relacionados a mudanças de domínio e desfruta de uma experiência mais consistente para seus usuários.
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

export default DomainInfo;
