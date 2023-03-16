import React from 'react';
import NetIncome from './NetIncome';
import { DatePicker, Card, Button, Typography } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);

const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const Accounting = () => {
  return (
    <>
      <div justify='start' style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <span style={{ marginLeft: '430px', }}>
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
        <Typography.Text style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 20,
          display: 'flex',
          color: '#3B3A82',
          marginLeft: '20px',
          marginRight: '20px',
          justifyContent: 'center',
          top: '10px'
        }}> to </Typography.Text>
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
        <span style={{ marginLeft: '350px', }}>
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

<Card  style={{
            top: '50px',
            backgroundColor: '#FFFFFF',
            width: '1000px',
            height: '610px',
            marginLeft: '425px',
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px',
          }}>
      <div style={{ marginLeft: '50px', display: 'flex', }}>
        
        <Card style={{ width: '500px', height: '200px', top: '30px'}}>
          <Typography.Text
            style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 20,
              display: 'flex',
              color: '#3B3A82',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            NET Income
          </Typography.Text>
          <NetIncome />
        </Card>
      </div></Card></>
  );
};

export default Accounting;
