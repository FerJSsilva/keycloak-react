import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Dropdown, Icon, Layout, Menu, Row } from 'antd';

const { Header } = Layout;

class HeaderComponent extends Component {
  static propTypes = {
    keycloak: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    keycloak: {},
  };

  logoutUser = () => {
    if (this.props.keycloak) {
      this.props.keycloak.logout();
    }
  }

  menu = (
    <Menu>
      <Menu.Item key="0">
        <button onClick={this.logoutUser}>logout</button>
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
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
              <Dropdown overlay={this.menu} trigger={['click']}>
                <span style={{ marginLeft: '16px' }}>
                  Welcome {this.props.keycloak && this.props.keycloak.tokenParsed.name}<Icon type="down" />
                </span>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapStateToProps = ({ keycloak }) => ({
  keycloak,
});

export default connect(mapStateToProps)(HeaderComponent);
