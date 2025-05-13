import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // redirige al home después de 3 segundos
    }, 5000);

    return () => clearTimeout(timer); // limpieza
  }, [navigate]);

  return (
    <div className="landing-container" onClick={() => navigate('/home')}>
      <h1 className="landing-title">Relatos de Papel</h1>
      <p className="landing-subtitle">Descubre historias que transforman.</p>
    </div>
  );
};

export default Landing;
