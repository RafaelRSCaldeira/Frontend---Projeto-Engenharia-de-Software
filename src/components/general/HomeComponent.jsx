import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-primary mb-3">Bem-vindo ao MentorHub!</h1>
        <p className="lead text-secondary mb-4">
          Aqui você encontra os melhores serviços de mentoria da Internet.
          Explore nosso site e descubra tudo o que temos a oferecer!
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/users" className="btn btn-primary btn-lg shadow">
            Ver Serviços
          </Link>
          <Link to="/contato" className="btn btn-outline-primary btn-lg shadow">
            Fale Conosco
          </Link>
        </div>

        <img
          src='das'
          alt="Banner"
          className="img-fluid mt-5 rounded shadow"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
