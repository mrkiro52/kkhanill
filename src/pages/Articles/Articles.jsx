import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articlesData } from '../../data/articles';
import './Articles.scss';

export default function Articles() {
  const navigate = useNavigate();

  const handleArticleClick = (id) => {
    navigate(`/articles/${id}`);
  };

  // Получаем уникальные категории
  const categories = [...new Set(articlesData.map(a => a.category))];

  return (
    <div className="Articles">
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="hero-content">
          <h1>Полезные статьи</h1>
          <p>Разбираемся в тенденциях веб-разработки, дизайна и цифрового маркетинга</p>
          <div className="categories-list">
            {categories.map((category, index) => (
              <span key={index} className="category-tag">{category}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section">
        <div className="articles-container">
          <div className="articles-grid">
            {articlesData.map((article) => (
              <article
                key={article.id}
                className="article-card"
                onClick={() => handleArticleClick(article.id)}
              >
                <div
                  className="article-image"
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <div className="article-overlay">
                    <span className="article-category">{article.category}</span>
                  </div>
                </div>

                <div className="article-content">
                  <div className="article-header">
                    <h3>{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                  </div>

                  <div className="article-footer">
                    <span className="read-time">📖 {article.readTime} минут чтения</span>
                  </div>
                </div>

                <div className="article-link">
                  Читать →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="articles-cta">
        <div className="cta-content">
          <h2>Хотите обсудить вашу идею?</h2>
          <p>Свяжитесь с нами, и мы поможем воплотить её в жизнь</p>
          <button
            className="btn btn-primary"
            onClick={() => window.open('https://t.me/x_tap', '_blank')}
          >
            Написать в Telegram
          </button>
        </div>
      </section>
    </div>
  );
}
