import { useState } from 'react';
import styles from './body.module.css';

const QUOTES = [
  "Код — как стихотворение, его нужно писать красиво.",
  "Ошибки в консоли — это просто подсказки на пути к успеху.",
  "React делает фронтенд предсказуемым и увлекательным.",
  "Если что-то не работает — проверьте пути импортов!",
  "Сделай первый шаг, и дорога появится сама собой."
];

export function Body() {
  const [quote, setQuote] = useState(QUOTES[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Вдохновение на сегодня</h1>
        <p className={styles.text}>"{quote}"</p>
        <button onClick={generateQuote} className={styles.actionBtn}>
          Получить цитату
        </button>
      </div>
    </main>
  );
}
