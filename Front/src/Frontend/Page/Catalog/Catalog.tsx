import * as React from 'react';
import { block } from 'bem-cn';

const b = block('catalog');
const Catalog = () => {
  return (
    <div className={b()}>
      Catalog
    </div>
  );
}

export default Catalog;
