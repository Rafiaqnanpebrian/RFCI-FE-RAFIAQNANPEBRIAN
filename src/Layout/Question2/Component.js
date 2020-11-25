import { Button, Col, Input, Layout, Row, Typography } from "antd";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Component() {
  const [state, setState] = useState("");
  const [tmpState, setTmpState] = useState("");

  function reverse(str) {
    setTmpState(str);
    return setState(str.split("").reverse().join(""));
  }

  function undo(str) {
    setState(str);
  }

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "#282C34",
      }}
    >
      <Input
        onChange={({ target: { value } }) => setState(value)}
        style={{ height: 30, width: "35%", marginBottom: 10 }}
        placeholder="Masukan sebuah kata atau kalimat"
      />
      <Row gutter={10}>
        <Col>
          <Button onClick={() => reverse(state)} type="primary">
            Reverse
          </Button>
        </Col>
        <Col>
          <Button
            onDoubleClick={() => reverse(state)}
            onClick={() => undo(tmpState)}
            type="primary"
          >
            Undo/Redo
          </Button>
        </Col>
      </Row>
      <Title style={{ marginTop: 10, color: "white" }} level={2}>
        Output : {state}
      </Title>
      <Button type="primary">
        <Link to="/">Back</Link>
      </Button>
    </Layout>
  );
}
