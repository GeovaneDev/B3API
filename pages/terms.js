import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow">
          <h1 className="display-5 mb-4">Termos de Serviço</h1>
          
          <div className="mt-4">
            <h2 className="text-center mb-4">1. Aceitação dos Termos</h2>
            <p className="lead">
              Ao acessar e usar o BrInvestAPI, você concorda com estes Termos de Serviço e com todos os termos e políticas incorporados por referência. Se você não concordar com algum destes termos, por favor, não use o serviço.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-center mb-4">2. Uso Responsável</h2>
            <p className="lead">
              Você concorda em utilizar o BrInvestAPI de maneira responsável e ética. O abuso do serviço, incluindo práticas como sobrecarga excessiva de solicitações, não é permitido.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
