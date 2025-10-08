// все пути приложения в одном месте
export const RoutePaths = {
  LOGIN: {
    path: '/login',
    label: 'Вход'
  },
  MAIN: {
    path: '/',
    label: 'Главная'
  },
  MESSAGES: {
    path: '/messages',
    label: 'Сообщения'
  },
  SEARCH: {
    path: '/search',
    label: 'Поиск'
  },
  SETTINGS: {
    path: '/settings',
    label: 'Настройки'
  },
  NOT_FOUND: '*'
} as const;

// тип ПУТЕЙ приложения
export type AppPaths = {
  [K in keyof typeof RoutePaths]: 
    typeof RoutePaths[K] extends { path: string } 
      ? typeof RoutePaths[K]['path']
      : typeof RoutePaths[K];
}[keyof typeof RoutePaths];

export type AppLabels = {
  [K in keyof typeof RoutePaths]: 
    typeof RoutePaths[K] extends { label: string } 
      ? typeof RoutePaths[K]['label']
      : typeof RoutePaths[K];
}[keyof typeof RoutePaths];