import { useState, useEffect } from 'react';
import './CountdownTimer.scss';

export default function CountdownTimer() {
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
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      <p className="countdown-label">старая цена вернется через</p>
      <div className="countdown-display">
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-label-unit">Дней</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label-unit">Часов</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label-unit">Минут</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label-unit">Секунд</span>
        </div>
      </div>
    </div>
  );
}
