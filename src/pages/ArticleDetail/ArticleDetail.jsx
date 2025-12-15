import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articlesData } from '../../data/articles';
import './ArticleDetail.scss';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesData.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="ArticleDetail">
        <div className="case-not-found">
          <h2>Статья не найдена</h2>
          <button
            className="btn-goback"
            onClick={() => navigate(-1)}
          >
            ← Вернуться
          </button>
        </div>
      </div>
    );
  }

  // Получаем рекомендуемые статьи
  const relatedArticles = articlesData
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const fallbackArticles = articlesData
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  const recommendedArticles = relatedArticles.length > 0 ? relatedArticles : fallbackArticles;

  return (
    <div className="ArticleDetail">
      {/* Header Section */}
      <section className="article-detail-header">
        <button
          className="btn-back"
          onClick={() => navigate('/articles')}
        >
          Вернуться к статьям
        </button>

        <div className="article-detail-hero">
          <div className="article-detail-info">
            <h1>{article.title}</h1>

            <div className="article-detail-meta">
              <span className="article-detail-category">{article.category}</span>
              <span className="article-read-time">📖 {article.readTime} минут чтения</span>
            </div>
          </div>

          <div
            className="article-detail-image"
            style={{ backgroundImage: `url(${article.image})` }}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="article-detail-content">
        <div className="article-main">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />

          {/* CTA in Article */}
          <div className="article-cta">
            <div className="cta-box">
              <h3>Готовы воплотить идею в жизнь?</h3>
              <p>Свяжитесь с нами, и мы обсудим вашу идею</p>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://t.me/x_tap', '_blank')}
              >
                Написать в Telegram
              </button>
            </div>
          </div>

          {/* Share buttons */}
          <div className="article-share">
            <h4>Поделиться статьей</h4>
            <div className="share-buttons">
              <button
                className="share-btn"
                onClick={() => {
                  const url = window.location.href;
                  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`, '_blank');
                }}
                title="Поделиться в Telegram"
              >
                📱 Telegram
              </button>
              <button
                className="share-btn"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Ссылка скопирована в буфер обмена!');
                }}
                title="Скопировать ссылку"
              >
                🔗 Скопировать ссылку
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="article-detail-sidebar">
          <div className="sidebar-box">
            <h3>О статье</h3>
            <div className="sidebar-info">
              <div className="info-item">
                <span className="info-label">Категория</span>
                <span className="info-value">{article.category}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Время чтения</span>
                <span className="info-value">{article.readTime} минут</span>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary btn-discuss"
            style={{flexGrow: 0}}
            onClick={() => window.open('https://t.me/x_tap', '_blank')}
          >
            Обсудить идею
          </button>
        </aside>
      </section>

      {/* Related Articles */}
      {recommendedArticles.length > 0 && (
        <section className="related-articles">
          <div className="section-header">
            <h2>Похожие статьи</h2>
          </div>

          <div className="related-grid">
            {recommendedArticles.map(relArticle => (
              <article
                key={relArticle.id}
                className="related-card"
                onClick={() => navigate(`/articles/${relArticle.id}`)}
              >
                <div
                  className="related-image"
                  style={{ backgroundImage: `url(${relArticle.image})` }}
                />
                <div className="related-content">
                  <h4>{relArticle.title}</h4>
                  <p className="related-read-time">📖 {relArticle.readTime} минут</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
