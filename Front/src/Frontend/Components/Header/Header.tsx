import * as React from 'react';
import { block } from 'bem-cn';
import {Link} from "react-router-dom";

const b = block('header');
const menu = [
  <div className={b('label')}>
      <div className={b('image')}><Link to="/"><img src={'/images/label.png'} alt="Bouquet"/></Link></div>
      <div className={b('descripion')} >
      <Link to="/">
        <div className={b('row')}>Букетная</div>
        <div className={b('row', {type: "styled"})}>Цветаева</div>
        <div className={b('row')}>Мастерская</div>
        </Link>
    </div>
  </div>,
  <div className={b('menu-item')}>
    <div className={b('catalog')}>
      <div className={b('catalog', {purpose: 'link'})} >
        <Link to="/catalog">Каталог</Link>
      </div>
    </div>
  </div>,
  <div className={b('menu-item')}>
    <div className={b('about')}>
      <div className={b('about', {purpose: 'link'})} >
        <Link to="/about">О&nbsp;нас</Link>
      </div>
    </div>
  </div>,
  <div className={b('menu-item')}>
    <div className={b('reviews')}>
      <div className={b('reviews', {purpose: 'link'})} >
        <Link to="/reviews">Отзывы</Link>
      </div>  
    </div>
  </div>,
  <div className={b('menu-item')}>
    <div className={b('payment', {purpose: 'link'})} >
      <div className={b('payment', {purpose: 'link'})} >
        <Link to="/payment">Оплата&nbsp;и&nbsp;доставка</Link>
      </div>
    </div>
  </div>,
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
    <div className={b('content')}>
      {menu.map((menuItem, i ) => <React.Fragment key={i}>{menuItem}</React.Fragment>)}
    </div>
  );
}

export default CustomHeader;
