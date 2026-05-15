import { useState } from 'react'; // Добавили импорт useState
import styles from './Header.module.css';

export function Head() {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logoImg}
                        src={''}
                        alt="Логотип компании"
                    />
                </div>
                <div className={styles.corpName}>
                    Денис лох
                </div>
                <div className={styles.menu}>
                    <nav className={styles.nav}>
                        <a href="#home" className={styles.link}>Главная</a>
                        <a href="#services" className={styles.link}>Услуги</a>
                        <a href="#about" className={styles.link}>О нас</a>
                        <a href="#contact" className={styles.link}>Контакты</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
