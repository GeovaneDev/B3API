"use client"
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {
  return (
    <div>
      <NextSeo
        title="BrInvestAPI - Erro 404"
        description="Página não encontrada."
        noindex={true}
        nofollow={true}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            httpEquiv: 'Strict-Transport-Security',
            content: 'max-age=63072000; includeSubdomains; preload',
          },
          {
            httpEquiv: 'X-Content-Type-Options',
            content: 'nosniff',
          },
          {
            httpEquiv: 'X-XSS-Protection',
            content: '1; mode=block',
          },
          {
            name: 'referrer',
            content: 'same-origin',
          },
          {
            name: 'set-cookie',
            content: 'HttpOnly; Secure; SameSite=Strict',
          },
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
              width={600}
              height={600}
            />
            <h2 className="mt-4">Página não encontrada</h2>
            <p className="lead">
              A página que você está procurando pode ter sido removida ou não está mais disponível.
            </p>
            <Link href="/" passHref className="btn btn-primary rounded-pill">Voltar para a página inicial</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
