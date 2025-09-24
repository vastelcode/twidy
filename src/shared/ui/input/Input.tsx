import styles from './Input.module.scss';

import { InputProps } from '@/shared/types/ui/input-types.ts';

export const Input = ({className,...rest} : InputProps) => {
  return (
    <input 
    {...rest} 
    className={`${styles.input} ${className || ''}`}
    />
  );
}