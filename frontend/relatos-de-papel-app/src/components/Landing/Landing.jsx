import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing" onClick={() => navigate('/home')}>
      <h1 className="landing__title">Relatos de Papel</h1>
      <p className="landing__subtitle">Descubre historias que transforman.</p>
    </div>
  );
};

export default Landing;
