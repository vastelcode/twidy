import styles from './Header.module.scss';

import { iconLogo } from '@/shared/assets/icons/index.ts';

import { DateDisplay } from '@/features/date-display/index.ts';
import { AcccountInfo } from '@/features/account-info/index.ts';
import { ExitDisplay } from '@/features/exit-display/index.ts';

export const Header = () => {
  return (
    // шапка страницы
    <header className={styles.header}>
      {/* основной контент */}
      <div className={styles.content}>
        {/* иконка */}
        <img src={iconLogo} alt="иконка логотипа"  className={styles.logo}/>
        {/* оболочка для контента */}
        <div className={styles.wrapper}>
          <DateDisplay/>
          <AcccountInfo/>
          <ExitDisplay/>
        </div>
      </div>
    </header>
  );
}