import './Fail.scss';

export default function Fail() {
  return (
    <div className="fail-page">
      <div className="fail-container">
        <div className="fail-icon">✕</div>
        <h1>Ошибка платежа 😞</h1>
        <p className="fail-text">
          К сожалению, платеж не прошел.
        </p>
        
        <div className="fail-reasons">
          <h2>Возможные причины:</h2>
          <ul>
            <li>❌ Недостаточно средств на карте</li>
            <li>❌ Карта заблокирована банком</li>
            <li>❌ Неверные данные карты</li>
            <li>❌ Превышен лимит операций</li>
          </ul>
        </div>

        <div className="fail-actions">
          <h2>Что дальше?</h2>
          <ol>
            <li>Проверьте данные вашей карты</li>
            <li>Убедитесь в наличии средств</li>
            <li>Обратитесь в ваш банк</li>
            <li>Попробуйте еще раз</li>
          </ol>
        </div>

        <p className="support-text">
          Нужна помощь? Свяжитесь с нами: <strong>support@kkhanill.ru</strong>
        </p>

        <div className="fail-buttons">
          <a href="/#/course" className="btn btn-secondary">
            Вернуться в курс
          </a>
          <a href="/" className="btn btn-primary">
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}
