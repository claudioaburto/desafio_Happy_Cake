import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="navbar_edition">
      <Container className="container_edition">
        <div className="views_edition">
        <Link to="/" className="text-white ms-3 text-decoration-none" >
          🏠 Home
        </Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          📕 Contacto
        </Link>
        </div>
        <Navbar.Brand className="navbar_brand">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;

