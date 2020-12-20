// import * as React from 'react';
import * as React from 'react';
import { block } from 'bem-cn';
import { getDimensions } from 'Base/helpers/index';
import { Button } from 'antd';
const { useState, useEffect } = React;

interface IProps {
}


const b = block('perfomance');

const Perfomance: React.FC<IProps> = () => {

  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    getDimensions({src:'/images/main.jpg', cb: setDimensions})
  }, []);
  
  return (
    <div className={b()} style={{ height: dimensions?.height }}>
      {dimensions && (<div className={b('content')}>
        <div className={b('title')}>БУКЕТЫ ИЗ СВЕЖИХ ЦВЕТОВ</div>
        <div className={b('description')}>
          Быстрая доставка цветов в любую точку города Томска. Мы приложим все усилия, чтобы заказ букетов заняли у вас минимум времени и подарили максимум удовольствия.
        </div>
        <div className={b('button')}>
          <Button className={b('button', {type: 'round'})} type="primary">Заказать</Button>
        </div>
      </div>)}
    </div>
  );
}

export default Perfomance;
