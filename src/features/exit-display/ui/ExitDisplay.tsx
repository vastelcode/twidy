import styles from './ExitDisplay.module.scss';

export const ExitDisplay = () => {
  return (
    <section className={styles.container}>
      {/* линия разделения */}
      <div className={styles.line}></div>
      {/* кнопка выхода */}
      <button className={styles.btn}>Выход</button>
    </section>
  );
}