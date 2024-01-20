"use client"

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';  // Importando o ícone do gráfico de linha
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/fundamentus/search?query=${query}&time=${timestamp}`);
      const data = await response.json();

      if (data.data.length === 0) {
        setError('Nenhum resultado encontrado. Refine sua pesquisa.');
        setSearchResults([]);
      } else {
        setError('');
        setSearchResults(data.data);
      }
    } catch (error) {
      console.error('Erro ao pesquisar ações:', error);
      setError('Ocorreu um erro ao buscar os resultados. Por favor, tente novamente.');
      setSearchResults([]);
    }
  };

  const handleResultClick = (ticker) => {
    setQuery('');
    setSearchResults([]);
    setError('');
    window.location.href = `/stock/${ticker}`;
  };

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setSearchResults([]);
    setError('');

    if (inputValue.length >= 2) {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/fundamentus/search?query=${inputValue}&time=${timestamp}`);
        const data = await response.json();

        if (data.data.length === 0) {
          setError('Nenhum resultado encontrado. Refine sua pesquisa.');
        } else {
          setError('');
          setSearchResults(data.data);
        }
      } catch (error) {
        console.error('Erro ao pesquisar ações:', error);
        setError('Ocorreu um erro ao buscar os resultados. Por favor, tente novamente.');
        setSearchResults([]);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow">
          <div className="text-center mb-4">
          <img src="/BrInvestAPI.png" alt="BrInvestAPI Icon" style={{ width: '120px', height: '120px', marginRight: '10px' }} />
            <h1 className="display-4 mb-4">BrInvestAPI</h1>
            <p className="lead">
              Transforme suas aplicações com dados em tempo real do mercado de ações brasileiro. Descubra oportunidades, tome decisões informadas e potencialize seus projetos.
            </p>
            <Link href="/docs" passHref className="btn btn-primary btn-lg mt-3">Começar</Link>
          </div>

          <div className="mt-5">
            <h2 className="text-center mb-4">Por que escolher a BrInvestAPI?</h2>
            <div className="row">
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

          <div className="mt-5">
            <h2 className="text-center mb-4">Por que a BrInvestAPI Existe?</h2>
            <p className="lead text-center">
            A BrInvestAPI foi criada para fornecer aos desenvolvedores acesso fácil e rápido a dados abrangentes e atualizados do mercado de ações brasileiro. Focando em ser gratuita e fornecer dados relativamente atualizados.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-center mb-4">Descubra Agora</h2>
            <p className="lead text-center">Encontre informações sobre suas ações favoritas. Experimente agora mesmo!</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o código da ação"
                value={query}
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleSearch}>
                  <FontAwesomeIcon icon={faSearch} /> Pesquisar
                </button>
              </div>
            </div>
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {searchResults.length > 0 && (
            <div className="mt-3">
              <h5 className="text-center mb-3">Resultados da Pesquisa:</h5>
              <ul className="list-group">
                {searchResults.map((ticker) => (
                  <li key={ticker} className="list-group-item" onClick={() => handleResultClick(ticker)}>
                    <Link href={`/stock/${ticker}`} className="text-decoration-none">{ticker}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
