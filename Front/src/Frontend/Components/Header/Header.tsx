import * as React from 'react';
import { block } from 'bem-cn';
import {Layout, Row, Col}  from 'antd';
import {Link} from "react-router-dom";

const { Header } = Layout;
const b = block('header');
const menu = [
  <div className={b('label')}>
      <div className={b('image')}><img src={'/images/bouquet.png'} alt="Bouquet"/></div>
      <div className={b('descripion')} >
        <div className={b('row')}>Букетная</div>
        <div className={b('row')}>Цветаева</div>
        <div className={b('row', {type: "styled"})}>Мастерская</div>
    </div>
  </div>,
  <div className={b('menu-item')}><Link to="/catalog">Каталог</Link></div>,
  <div className={b('menu-item')}><Link to="/about">О нас</Link></div>,
  <div className={b('menu-item')}><Link to="/reviews">Отзывы</Link></div>,
  <div className={b('menu-item')}><Link to="/payment">Оплата и доставка</Link></div>,
  <div className={b('info', { type: 'contact' })}>
    <div className={b('phone')}>
      <img src={'/images/phone.svg'} alt="Phone"/>
    </div>
    <div className={b('number')}>
      8(3822)33-33-33
    </div>
    </div>,
  <div className={b('info', { type: 'timetable' })}>
    <div className={b('schedule')}>
      <img src={'/images/clock.svg'} alt="Phone"/>
    </div>
    <div className={b('text')}>
      Круглосуточная доставка
    </div>
  </div>,
  <div className={b('cart')}>
    <img src={'/images/cart.svg'} alt="Cart"/>
  </div>,
];

const CustomHeader = () => {
  return (
  <Header>
    <div className={b('content')}>
      {menu.map((menuItem, i ) => <React.Fragment key={i}>{menuItem}</React.Fragment>)}
    </div>
  </Header>
  );
}

export default CustomHeader;
