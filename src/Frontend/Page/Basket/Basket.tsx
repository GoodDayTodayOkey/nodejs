import * as React from 'react';
import { block } from 'bem-cn';

const b = block('basket');
const Basket = () => {
  return (
    <div className={b()}>
      Basket
    </div>
  );
}

export default Basket;

