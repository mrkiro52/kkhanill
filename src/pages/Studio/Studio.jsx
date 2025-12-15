import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Studio.scss';
import { casesData } from '../../data/cases';

export default function Studio() {
  const navigate = useNavigate();

  const categories = [
    'Конверсионный лендинг',
    'Многостраничный сайт',
    'Веб приложение',
    'Мобильное приложение (IOS/Android)',
    'Телеграм бот',
    'CRM система',
    'Графический дизайн',
    'Монтаж видео',
    'Создание игр',
    'Telegram Mini Apps',
    'Автоматизация',
    'Внедрение ИИ'
  ];

  const filteredCases = casesData;

  const handleCaseClick = (caseId) => {
    navigate(`/cases/${caseId}`);
  };

  return (
    <div className="Studio">
      {/* HERO SECTION */}
      <section className="studio-hero">
        <div className="studio-hero-content">
          <div className="studio-badge">
            <span className="badge-icon">✨</span>
            <span>Студия разработки IT продуктов Киреева Ханиля</span>
          </div>

          <h1 className="studio-title">
            IT решения, которые <span className="highlight">работают</span>
          </h1>

          <p className="studio-subtitle">
            Мы разрабатываем конверсионные лендинги, многостраничные сайты, веб и мобильные приложения, телеграм-боты и CRM системы. Полный цикл разработки для бизнеса любого размера. Мы не тратим время на лишние слова — только результаты для бизнеса.
          </p>

          <div className="studio-cta">
            <button className="btn btn-primary btn-lg" onClick={() => window.open('https://t.me/x_tap', '_blank')}>
              Начать проект
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => window.scrollTo({ top: document.querySelector('.cases-section')?.offsetTop, behavior: 'smooth' })}>
              Смотреть кейсы
            </button>
          </div>

          <div className="studio-features">
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <span>6+ лет опыта</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>100+ проектов</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <span>Быстрее всех</span>
            </div>
          </div>
        </div>

        <div className="studio-hero-image">
          <div className="gradient-circle gradient-1"></div>
          <div className="gradient-circle gradient-2"></div>
          <div className="gradient-circle gradient-3"></div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-header">
          <h2>Наши услуги</h2>
          <p className="section-subtitle">Полный спектр IT решений для роста вашего бизнеса</p>
        </div>

        <div className="services-grid">
          {/* 1. Конверсионный лендинг */}
          <div className="service-card service-card-priority">
            <div className="service-icon">📊</div>
            <h3>Конверсионный лендинг</h3>
            <p>Одностраничные сайты, оптимизированные для максимума заявок и продаж с вашего трафика</p>
            <ul className="service-features">
              <li>✓ A/B тестирование</li>
              <li>✓ Оптимизация конверсии</li>
              <li>✓ Аналитика и отчёты</li>
            </ul>
          </div>

          {/* 2. Многостраничный сайт */}
          <div className="service-card service-card-priority">
            <div className="service-icon">🌐</div>
            <h3>Многостраничный сайт</h3>
            <p>Полнофункциональные сайты компаний с собственной CMS, готовые к масштабированию</p>
            <ul className="service-features">
              <li>✓ Собственная админ-панель</li>
              <li>✓ SEO оптимизация</li>
              <li>✓ Интеграция платежей</li>
            </ul>
          </div>

          {/* 3. Мобильное приложение */}
          <div className="service-card service-card-priority">
            <div className="service-icon">📱</div>
            <h3>Мобильное приложение</h3>
            <p>Приложения для iOS и Android, которые приносят реальные результаты и удерживают</p>
            <ul className="service-features">
              <li>✓ iOS & Android (native)</li>
              <li>✓ Offline функциональность</li>
              <li>✓ Push-уведомления</li>
            </ul>
          </div>

          {/* 4. Телеграм-бот */}
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>Телеграм-бот</h3>
            <p>Автоматизация продаж и бизнеса через Telegram с интеграциями и аналитикой</p>
            <ul className="service-features">
              <li>✓ Автоматизация процессов</li>
              <li>✓ Интеграции с платежами</li>
              <li>✓ Аналитика и отчёты</li>
            </ul>
          </div>

          {/* 5. CRM система */}
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>CRM система</h3>
            <p>Кастомные системы управления клиентами, адаптированные под ваш бизнес-процесс</p>
            <ul className="service-features">
              <li>✓ Управление контактами</li>
              <li>✓ Автоматизация</li>
              <li>✓ API интеграции</li>
            </ul>
          </div>

          {/* 6. Графический дизайн и монтаж */}
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Графический дизайн и монтаж</h3>
            <p>Дизайн, видеомонтаж, создание контента и полная визуальная идентификация</p>
            <ul className="service-features">
              <li>✓ UI/UX дизайн</li>
              <li>✓ Видеомонтаж</li>
              <li>✓ Брендинг</li>
            </ul>
          </div>
        </div>

        <div className="cta-container">
          <button className="btn btn-primary btn-lg" onClick={() => window.open('https://t.me/x_tap', '_blank')}>
            Обсудить ваш проект
          </button>
        </div>
      </section>

      {/* CASES SECTION */}
      <section className="cases-section">
        <div className="section-header">
          <h2>Наши кейсы</h2>
          <p className="section-subtitle">Посмотрите примеры наших недавних работ</p>
        </div>

        <div className="cases-filter">
          {categories.map(category => (
            <button
              key={category}
              className="filter-btn"
              disabled
            >
              {category}
            </button>
          ))}
        </div>

        <div className="cases-grid">
          {filteredCases.map(caseItem => (
            <div 
              key={caseItem.id} 
              className="case-card"
              onClick={() => handleCaseClick(caseItem.id)}
            >
              <div className="case-image" style={{ backgroundImage: `url(${caseItem.image})` }}>
                <div className="case-overlay">
                  <span className="case-category">{caseItem.category}</span>
                </div>
              </div>
              <div className="case-content">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
                <div className="case-footer">
                  <span className="case-year">{caseItem.year}</span>
                  <span className="case-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="why-us-section">
        <div className="section-header">
          <h2>Почему выбирают нас</h2>
          <p className="section-subtitle">Преимущества сотрудничества со студией</p>
        </div>

        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="why-us-icon">💼</div>
            <h3>Мыслим на стороне вашего бизнеса</h3>
            <p>Мы знаем что вам нужно: заявки, охваты, красивый дизайн. Делаем только необходимое, без лишнего. Каждое решение адаптировано именно под вас и ваши задачи</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">⚡</div>
            <h3>Мы делаем быстрее всех</h3>
            <p>Отточенные процессы, проверенные методики и слаженная команда позволяют нам реализовывать проекты в кратчайшие сроки без потери качества</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">💵</div>
            <h3>Решение под любой бюджет</h3>
            <p>Найдём вам оптимальное решение в рамках вашего бюджета. Главное чтобы мы друг другу подошли — о цене договоримся всегда честно и прозрачно</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">💬</div>
            <h3>Всегда на связи</h3>
            <p>Мы не пропадаем. Готовы давать отчёты хоть каждый день. Видите результаты в реальном времени и полностью понимаете процесс нашей работы</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">🔧</div>
            <h3>Полная поддержка проекта</h3>
            <p>Наша работа не заканчивается на запуске. Постоянно поддерживаем проект, помогаем с доработками, обновлениями и решаем любые вопросы на ходу</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">🎨</div>
            <h3>Владеем полным технологическим стеком</h3>
            <p>Работаем как на коде, так и с no-code конструкторами. Выбираем технологии идеально подходящие под ваш проект, а не подстраиваем проект под наши знания</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="section-header">
          <h2>Как мы работаем</h2>
          <p className="section-subtitle">Проверенный процесс разработки проектов</p>
        </div>

        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Консультация</h3>
            <p>Обсуждаем вашу идею, задачи и цели. Понимаем вашу аудиторию и вызовы</p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Планирование</h3>
            <p>Создаём дорожную карту проекта, определяем технологии и сроки</p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Дизайн</h3>
            <p>Разработка макетов, прототипов и утверждение визуального направления</p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Разработка</h3>
            <p>Кодирование, интеграции, тестирование и оптимизация производительности</p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Запуск</h3>
            <p>Развертывание на продакшен, настройка аналитики и мониторинга</p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Поддержка</h3>
            <p>Обновления, исправления, развитие функциональности и постоянная оптимизация</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="section-header">
          <h2>Давайте создадим что-то великое вместе</h2>
          <p className="section-subtitle">Свяжитесь с нами для обсуждения вашего проекта</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>kireev.khanil.bs@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Telegram</h3>
            <p>@x_tap</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Телефон</h3>
            <p>+7 977 167 60 16</p>
          </div>
        </div>

        <div className="contact-cta">
          <p>Готовы начать проект?</p>
          <button className="btn btn-primary btn-lg" onClick={() => window.open('https://t.me/x_tap', '_blank')}>
            Написать в Telegram
          </button>
        </div>
      </section>
    </div>
  );
}
