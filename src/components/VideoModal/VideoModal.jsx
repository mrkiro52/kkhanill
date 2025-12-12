import './VideoModal.scss';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="video-wrapper">
          {/* Здесь подставь ссылку на своё видео */}
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Вводное видео курса"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-info">
          <h3>Вводное видео: Как начать работать на себя в IT от @kkhanill</h3>
          <p>В этом видео ты узнаешь базовые принципы, которые помогли сотням людей начать зарабатывать на фрилансе</p>
          <button className="btn btn-primary" onClick={onClose}>
            Закрыть и перейти к курсу
          </button>
        </div>
      </div>
    </div>
  );
}
