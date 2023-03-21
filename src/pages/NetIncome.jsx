import React from 'react';
import { Line } from '@ant-design/charts';
import './net.css'
const data = [
    { month: 'SEP 2022', netIncome: 0 },
    { month: 'OCT 2022', netIncome: 0 },
    { month: 'NOV 2022', netIncome: 1 },
    { month: 'DEC 2022', netIncome: 2 },
    { month: 'JAN 2023', netIncome: 5 },
    { month: 'FEB 2023', netIncome: 31 },
];
const NetIncome = () => {
    const config = {
        data,
        xField: 'month',
        yField: 'netIncome',
        height: 400,
        title: {
            text: 'Net Income Per Month',
        },
        color: 'rgba(27, 89, 248, 1)',
        lineStyle: {
            lineWidth: 7, // Add a lineWidth property to set the width of the line chart
        },
    };
    return (
        <div >
            <Line {...config} />
            <div style={{
                position: 'absolute',
                backgroundColor: '#ffffff',
                border: '1px solid #dddddd',
                padding: 20,
                textAlign: 'center',
                background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
                borderRadius: 10,
                marginLeft: '500px',
                width: 238,
                height: 178,
                left: 100,
                top: 238,
            }}>
                <h2 className="net-income-month">FEB 2023</h2>
                <p className="net-income-amount">₱31</p>
                <p className="net-income-description">Net Income for February 2023</p>
            </div>
        </div >
    );
};
export default NetIncome;
