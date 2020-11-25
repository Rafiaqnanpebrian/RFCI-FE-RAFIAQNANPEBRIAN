import { Button, Col, Layout, Row, Typography } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const { Title } = Typography;

export default function Component() {
  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#282C34",
      }}
    >
      <Title style={{ color: "white" }} level={1}>
        Refactory Skill Test
      </Title>
      <Title style={{ color: "white" }} level={3}>
        Rafi Aqnan Pebrian
      </Title>
      <Row gutter={10}>
        <Col>
          <Button type="primary">
            <Link to="/question-1">Question 1</Link>
          </Button>
        </Col>
        <Col>
          <Button type="primary">
            <Link to="/question-2">Question 2</Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}
