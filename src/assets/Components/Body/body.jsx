import { useState } from 'react';
import styles from './body.module.css';

const JDM_CARS = [
  {
    name: "Nissan Skyline GT-R (R34)",
    year: "1999-2002",
    engine: "RB26DETT 2.6L Twin-Turbo",
    power: "276-320+ hp",
    description: "Легендарный Godzilla. Икона JDM, прославилась в Fast & Furious.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nissan_Skyline_GT-R_R34.jpg/800px-Nissan_Skyline_GT-R_R34.jpg"
  },
  {
    name: "Toyota Supra (Mk4)",
    year: "1993-2002",
    engine: "2JZ-GTE 3.0L Twin-Turbo",
    power: "276-320+ hp",
    description: "Король уличных гонок. Легенда благодаря тюнингу и надёжности.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Toyota_Supra_Mk4.jpg/800px-Toyota_Supra_Mk4.jpg"
  },
  {
    name: "Mazda RX-7 (FD3S)",
    year: "1992-2002",
    engine: "13B-REW 1.3L Rotary Twin-Turbo",
    power: "276 hp",
    description: "Роторный драйв. Идеальный баланс веса и мощности.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mazda_RX-7_FD.jpg/800px-Mazda_RX-7_FD.jpg"
  }
];

export function Body() {
  const [carIndex, setCarIndex] = useState(0);
  const currentCar = JDM_CARS[carIndex];

  const nextCar = () => {
    setCarIndex((prev) => (prev + 1) % JDM_CARS.length);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Японские JDM Автомобили</h1>
        <h2 className={styles.subtitle}>{currentCar.name} ({currentCar.year})</h2>
        
        <img 
          src={currentCar.image} 
          alt={currentCar.name}
          className={styles.carImage}
        />
        
        <div className={styles.specs}>
          <p><strong>Двигатель:</strong> {currentCar.engine}</p>
          <p><strong>Мощность:</strong> {currentCar.power}</p>
          <p><strong>Описание:</strong> {currentCar.description}</p>
        </div>
        
        <button onClick={nextCar} className={styles.actionBtn}>
          Следующий JDM легенда →
        </button>
      </div>
    </main>
  );
}
