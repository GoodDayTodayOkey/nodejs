import * as React from 'react';
import { block } from 'bem-cn';
import { Route, Switch } from 'react-router-dom';
import routes from 'Routes/routes';
import NoMatch from 'Page/NoMatch/NoMatch';
import {Layout}  from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const b = block('app');
const App = () => {
  return (
      <Footer>Footer</Footer>
  );
}

export default App;
