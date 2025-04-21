import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MentorHub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Início</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/users">Usuários</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/themes">Temas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mentorings">Mentorias</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about_us ">Sobre Nós</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;