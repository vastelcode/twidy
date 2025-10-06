import styles from './DateDisplay.module.scss';

import { getDate } from '@/shared/lib/utils/getDate.ts';

export const DateDisplay = () => {

  const {localDate, dayOfWeek} = getDate('slash');
  return (
    <section className={styles['date-display']}>
      <p className={styles['date-day-of-week']}>
        {dayOfWeek}
      </p>
      <p className={styles['date-text']}>
        {localDate}
      </p>
    </section>
  );
};