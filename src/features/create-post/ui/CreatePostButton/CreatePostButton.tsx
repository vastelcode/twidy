import styles from './CreatePostButton.module.scss';

export const CreatePostButton = () => {

  const handleClick = () => {
    console.log('Создать пост!');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.content}>
        <p className={styles.text}>
          Поделитесь чем-нибудь новым
        </p>
        <p className={styles.plus}>+</p>
      </div>
    </div>
  );
}