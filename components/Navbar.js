import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/BrInvestAPI.png" alt="BrInvestAPI Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <span className="fw-bold">BrInvestAPI</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/docs" passHref className="nav-link btn btn-outline-primary active">Documentação</Link>
            </li>
            <li className="nav-item">
              <a href="https://github.com/seu-username/seu-repositorio" target="_blank" className="nav-link" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
