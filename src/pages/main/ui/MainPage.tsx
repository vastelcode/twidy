import styles from './MainPage.module.scss';

import { CreatePostButton } from '@/features/create-post/ui/index.ts';


export const MainPage = () => {
  return (
    <div className="page">
      {/* оболочка страницы */}
      <div className={styles.wrapper}>
        {/* контент */}
        <section className={styles.content}>
          {/* кнопка для создания поста */}
          <CreatePostButton/>
          
        </section>
      </div>
    </div>
  );
}