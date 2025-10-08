import { RoutePaths, AppPaths, AppLabels } from "@/app/providers/router/paths.ts";

import {
  iconHome,
  iconHomeActive,
  iconMessages,
  iconMessagesActive,
  iconSearch,
  iconSearchActive,
  iconSettings,
  iconSettingsActive
} from '@/shared/assets/icons/index.ts';



// Типизация пунктов меню
interface MenuItem {
  to: AppPaths;
  icon: string;
  iconActive: string;
  label: AppLabels;
}



// Конфигурация меню в одном месте
export const MENU_ITEMS: MenuItem[] = [
  { 
    to: RoutePaths.MAIN.path,
    icon: iconHome,
    iconActive: iconHomeActive,
    label: RoutePaths.MAIN.label
  },
  { 
    to: RoutePaths.MESSAGES.path,
    icon: iconMessages,
    iconActive: iconMessagesActive,
    label: RoutePaths.MESSAGES.label
  },
  { 
    to: RoutePaths.SEARCH.path,
    icon: iconSearch,
    iconActive: iconSearchActive,
    label: RoutePaths.SEARCH.label
  },
  { 
    to: RoutePaths.SETTINGS.path,
    icon: iconSettings,
    iconActive: iconSettingsActive,
    label: RoutePaths.SETTINGS.label
  }
];