import { DefaultSeo } from 'next-seo';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Introduction = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Introdução"
        description="Descubra a BrInvestAPI, sua fonte confiável para dados em tempo real do mercado de ações brasileiro. Explore nossa introdução e comece a utilizar a API hoje mesmo."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brinvestapi.pt/docs/introduction',
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
        canonical="https://www.brinvestapi.pt/docs/introduction"
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <Link href="/docs/introduction" passHref className="list-group-item list-group-item-action">Introdução</Link>
              <Link href="/docs/endpoints" passHref className="list-group-item list-group-item-action">Endpoints</Link>
            </div>
          </div>

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Introdução à BrInvestAPI</h1>

              <p className="lead">
                Bem-vindo à BrInvestAPI, sua fonte para dados em tempo real do mercado de ações brasileiro. Nossa API oferece uma variedade de informações financeiras para ajudar você a tomar decisões informadas. Abaixo estão os principais dados fornecidos pela BrInvestAPI:
              </p>

              <div className="mt-5">
                <h2 className="text-center mb-4">Dados Fundamentus</h2>
                <p>
                  A BrInvestAPI fornece informações sobre os fundamentus de uma empresa, incluindo dados como P/L, P/VP, PSR, DY, ROIC, ROE, Div. Yield, Cresc. 5 anos, entre outros. Esses dados são obtidos do site <a href="https://www.fundamentus.com.br/" target="_blank" rel="noopener noreferrer">Fundamentus</a>.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-center mb-4">Taxas CDI e SELIC</h2>
                <p>
                  Mantenha-se atualizado com as taxas CDI e SELIC. A BrInvestAPI utiliza dados fornecidos pelo serviço <a href="https://hgbrasil.com/" target="_blank" rel="noopener noreferrer">HG Brasil</a> para oferecer informações sobre essas taxas essenciais.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-center mb-4">Dados de Ações</h2>
                <p>
                  Obtenha dados de ações atualizados a cada 3 horas. A BrInvestAPI utiliza informações fornecidas pelo serviço <a href="https://brapi.dev/" target="_blank" rel="noopener noreferrer">BrAPI</a> para manter você informado sobre as últimas mudanças no mercado de ações brasileiro.
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

export default Introduction;
