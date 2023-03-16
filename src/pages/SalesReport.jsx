import React from 'react';
import { Column } from '@ant-design/charts';


const data = [
  { time: '8AM', sales: 10 },
  { time: '9AM', sales: 100 },
  { time: '10AM', sales: 30 },
  { time: '11AM', sales: 40 },
  { time: '12PM', sales: 200 },
  { time: '1PM', sales: 300 },
  { time: '2PM', sales: 200 },
  { time: '3PM', sales: 100 },
  { time: '4PM', sales: 100 },
  { time: '5PM', sales: 247 },
];

const config = {
  data,
  xField: 'time',
  yField: 'sales',
  yAxis: {
    label: {
      formatter: (value) => `${value} `,
    },
  },
  xAxis: {
    label: {
      autoRotate: true,
      autoHide: true,
    },
  },
  color: '#3B3A82',
  columnStyle: {
    height: 50, // Add a height property to set the height of the column bars
    width: 10, // Add a width property to set the width of the column bars
    borderRadius: 50, // Add a borderRadius property to set the border radius of the column bars
  },
};


const SalesReport = () => {
  return  <Column {...config} />
  
};

export default SalesReport;