import { useEffect, useState } from 'react';
import { Button } from 'antd';
import styles from './common.module.scss';

export interface AdjustedQuantityProps {
  id?: number;
  handleQuantity?: any;
}

export function AdjustedQuantity({
  id,
  handleQuantity,
}: AdjustedQuantityProps) {
  const [quantity, setQuantity] = useState(1);

  const handleCount = (prefix: number) => {
    switch (prefix) {
      case 1:
        if (quantity < 2) return;
        setQuantity(quantity - 1);
        handleQuantity(quantity - 1);
        break;
      case 2:
        setQuantity(quantity + 1);
        handleQuantity(quantity + 1);

        break;
    }
  };

  return (
    <div className={styles['row_center']}>
      <Button
        onClick={() => handleCount(1)}
        className={styles['button_custom_quantity']}
      >
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
          <path
            d="M0.12224 2C0.12224 1.37868 0.62592 0.875 1.24724 0.875L14.7472 0.875C15.3686 0.875 15.8722 1.37868 15.8722 2C15.8722 2.62132 15.3686 3.125 14.7472 3.125L1.24724 3.125C0.62592 3.125 0.12224 2.62132 0.12224 2Z"
            fill="#798395"
          />
        </svg>
      </Button>
      <div className={styles['quantity_picker']}>{quantity}</div>
      <Button
        onClick={() => handleCount(2)}
        className={styles['button_custom_quantity']}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.24724 6.875C0.62592 6.875 0.12224 7.37868 0.12224 8C0.12224 8.62132 0.62592 9.125 1.24724 9.125L6.87233 9.125L6.87233 14.75C6.87233 15.3713 7.37601 15.875 7.99733 15.875C8.61865 15.875 9.12233 15.3713 9.12233 14.75L9.12233 9.125H14.7472C15.3686 9.125 15.8722 8.62132 15.8722 8C15.8722 7.37868 15.3686 6.875 14.7472 6.875L9.12233 6.875L9.12233 1.25C9.12233 0.628681 8.61865 0.125001 7.99733 0.125C7.37601 0.125 6.87233 0.628681 6.87233 1.25L6.87233 6.875L1.24724 6.875Z"
            fill="#798395"
          />
        </svg>
      </Button>
    </div>
  );
}

export default AdjustedQuantity;
