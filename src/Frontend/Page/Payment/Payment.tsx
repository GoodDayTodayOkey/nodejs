import * as React from 'react';
import { block } from 'bem-cn';

const b = block('payment');
const Payment = () => {
  return (
    <div className={b()}>
      Payment
    </div>
  );
}

export default Payment;
