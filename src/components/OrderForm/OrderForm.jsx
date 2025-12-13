import { useState, useEffect } from 'react';
import './OrderForm.scss';
import API_ENDPOINTS from '../../config/api';

export default function OrderForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    telegram: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('📝 Форма отправлена:', formData);
      
      const payload = {
        orderId: `order_${Date.now()}`,
        email: formData.email,
        phone: formData.phone,
      };

      console.log('💳 Инициирование платежа:');
      console.log('📤 POST /api/tbank/init-payment');
      console.log('� Payload (тело запроса):', JSON.stringify(payload, null, 2));
      
      // Отправляем данные на наш бэкенд для инициирования платежа
      const response = await fetch(API_ENDPOINTS.INIT_PAYMENT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('✅ Ответ бэкенда:', result);

      if (result.Success && result.PaymentURL) {
        console.log('🚀 Перенаправляем на платеж:', result.PaymentURL);
        // Перенаправляем на форму оплаты ТБанк
        window.location.href = result.PaymentURL;
      } else if (result.PaymentURL) {
        console.log('🚀 Перенаправляем на платеж:', result.PaymentURL);
        window.location.href = result.PaymentURL;
      } else {
        console.error('❌ Ошибка при инициировании платежа:', result);
        alert(`Ошибка при инициировании платежа: ${result.Message || 'Попробуйте еще раз.'}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('❌ Ошибка при отправке формы:', error);
      alert('Ошибка при обработке заказа. Попробуйте еще раз.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="order-form-overlay" onClick={onClose}>
      <div className="order-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        {submitSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Спасибо за заказ! 🎉</h2>
            <p>Ссылка на курс отправлена на почту <strong>{formData.email}</strong></p>
            <p className="subtext">Менеджер свяжется с тобой в течение часа через Telegram или по телефону для подтверждения.</p>
          </div>
        ) : (
          <>
            <div className="form-header">
              <h2>Получи курс за 990 руб</h2>
              <p>Заполни форму и получи моментальный доступ</p>
              
              <div className="form-timer">
                <p className="timer-label">Цена станет 4990 руб через</p>
                <div className="timer-display">
                  <span>{String(timeLeft.days).padStart(2, '0')}д</span>
                  <span>{String(timeLeft.hours).padStart(2, '0')}ч</span>
                  <span>{String(timeLeft.minutes).padStart(2, '0')}м</span>
                  <span>{String(timeLeft.seconds).padStart(2, '0')}с</span>
                </div>
                <p className="timer-note">Цена 990 рублей действует в рамках декабрьской акции в честь нового года</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Твоё имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Например: Иван"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Номер телефона *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 999-99-99"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email для доступа *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telegram">Telegram (@username) *</label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="@yourname"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Перенаправление на оплату...' : 'Получить доступ'}
              </button>

              <p className="form-agreement">
                Нажимая кнопку, ты соглашаешься с условиями использования и политикой конфиденциальности
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
