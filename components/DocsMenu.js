import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faInfoCircle, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';

const DocsMenu = () => {
  const router = useRouter();

  return (
    <div className="col-md-3">
      <div className="bg-light p-4 rounded shadow">
        <h3 className="text-center mb-4">
          <Link href="/docs" passHref className="text-decoration-none text-dark">Documentação</Link>
        </h3>
        <ul className="list-group list-group-flush">
          <li className={`list-group-item border-0 rounded-pill ${router.pathname === '/docs/introduction' ? 'active rounded-pill text-light' : ''}`}>
            <Link href="/docs/introduction" passHref className={`text-decoration-none text-dark rounded-pill d-block p-2 ${router.pathname === '/docs/introduction' ? 'bg-primary text-white' : ''}`} style={{ fontSize: '1.1rem' }}><FontAwesomeIcon icon={faInfoCircle} /> Introdução</Link>
          </li>
          <li className={`list-group-item border-0 rounded-pill ${router.pathname === '/docs/endpoints' ? 'active rounded-pill text-light' : ''}`}>
            <Link href="/docs/endpoints" passHref className={`text-decoration-none text-dark rounded-pill d-block p-2 ${router.pathname === '/docs/endpoints' ? 'bg-primary text-white' : ''}`} style={{ fontSize: '1.1rem' }}><FontAwesomeIcon icon={faLink} /> Endpoints</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DocsMenu;
