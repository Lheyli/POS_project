import React, {useState} from 'react';
import { DatePicker, Card, Button, Typography } from 'antd';
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
 
 
  return (
    <>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div justify='start' style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <span style={{ marginLeft: '-450px', }}>
          <DatePicker
            id={styles["input123"]}
            style={{
              width: 191,
              height: 48,
              flex: "none",
              order: 0,
              flexGrow: 0,
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
              justifyContent: 'center'
            }}
            suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
            defaultValue={dayjs("01/01/2023", dateFormatList[0])}
            format={dateFormatList[0]}
          />
        </span>
        <span style={{ marginLeft: '20px', }}>
          <Button
            style={{
              width: 191,
              height: 48,
              flex: "none",
              order: 0,
              flexGrow: 0,
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
          </Button></span>
      </div>
      <Card style={{
        top: '50px',
        backgroundColor: '#FFFFFF',
        width: '1000px',
        height: '710px',
        background: '#F9F9FF',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
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
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '50px',
          color: todayClicked ? '#F9F9FF' : '#A9A9CC',
          background: todayClicked ? '#5250B4' : 'none',
          borderRadius: '20px'
        }}
      >
        <span style={{ marginLeft: '15px' }}>Today</span>
      </Button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Button
        onClick={() => handleClick('week')}
        style={{
        display: 'flex',
        height: '40px',
        width: '150px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
      <span style={{ marginLeft: '15px' }}>Next week</span>
    </Button>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Button
        onClick={() => handleClick('month')}
        style={{
        display: 'flex',
        height: '40px',
        width: '150px',
        justifyContent: 'center',
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
      <span style={{ marginLeft: '15px' }}>This Month</span>
    </Button>
        &nbsp;
        </div>
        <div justify='start' style={{
          marginTop: '20px',
          width: '100%',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '28px',
          color: '#30304D',
        }}>
          <span style={{ marginLeft: '50px', }}>
            {today}</span></div>
        <div style={{ marginLeft: '50px', display: 'flex', }}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 20,
            display: 'flex',
            color: '#30304D'
          }}>Sales Report</Typography.Text>
          <br />
          <Card style={{ width: '600px', height: '300px', top: '50px', right: '100px' }}>
            <SalesReport />
            <h2 style={{
              font: '20px',
              position: 'absolute',
              padding: 20,
              textAlign: 'center',
              marginLeft: '500px', /* Updated marginLeft to marginRight */
              left: 120, /* Added right property */
              top: 0,
            }}>Details</h2>
            <div style={{
              position: 'absolute',
              backgroundColor: '#ffffff',
              border: '1px solid #dddddd',
              padding: 20,
              textAlign: 'center',
              background: 'linear-gradient(258.36deg, #25B054 1.29%, #1A5C61 97.24%)',
              borderRadius: 10,
              marginLeft: '500px', /* Updated marginLeft to marginRight */
              width: 200,
              height: 100,
              left: 135, /* Added right property */
              top: 80,
            }}>
              <h2 className="net-income-month">TOTAL SALES</h2>
              <p className="net-income-amount">₱1,327</p>
            </div>
            <div style={{
              position: 'absolute',
              backgroundColor: '#ffffff',
              border: '1px solid #dddddd',
              padding: 20,
              textAlign: 'center',
              background: 'linear-gradient(258.36deg, #FFAA2C 1.29%, #C73C11 97.24%)',
              borderRadius: 10,
              marginLeft: '500px', /* Updated marginLeft to marginRight */
              width: 200,
              height: 100,
              left: 135, /* Added right property */
              top: 200,
            }}>
              <h2 className="net-income-month">TRANSACTIONS</h2>
              <p className="net-income-amount">7</p>
            </div>
            <div style={{
              position: 'absolute',
              backgroundColor: '#ffffff',
              border: '1px solid #dddddd',
              padding: 20,
              textAlign: 'center',
              background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
              borderRadius: 10,
              marginLeft: '500px', /* Updated marginLeft to marginRight */
              width: 200,
              height: 100,
              left: 135, /* Added right property */
              top: 320,
            }}>
              <h2 className="net-income-month">TOTAL EXPENSES</h2>
              <p className="net-income-amount">₱1,327</p>
            </div>
           
          </Card>
        </div>
        </Card>
        </div>
        </>
  );
};
export default Sales;
