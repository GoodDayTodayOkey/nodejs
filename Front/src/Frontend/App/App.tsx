

import * as React from 'react';
import { block } from 'bem-cn';
import { Route, Switch } from 'react-router-dom';
import routes from 'Routes/routes';
import NoMatch from 'Page/NoMatch/NoMatch';
import Header from 'Components/Header/Header';
import {Layout}  from 'antd';

const {Sider, Content } = Layout;
const b = block('app');

const App = () => {
  return (
    <Layout className={b()}>
      <Header/>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Switch>
            {routes.map(({path, exact, component: C, ...rest}) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) =>(<C {...props} {...rest} />)}
              />
            ))}
            <Route render={(props) =>(<NoMatch {...props} />)} />
          </Switch>
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}

export default App;
