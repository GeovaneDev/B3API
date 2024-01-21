import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Docs = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <Link href="/docs" passHref className="list-group-item list-group-item-action">Documentação</Link>
              <Link href="/docs/introduction" passHref className="list-group-item list-group-item-action">Introdução</Link>
              <Link href="/docs/endpoints" passHref className="list-group-item list-group-item-action">Endpoints</Link>
            </div>
          </div>

          <div className="col-md-9">
            <div className="bg-light p-5 rounded shadow">
              <h1 className="display-4 text-center mb-4">Documentação da API</h1>

              <div className="alert alert-warning" role="alert">
                A BrInvestAPI está em desenvolvimento. Se encontrar bugs ou tiver sugestões, por favor, reporte-os em nossos{' '}
                <a href="https://github.com/GeovaneDev/BrInvestAPI/issues" className="fw-bold text-decoration-none">Issues no GitHub</a>
                .
              </div>

              <p className="lead">
                Bem-vindo à documentação oficial da BrInvestAPI. Antes de começar, recomendamos que você leia nossos{' '}
                <Link href="/terms" passHref className="fw-bold text-decoration-none">Termos de Uso</Link>
                . A BrInvestAPI fornece dados do mercado de ações brasileiro e não requer autenticação para acesso.
              </p>

              <div className="border-top mt-4 pt-4">
                <h2 className="mb-4">
                  <Link href="/docs/introduction" passHref className="text-decoration-none">Introdução</Link>
                </h2>
                <p>Uma visão geral da API e suas principais funcionalidades.</p>
              </div>

              <div className="border-top mt-4 pt-4">
                <h2 className="mb-4">
                  <Link href="/docs/endpoints" passHref className="text-decoration-none">Endpoints</Link>
                </h2>
                <p>Lista e descrição dos endpoints disponíveis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
