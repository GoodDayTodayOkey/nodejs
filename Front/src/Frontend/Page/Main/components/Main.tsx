// import * as React from 'react';
import * as React from 'react';
import { block } from 'bem-cn';
import Carousel from 'Components/Carousel/Carousel';
import Perfomance from 'Components/Perfomance/Perfomance';
import { GET_MAIN_ITEMS_QUERY } from '../queries/queries';
const { useEffect } = React;

interface IProps {
}

const b = block('main');

const Main: React.FC<IProps> = () => {

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/socket"); 
    socket.onopen = () => {
       socket.send(JSON.stringify({query: GET_MAIN_ITEMS_QUERY('asd')}))
    };
    socket.onmessage = (e) => {
      console.log(e.data)
    };
  }, []);

  return (
      <div className={b()}>
        <Perfomance />
        <Carousel />
      </div>  
  );
}

export default Main;
