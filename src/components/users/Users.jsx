import React from 'react';
import mentorIcon from '../../assets/mentorIcon.jpg';
import mentoredIcon from '../../assets/mentoredIcon.jpg';
import managerIcon from '../../assets/managerIcon.png';
import { Link } from 'react-router-dom';

const Users = () => {

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 text-primary">Painéis de Gerenciamento</h2>
            <div className="row g-4">
                {/* Card Mentores */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <img src={mentorIcon} className="card-img-top" alt="Mentores" />
                        <div className="card-body">
                            <h5 className="card-title">Gerenciar Mentores</h5>
                            <p className="card-text">
                                Visualize e administre os dados dos mentores.
                            </p>
                            <Link to="/users/mentor" className="btn btn-primary">Acessar painel</Link>
                        </div>
                    </div>
                </div>

                {/* Card Mentorados */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <img src={mentoredIcon} className="card-img-top" alt="Mentorados" />
                        <div className="card-body">
                            <h5 className="card-title">Gerenciar Mentorados</h5>
                            <p className="card-text">
                                Visualize e administre os dados dos mentorados.
                            </p>
                            <Link to="/users/mentored" className="btn btn-primary">Acessar painel</Link>
                        </div>
                    </div>
                </div>

                {/* Card Suporte */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <img src={managerIcon} className="card-img-top" alt="Suporte" />
                        <div className="card-body">
                            <h5 className="card-title">Gerenciar Suporte</h5>
                            <p className="card-text">
                                Visualize e administre os dados dos suportes.
                            </p>
                            <Link to="/users/manager" className="btn btn-primary">Acessar painel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
