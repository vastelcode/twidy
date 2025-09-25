export { default as iconLogo } from './icon-logo.svg';

export { default as iconHome } from './icon-home.svg';
export { default as iconHomeActive } from './icon-home-active.svg';

export { default as iconSearch } from './icon-search.svg';
export { default as iconSearchActive } from './icon-search-active.svg';

export { default as iconSettings } from './icon-settings.svg';
export { default as iconSettingsActive } from './icon-settings-active.svg';

export { default as iconMessages } from './icon-messages.svg';
export { default as iconMessagesActive } from './icon-messages-active.svg';


// Дополнительно: экспорт типа для автоподстановки
export const iconNames = [
  'iconLogo',
  'iconHome',
  'iconHomeActive',
  'iconSearch',
  'iconSearchctive',
  'iconSettings',
  'iconSettingsActive',
  'iconMessages',
  'iconMessagesActive'
] as const;

export type IconName = typeof iconNames[number];