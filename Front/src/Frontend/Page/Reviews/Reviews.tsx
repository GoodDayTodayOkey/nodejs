import * as React from 'react';
import { block } from 'bem-cn';

const b = block('reviews');
const Reviews = () => {
  return (
    <div className={b()}>
      Reviews
    </div>
  );
}

export default Reviews;
