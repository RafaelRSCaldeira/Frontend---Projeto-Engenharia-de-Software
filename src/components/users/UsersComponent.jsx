import React from 'react';
import supportIcon from '../../assets/supportIcon.png'
import mentoredIcon from '../../assets/mentoredIcon.jpg'
import mentorIcon from '../../assets/mentorIcon.jpg'

const UsersComponent = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Conheça nossas opções</h2>
      <div className="row g-4">
        {/* Card Mentores */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={mentorIcon} className="card-img-top" alt="Mentores" />
            <div className="card-body">
              <h5 className="card-title">Mentores</h5>
              <p className="card-text">
                Conecte-se com especialistas que irão te orientar no seu crescimento pessoal e profissional.
              </p>
              <a href="#" className="btn btn-primary">Saiba mais</a>
            </div>
          </div>
        </div>

        {/* Card Mentorados */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={mentoredIcon} className="card-img-top" alt="Mentorados" />
            <div className="card-body">
              <h5 className="card-title">Mentorados</h5>
              <p className="card-text">
                Receba apoio de profissionais experientes para alcançar seus objetivos de forma mais rápida.
              </p>
              <a href="#" className="btn btn-primary">Comece agora</a>
            </div>
          </div>
        </div>

        {/* Card Suporte */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <img src={supportIcon} className="card-img-top" alt="Suporte" />
            <div className="card-body">
              <h5 className="card-title">Suporte</h5>
              <p className="card-text">
                Estamos aqui para te ajudar com qualquer dúvida ou necessidade durante sua jornada.
              </p>
              <a href="#" className="btn btn-primary">Fale com a gente</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
