import styles from './Sidebar.module.scss';

import { NavigationTab } from '@/enteries/navigation-tab/index.ts';

import { useLocation } from 'react-router-dom';

import { AppPaths } from '@/app/providers/router/paths.ts';

import { MENU_ITEMS } from '@/shared/config/menu-items.ts';

export const Sidebar = () => {

  const location = useLocation();
  const currentPath = location.pathname as AppPaths;

  return (
    <aside className={styles.sidebar}>
      {/* навигация */}
      <nav className={styles.nav}>
        {MENU_ITEMS.map((elem,index) => (
          <NavigationTab
          {...elem}
          isActive={currentPath === elem.to}
          key={index}
          />
        ))}
      </nav>
    </aside>
  );
}