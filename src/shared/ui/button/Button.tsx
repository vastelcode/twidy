import styles from './Button.module.scss';

import { ButtonProps } from '@/shared/types/ui/button-types.ts';

export const Button = ({children, className, ...rest} : ButtonProps) => {
  return (
    <button 
    className={`${styles.btn} ${className || ''}`}
    {...rest}
    >
      {children}
    </button>
  );
}