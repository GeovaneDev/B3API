"use client"
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <Image
              src="/404.png"
              alt="404 Not Found"
              className="img-fluid"
              width={600}
              height={600}
            />
            <h2 className="mt-4 display-4 fw-bold">Página não encontrada</h2>
            <p className="lead text-muted">
              A página que você está procurando pode ter sido removida ou não está mais disponível.
            </p>
            <Link href="/" className="btn btn-primary rounded-pill shadow-lg py-3">Voltar para a página inicial</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
