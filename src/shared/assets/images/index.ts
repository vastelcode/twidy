export { default as imageAvatar } from './image-avatar.png';



// Дополнительно: экспорт типа для автоподстановки
export const imageNames = [
  'imageAvatar'
] as const;

export type ImageName = typeof imageNames[number];