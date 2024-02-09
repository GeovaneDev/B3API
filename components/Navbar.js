import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const BoostrapNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link href="/" passHref className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center">
            <Image src="/BrInvestAPI.png" alt="BrInvestAPI Icon" width={50} height={50} />
            <div className="fw-bold ms-2">BrInvestAPI</div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <Link href="/docs" passHref>
                <Button variant="outline-primary" className="rounded-pill">Documentação</Button>
              </Link>
            </Nav.Item>
            <Nav.Item className="d-lg-none">
              <a href="https://github.com/GeovaneDev/BrInvestAPI" target="_blank" className="nav-link" rel="noopener noreferrer">
                <span><FontAwesomeIcon icon={faGithub} size="2x" /> Github</span>
              </a>
            </Nav.Item>
            <Nav.Item className="d-none d-lg-block">
              <a href="https://github.com/GeovaneDev/BrInvestAPI" target="_blank" className="nav-link" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BoostrapNavbar;
