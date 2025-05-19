import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from '../components/Landing/Landing';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
   <Landing />
  );
};

export default LandingPage;
