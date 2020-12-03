import * as React from 'react';
import { block } from 'bem-cn';

const b = block('goods');
const Goods = () => {
  return (
    <div className={b()}>
      Goods
    </div>
  );
}

export default Goods;
