import { useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCasesClick = () => {
    if (location.pathname === '/') {
      // На главной - плавно скролим к кейсам
      const casesSection = document.querySelector('.cases-section');
      if (casesSection) {
        casesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // На другой странице - переходим на главную и скролим
      navigate('/');
      setTimeout(() => {
        const casesSection = document.querySelector('.cases-section');
        if (casesSection) {
          casesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/x_tap', '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <a href="/" className="nav-link">
            Главная
          </a>
          <button className="nav-link nav-button" onClick={handleCasesClick}>
            Кейсы
          </button>
          <a href="/articles" className="nav-link">
            Статьи
          </a>
        </nav>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn btn-primary btn-contact" onClick={handleTelegramClick}>
            СВЯЗАТЬСЯ
          </button>
          <button
            className="btn btn-telegram"
            onClick={() => window.open('https://t.me/kiro_team', '_blank')}
            type="button"
          >
            ТГК KIRO TEAM
          </button>
        </div>
      </div>
    </header>
  );
}
