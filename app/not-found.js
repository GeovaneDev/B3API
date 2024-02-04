"use client"
import Link from 'next/link';
import Image from 'next/image'
import { DefaultSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {
  return (
    <div>
      <DefaultSeo
        title="BrInvestAPI - Erro 404"
        description="Página não encontrada."
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'robots',
            content: 'noindex, nofollow',
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
      />
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <Image
              src="/404.png"
              alt="404 Not Found"
              className="img-fluid"
              width={1000}
              height={1000}
            />
            <h2>Página não encontrada</h2>
            <p className="lead">
              A página que você está procurando pode ter sido removida ou não está mais disponível.
            </p>
            <Link href="/" className="btn btn-primary">Voltar para a página inicial</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
