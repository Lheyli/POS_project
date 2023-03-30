import React from 'react';
import { Row, Col, Card, Typography } from 'antd'
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
            lineWidth: 8, // Add a lineWidth property to set the width of the line chart
        },
    };
    return (
        <Card style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: '50px',
            backgroundColor: '#FFFFFF',
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
            borderRadius: '24px',
            width: '50%',
            height: '80%',
            marginLeft: '23%',
            textAlign: 'center'
        }}>
            <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Typography.Text
                        style={{
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: 20,
                            color: '#3B3A82',
                            marginTop: '10px',
                            textAlign: 'center',
                            top: 15,
                            alignItems: 'center'
                        }}
                    >
                        NET Income
                    </Typography.Text>

                    <br />
                    <Card style={{
                        right: 30,
                        top: '25px',
                        backgroundColor: '#FFFFFF',
                        background: '#F9F9FF',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                        borderRadius: '24px',
                        width: '105%',
                        height: '65%',

                        textAlign: 'center'
                    }}>
                        <Line style={{ marginTop: 50 }} {...config} /> </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <div style={{
                        marginLeft: 50,
                        marginTop: 50,
                        backgroundColor: '#ffffff',
                        border: '1px solid #dddddd',
                        padding: 20,
                        textAlign: 'center',
                        background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
                        borderRadius: 10,
                        width: '100%',
                        height: 178,
                    }}>
                        <h2 className="net-income-month">NET Income</h2>
                        <p className="net-income-amount">₱31</p>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};
export default NetIncome;
