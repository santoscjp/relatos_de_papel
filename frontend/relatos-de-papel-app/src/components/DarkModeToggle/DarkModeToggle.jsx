import { Button } from 'react-bootstrap';
import { useTheme } from '../../hooks/useTheme';

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button variant={theme} onClick={toggle} className="ms-2">
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
