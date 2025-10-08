import styles from './NavigationTab.module.scss';

import { NavigationTabProps } from '@/shared/types/ui/navigation-tab-types.ts';

import { Link } from 'react-router-dom';


export const NavigationTab = ({ label, to, icon, iconActive, isActive } : NavigationTabProps) => {

  const image = isActive ? iconActive : icon;

  return (
    <Link to={to}>
      {/* основной контейнер */}
    <div className={styles.container} >
      {/* иконка для таба */}
      <img src={image} className={styles.img} />
      {/* текст таба */}
      <p className={`${styles.text} ${isActive ? styles['text-active'] : ''}`} >
        {label}
      </p>
    </div>
    </Link>
  );
}