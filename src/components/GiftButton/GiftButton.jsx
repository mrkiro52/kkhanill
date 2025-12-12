import { useState } from 'react';
import './GiftButton.scss';

export default function GiftButton({ onOpen }) {
  const [showModal, setShowModal] = useState(false);

  const handleGiftClick = () => {
    setShowModal(true);
  };

  const handleBuyClick = () => {
    setShowModal(false);
    onOpen();
  };

  return (
    <>
      {/* Подарок в левом нижнем углу */}
      <div className="gift-button" onClick={handleGiftClick} title="Специальное предложение!">
        <span className="gift-emoji">🎁</span>
      </div>

      {/* Модальное окно с новогодней плашкой */}
      {showModal && (
        <div className="gift-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="gift-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gift-modal-close" onClick={() => setShowModal(false)}>✕</button>
            
            <div className="gift-modal-inner">
              <div className="gift-decoration">🎄</div>
              
              <h2 className="gift-modal-title">Новогоднее предложение! 🎉</h2>
              
              <div className="gift-modal-prices">
                <div className="price-old">
                  <span className="label">Обычная цена</span>
                  <span className="amount">4990 руб</span>
                </div>
                <div className="price-divider">→</div>
                <div className="price-new">
                  <span className="label">Сейчас</span>
                  <span className="amount">990 руб</span>
                </div>
              </div>

              <p className="gift-modal-text">
                <strong>Скидка закончится после 31 декабря 2025</strong>
                <br />
                <span className="highlight">Не упусти возможность начать 2026 с новой жизни!</span>
              </p>

              <button className="btn btn-primary btn-lg btn-buy" onClick={handleBuyClick}>
                Купить по скидке за 990 руб
              </button>

              <p className="gift-modal-guarantee">
                ✅ Моментальный доступ • 💬 Поддержка • 🎁 Бонусы
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
