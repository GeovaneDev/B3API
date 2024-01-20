import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Stock = () => {
  const router = useRouter();
  const { ticker } = router.query;
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(`/api/fundamentus/ticket/${ticker}`);
        const data = await response.json();
        setStockData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da ação:', error);
        setLoading(false);
      }
    };

    if (ticker) {
      fetchStockData();
    }
  }, [ticker]);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="bg-light p-5 rounded shadow">
          <h1 className="display-4 text-center mb-4">Detalhes da Ação - {ticker}</h1>
          <p className="lead text-center mb-4">Esta é apenas uma mostra dos dados do Fundamentus para a empresa selecionada.</p>
          {loading ? (
            <p className="text-center">Carregando...</p>
          ) : stockData ? (
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header bg-primary text-white">Métricas Financeiras</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cotação: {stockData.Cotacao}</li>
                    <li className="list-group-item">P/L: {stockData['P/L']}</li>
                    <li className="list-group-item">P/VP: {stockData['P/VP']}</li>
                    <li className="list-group-item">PSR: {stockData.PSR}</li>
                    <li className="list-group-item">DY: {stockData.DY}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header bg-success text-white">Ratios Financeiros</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">ROIC: {stockData.ROIC}</li>
                    <li className="list-group-item">ROE: {stockData.ROE}</li>
                    <li className="list-group-item">Div. Yield: {stockData['Div.Yield']}</li>
                    <li className="list-group-item">Cresc. 5 anos: {stockData['Cresc.5anos']}</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-danger">Não foi possível carregar os dados. Tente novamente mais tarde.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Stock;
