import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointsValue=props.dataPoints.map(dataPoints=>dataPoints.value);
    const totalMaximum=Math.max(...dataPointsValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
