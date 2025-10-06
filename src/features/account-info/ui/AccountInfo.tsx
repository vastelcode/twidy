import styles from './AcccountInfo.module.scss';

import { imageAvatar } from '@/shared/assets/images/index.ts';

export const AcccountInfo = () => {
  return (
    <section className={styles.container}>
      {/* оболочка для аватарки */}
      <div className={styles.wrapper}>
        <img src={imageAvatar} alt="аватарка" className={styles.avatar} />
        {/* кружок для обозначения онлайна */}
        <div className={styles['circle-online']}></div>
      </div>
      {/* текст для отображения имени */}
      <p className={styles['text-fullname']}>
        Максим Васильев
      </p>
    </section>
  );
}