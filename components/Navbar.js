import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const BoostrapNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="py-2">
      <Container>
        <Link href="/" passHref className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center">
            <Image src="/BrInvestAPI.png" alt="BrInvestAPI Icon" width={50} height={50} priority={true} />
            <div className="fw-bold ms-2">BrInvestAPI</div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <Link href="/docs" passHref>
                <Button variant="outline-primary" className="rounded-pill me-3">Documentação</Button>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="https://github.com/GeovaneDev/BrInvestAPI" passHref target="_blank" className="nav-link" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <span className="d-inline ms-2">GitHub</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BoostrapNavbar;
