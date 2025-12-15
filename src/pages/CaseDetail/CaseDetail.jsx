import { useParams, useNavigate } from 'react-router-dom';
import { casesData } from '../../data/cases';
import './CaseDetail.scss';

export default function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseItem = casesData.find(c => c.id === parseInt(id));

  if (!caseItem) {
    return (
      <div className="CaseDetail">
        <div className="case-not-found">
          <h1>Кейс не найден</h1>
          <button className="btn-goback" onClick={() => navigate('/')}>
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  const relatedCases = casesData.filter(c => c.id !== parseInt(id)).slice(0, 3);

  return (
    <div className="CaseDetail">
      {/* HEADER */}
      <section className="case-detail-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          Вернуться на главную
        </button>
        <div className="case-detail-hero">
          <div className="case-detail-image" style={{ backgroundImage: `url(${caseItem.image})` }}></div>
          <div className="case-detail-info">
            <div className="case-detail-category">{caseItem.category}</div>
            <h1>{caseItem.title}</h1>
            <a href={caseItem.link} target="_blank" rel="noopener noreferrer">{caseItem.link}</a>
            <p className="case-detail-year">{caseItem.year}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="case-detail-content">
        <div className="content-wrapper">
          <div className="content-main">
            {/* OVERVIEW */}
            <div className="case-section">
              <h2>О проекте</h2>
              <p className="case-description">{caseItem.fullDescription}</p>
            </div>

            {/* CHALLENGE */}
            <div className="case-section">
              <h2>Вызов</h2>
              <div className="challenge-box">
                <p>{caseItem.challenge}</p>
              </div>
            </div>

            {/* SOLUTION */}
            <div className="case-section">
              <h2>Решение</h2>
              <div className="solution-box">
                <p>{caseItem.solution}</p>
              </div>
            </div>

            {/* RESULTS */}
            <div className="case-section">
              <h2>Результаты</h2>
              <div className="results-grid">
                {caseItem.results.map((result, index) => (
                  <div key={index} className="result-card">
                    <p>{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="case-section">
              <h2>Используемые технологии</h2>
              <div className="tech-list">
                {caseItem.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="content-sidebar">
            <div className="sidebar-card">
              <h3>Основная информация</h3>
              <div className="info-item">
                <span className="label">Тип проекта:</span>
                <span className="value">{caseItem.category}</span>
              </div>
              <div className="info-item">
                <span className="label">Год:</span>
                <span className="value">{caseItem.year}</span>
              </div>
              <div className="info-item">
                <span className="label">Статус:</span>
                <span className="value success">✓ Завершено</span>
              </div>
              {caseItem.link && (
                <div className="info-item">
                  <span className="label">Проект:</span>
                  <a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="value link-value">
                    Посетить сайт →
                  </a>
                </div>
              )}
            </div>

            <div className="sidebar-card">
              <h3>Заинтересованы?</h3>
              <p>Хотите создать похожий проект?</p>
              <button className="btn btn-primary btn-block" onClick={() => window.open('https://t.me/x_tap', '_blank')}>
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASES */}
      {relatedCases.length > 0 && (
        <section className="related-cases">
          <div className="section-header">
            <h2>Похожие кейсы</h2>
            <p>Посмотрите другие наши проекты</p>
          </div>

          <div className="related-cases-grid">
            {relatedCases.map(relatedCase => (
              <div
                key={relatedCase.id}
                className="case-card-small"
                onClick={() => navigate(`/cases/${relatedCase.id}`)}
              >
                <div className="case-image-small" style={{ backgroundImage: `url(${relatedCase.image})` }}>
                </div>
                <div className="case-info-small">
                  <h3>{relatedCase.title}</h3>
                  <p>{relatedCase.description}</p>
                  <span className="arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="case-cta">
        <h2>Готовы начать ваш проект?</h2>
        <p>Обсудите с нами ваши идеи и давайте создадим что-то великое вместе</p>
        <button className="btn btn-primary btn-lg" onClick={() => window.open('https://t.me/x_tap', '_blank')}>
          Написать в Telegram
        </button>
      </section>
    </div>
  );
}
