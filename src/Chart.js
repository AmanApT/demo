import React from "react";
import CanvasJSReact from "./canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const options = {
    animationEnabled: true,
    backgroundColor: "#060818",
    color: "white",
    // height: "80vh",

    title: {
      //   text: "Customer Satisfaction"
    },
    subtitles: [
      {
        text: "15% Tax Burn",
        color: "#fff",
        verticalAlign: "center",
        fontSize: 32,
        fontColor: "white",
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        // color:"white",
        type: "doughnut",
        showInLegend: true,
        radius: "100%",
        innerRadius: "80%",
        indexLabelFontColor: "white",
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 30, color: "#8C30FA" },
          { name: "Very Unsatisfied", y: 20, color: "#F67712" },
          { name: "Very Satisfied", y: 30, color: "#D3F032" },
          { name: "Satisfied", y: 7, color: "#FFC439" },
          { name: "Neutral", y: 17, color: "#76FCD3" },
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
