import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Presale.scss";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";

const GOOGLE_SHEET_URL = "https://kkhanill-backend.vercel.app/api/presale-signup";

export default function Presale() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    telegram: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!formData.name || !formData.phone || !formData.email) {
      setError("Пожалуйста, заполните все обязательные поля");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          telegram: formData.telegram || "",
        }),
      });

      const result = await response.json();
      console.log("Presale submission result:", result);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", telegram: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.error || "Ошибка при отправке");
      }
    } catch (err) {
      setError("Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
      console.error("Presale signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const launchDate = new Date("2025-12-15");
  const today = new Date();
  const daysUntilLaunch = Math.ceil((launchDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="Presale">
      {/* HERO SECTION */}
      <section className="hero hero--presale">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⏰</span>
            <span>Предзапись открыта — запишись до старта продаж</span>
          </div>

          <h1 className="hero-title">
            Начни работать на себя<br />
            <span className="highlight">в IT прямо сейчас</span>
          </h1>

          <p className="hero-subtitle">
            Предзапись на курс дает тебе эксклюзивный бонус — 
            <strong> бесплатный созвон-консультацию</strong> с Киреевым Ханилем.
            <br />
            Разберемся в твоих знаниях, целях и составим индивидуальный план развития.
          </p>

          <div className="presale-highlight">
            <div className="presale-highlight__item">
              <span className="presale-highlight__icon">🎯</span>
              <div>
                <h3>Старт продаж</h3>
                <p>15 декабря 2025</p>
              </div>
            </div>
            <div className="presale-highlight__item">
              <span className="presale-highlight__icon">⏳</span>
              <div>
                <h3>Осталось дней</h3>
                <p>{daysUntilLaunch > 0 ? daysUntilLaunch : 0}</p>
              </div>
            </div>
          </div>

          <div className="hero-cta" style={{ marginTop: "30px" }}>
            <button 
              className="btn btn-primary btn-lg" 
              onClick={() => window.scrollTo({ top: document.querySelector('.presale-form-container').offsetTop, behavior: 'smooth' })}
            >
              Записаться на предзапись
            </button>
            <button 
              className="btn btn-secondary btn-lg" 
              onClick={() => navigate('/#/course')}
            >
              Узнать о курсе подробнее
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="gradient-circle gradient-1"></div>
          <div className="gradient-circle gradient-2"></div>
        </div>
      </section>

      {/* ФОРМА ЗАПИСИ */}
      <section className="presale-form-container">
        <div className="presale-form-wrapper">
          <div className="presale-form-header">
            <h2 className="presale-form-title">🎯 Запишись на предзапись</h2>
            <p className="presale-form-subtitle">
              Получи бесплатный созвон с Ханилем и узнай свой персональный план обучения
            </p>
          </div>

          {isSubmitted ? (
            <div className="presale-success">
              <div className="presale-success-icon">✅</div>
              <h3>Заявка принята! 🎉</h3>
              <p className="presale-success-main">
                Спасибо за интерес к курсу! Мы скоро свяжемся с вами.
              </p>
              <div className="presale-success-details">
                <p>📧 <strong>На email:</strong> Отправим все подробности</p>
                <p>📱 <strong>На телефон:</strong> Назначим время консультации</p>
                <p>💬 <strong>Telegram:</strong> Добавим в закрытый чат с обновлениями</p>
              </div>
              <p className="presale-success-note">Проверьте папку "Спам" в почте на всякий случай</p>
            </div>
          ) : (
            <form className="presale-form" onSubmit={handleSubmit}>
              <div className="presale-form-group">
                <label htmlFor="name" className="presale-label">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Петров"
                  className="presale-input"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="presale-form-group">
                <label htmlFor="phone" className="presale-label">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  className="presale-input"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="presale-form-group">
                <label htmlFor="email" className="presale-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ваша@почта.com"
                  className="presale-input"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="presale-form-group">
                <label htmlFor="telegram" className="presale-label">
                  Telegram <span className="presale-optional">(опционально)</span>
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="@your_username"
                  className="presale-input"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="presale-error">
                  <span className="presale-error-icon">⚠️</span>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-xl" 
                disabled={isLoading}
                style={{ width: "100%", marginTop: "16px" }}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Отправляю заявку...
                  </>
                ) : (
                  <>✨ Записаться на консультацию</>
                )}
              </button>

              <p className="presale-form-consent">
                Нажимая кнопку, вы даёте согласие на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
