// все пути приложения в одном месте
export const RoutePaths = {
  LOGIN: '/login',
  MAIN: '/',
  NOT_FOUND: '*'
} as const;

// тип
export type AppRoutes = typeof RoutePaths[keyof typeof RoutePaths];