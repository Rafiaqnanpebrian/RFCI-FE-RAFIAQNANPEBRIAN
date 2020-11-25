import { Button, Typography } from "antd";

import Layout from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import React from "react";

const { Title } = Typography;

export default function Component() {
  var a = [4, 9, 7, 5, 8, 9, 3];

  function numberSorting(a) {
    var swapped;
    var count = 0;
    do {
      swapped = false;
      for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
          var temp = a[i];
          a[i] = a[i + 1];
          a[i + 1] = temp;
          swapped = true;
          count += 1;
          console.log("[" + [a[i], a[i + 1]] + "]" + " -> " + a);
        }
      }
    } while (swapped);
    return count;
  }
  console.log("Jumlah swap : " + numberSorting(a));

  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#282C34",
      }}
    >
      <Title style={{ color: "white" }} level={3}>
        Hasil soal nomor 2 bisa dilihat di console
      </Title>
      <Title style={{ color: "white" }} level={3}>
        atau bisa dilihat{" "}
        <a href="https://repl.it/@rafiaqnanp/selectionsort#index.js">disini</a>{" "}
      </Title>
      <Button type="primary">
        <Link to="/">Back</Link>
      </Button>
    </Layout>
  );
}
