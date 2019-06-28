import React, { Component } from 'react';
const Chart = require("chart.js");

class Karma extends Component {
  componentDidMount() {
    const node = this.node;

    const myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["Trolls", "Bons messages", "Balance"],
        datasets: [
          {
            label: "KARMA",
            data: [12, 19, 7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 400, height: 150 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Karma;