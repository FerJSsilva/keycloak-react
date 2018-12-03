import React from 'react';
import { Col, Dropdown, Icon, Layout, Menu, Row } from 'antd';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="blank" href="https://github.com/FerJSsilva/Odds-Reactor">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="blank" href="https://github.com/FerJSsilva/Odds-Reactor">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const HeaderComponent = () => (
  <Header
    className="custom-header"
  >
    <Row>
      <Col span={12} offset={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <h1>React Keycloak App</h1>
        </div>
      </Col>
      <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="user-info">
          <Dropdown overlay={menu} trigger={['click']}>
            <span style={{ marginLeft: '16px' }}>
              user name <Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </Col>
    </Row>
  </Header>
);

export default HeaderComponent;
