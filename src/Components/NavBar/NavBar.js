import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbarstyle from './NavBar.module.css'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  className={`${navbarstyle.bgnav} d-block`}>
      <Navbar.Brand className={`${navbarstyle.logo}`} href="/">
        <img src="assets/images/logo.svg" alt="logo paris event" className='w-100' />
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link href="/" className='fw-bold'>Accueil</Nav.Link>
            <Nav.Link href="/recherche" className='text-dark'>Rechercher</Nav.Link>
            <Nav.Link href="/favoris" className='text-dark'>Favoris</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;