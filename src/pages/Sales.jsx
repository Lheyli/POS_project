import React, { useState } from 'react';
import { DatePicker, Card, Button, Typography, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
import './net.css'
import SalesReport from './SalesReport';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Sales = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [todayClicked, setTodayClicked] = useState(true);
  const [weekClicked, setWeekClicked] = useState(false);
  const [monthClicked, setMonthClicked] = useState(false);

  const handleClick = (button) => {
    if (button === 'today') {
      setTodayClicked(true);
      setWeekClicked(false);
      setMonthClicked(false);
    } else if (button === 'week') {
      setTodayClicked(false);
      setWeekClicked(true);
      setMonthClicked(false);
    } else if (button === 'month') {
      setTodayClicked(false);
      setWeekClicked(false);
      setMonthClicked(true);
    }
  };

  const { Text } = Typography;
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={16}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '50%', alignItems: 'center', marginTop: '8%', marginLeft: 125 }}>
            <DatePicker
              id={styles["input123"]}
              style={{
                width: '100%',
                height: 48,
                background: '#5250B4',
                borderRadius: '10px',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 27,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                justifyContent: 'center',
              }}
              suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
              defaultValue={dayjs("01/01/2023", dateFormatList[0])}
              format={dateFormatList[0]}
            />
            <Button
              style={{
                marginLeft: '5%',
                width: '100%',
                height: 48,
                background: '#5250B4',
                borderRadius: '10px',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 27,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                justifyContent: 'center',
              }}
            >
              EXPORT
            </Button>
          </div>
        </Col>
      </Row>
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

      }}>
        <Row justify="center" align="middle" gutter={[16, 16]}>
          <Col style={{ marginRight: '40px' }}>
            <Button
              onClick={() => handleClick('today')}
              style={{
                display: 'flex',
                height: '40px',
                width: '120px',
                textAlign: 'center',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: todayClicked ? '#F9F9FF' : '#A9A9CC',
                background: todayClicked ? '#5250B4' : 'none',
                borderRadius: '20px'
              }}
            >
              &nbsp; Today
            </Button>
          </Col>
          <Col style={{ marginRight: '40px' }}>
            <Button
              onClick={() => handleClick('week')}
              style={{
                display: 'flex',
                height: '40px',
                width: '150px',
                textAlign: 'center',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: weekClicked ? '#F9F9FF' : '#A9A9CC',
                background: weekClicked ? '#5250B4' : 'none',
                borderRadius: '20px'
              }}
            >
              &nbsp;Next week
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => handleClick('month')}
              style={{
                display: 'flex',
                height: '40px',
                width: '150px',
                textAlign: 'center',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: monthClicked ? '#F9F9FF' : '#A9A9CC',
                background: monthClicked ? '#5250B4' : 'none',
                borderRadius: '20px'
              }}
            >
              This Month
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24} md={12}>
            <div style={{
              marginTop: '30px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '28px',
              color: '#30304D',
              marginLeft: 35
            }}>
              <span >{today}</span>
            </div>
            <div style={{ bottom: 0, right: 0 }}>
              <Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 20,
                color: '#30304D',
                marginLeft: 35
              }}>Sales Report</Text>
            </div>
          </Col>
        </Row>

        <Row >
          <Col span={24} md={12} style={{ marginLeft: 40, width: '100%', marginTop: 40 }}>
            <SalesReport /> </Col>
          <Col span={24} md={8} >
            <h2 style={{
              font: '20px',
              padding: 20,
              marginRight: 12,
              textAlign: 'center',
              marginBottom: 5
            }}>Details</h2>
            <Col span={24} md={18} style={{ marginLeft: 100, marginBottom: 10 }}>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #dddddd',
                padding: 20,
                textAlign: 'center',
                background: 'linear-gradient(258.36deg, #25B054 1.29%, #1A5C61 97.24%)',
                borderRadius: 10,
                width: '100%',
                height: 100,
              }}>
                <h2 className="net-income-month">TOTAL SALES</h2>
                <p className="net-income-amount">₱1,327</p>
              </div>
            </Col>
            <Col span={24} md={18} style={{ marginLeft: 100, marginBottom: 10 }}>
              <div style={{

                backgroundColor: '#ffffff',
                border: '1px solid #dddddd',
                padding: 20,
                textAlign: 'center',
                background: 'linear-gradient(258.36deg, #FFAA2C 1.29%, #C73C11 97.24%)',
                borderRadius: 10,
                width: '100%',
                height: 100,
              }}>
                <h2 className="net-income-month">TRANSACTIONS</h2>
                <p className="net-income-amount">7</p>
              </div>
            </Col>
            <Col span={24} md={18} style={{ marginLeft: 100, marginBottom: 10 }}>
              <div style={{

                backgroundColor: '#ffffff',
                border: '1px solid #dddddd',
                padding: 20,
                textAlign: 'center',
                background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
                borderRadius: 10,
                width: '100%',
                height: 100,
              }}>
                <h2 className="net-income-month">TOTAL EXPENSES</h2>
                <p className="net-income-amount">₱1,327</p>
              </div>
            </Col>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default Sales;
