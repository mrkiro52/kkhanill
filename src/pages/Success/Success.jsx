import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Success.scss';

export default function Success() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация проверки статуса платежа
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="success-page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Проверка платежа...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Спасибо за покупку! 🎉</h1>
        <p className="success-text">
          Ваш платеж успешно обработан
        </p>
        <p className="order-id">
          ID заказа: <strong>{orderId}</strong>
        </p>
        
        <div className="success-details">
          <h2>Что дальше?</h2>
          <ul>
            <li>✅ Ссылка на курс отправлена на вашу почту</li>
            <li>✅ Мгновенный доступ ко всем урокам</li>
            <li>✅ Поддержка от наставника в телеграме</li>
            <li>✅ Доступ к сообществу студентов</li>
          </ul>
        </div>

        <p className="support-text">
          Если вы не получили ссылку, проверьте папку "Спам" в почте.
          <br />
          <strong>Служба поддержки:</strong> support@kkhanill.ru
        </p>

        <a href="/" className="btn btn-primary">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
