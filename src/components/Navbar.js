import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ExampleApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* O <Link> substitui a tag <a> para links internos à páginas do seu site em React. No lugar de `href` usamos `to` para dizer a rota que usuário será redirecionado, e passamos o texto entre as tags de abertura e fechamento. O link aceita todos os outros atributos nativos do <a>, como `className` ou `title`  */}
              <Link className="nav-link" to="/contact">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comidas">
                Comidas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
