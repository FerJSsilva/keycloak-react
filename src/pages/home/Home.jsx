import React from 'react';
import { Card, Col, Row } from 'antd';

const Home = () => (
  <div>
    <Row gutter={16}>
      <Col span={24}>
        <Card
          title="Main page"
          className="margin-bottom-16"
          style={{ height: '70vh' }}
          bordered={false}
        >
          Main content
        </Card>
      </Col>
    </Row>
  </div>
);

export default Home;
