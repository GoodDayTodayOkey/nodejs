import * as React from 'react';
import { block } from 'bem-cn';
import { Card } from 'antd';
import ItemsCarousel from 'react-items-carousel';
const { useState } = React;

const b = block('carousel');

const cards = [
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div>Опора1</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <div>Опора2</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div>Опора3</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <div>Опора4</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div>Опора5</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  <div>Опора6</div>
  </Card>,
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div>Опора7</div>
  </Card>
];

const CustomCarousel = () => {
  const [activeCaruselItem, setActiveCaruselItem] = useState(0);

  return (
    <div className={b()}>
      <div className={b('title')}>ПОПУЛЯРНЫЕ БУКЕТЫ</div>
      <div style={{width: 1200}}>
      <ItemsCarousel
        // Placeholder configurations
        // enablePlaceholder
        numberOfPlaceholderItems={5}
        // minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={5}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={setActiveCaruselItem}
        activeItemIndex={activeCaruselItem}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={true}
      >
        {cards.map(card =>card)}
      </ItemsCarousel>
      </div>
    </div>
  );
}

export default CustomCarousel;
