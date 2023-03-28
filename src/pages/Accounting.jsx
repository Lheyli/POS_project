import React from 'react';
import NetIncome from './NetIncome';
import { DatePicker, Card, Button, Typography, Row, Col } from 'antd';
import dayjs from 'dayjs';
import {BsArrowLeftRight } from "react-icons/bs";
import { CalendarOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Accounting = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={24} lg={8}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center', marginTop: '15%' }}>
            <DatePicker
              id={styles["input123"]}
              style={{
                left: '-150px',
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
            <BsArrowLeftRight style={{
              left: 70,
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 25,
              display: 'flex',
              color: '#3B3A82',
              position: 'absolute'
            }} />
            <DatePicker
              id={styles["input123"]}
              style={{
                left: '-100px',
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
                justifyContent: 'center'
              }}
              suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
              defaultValue={dayjs("01/01/2023", dateFormatList[0])}
              format={dateFormatList[0]}
            />
            <Button
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
                right: '-150px'
              }}
            >
              EXPORT
            </Button>
          </div>
        </Col>
      </Row>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Card style={{
          top: '50px',
          backgroundColor: '#FFFFFF',
          width: '1000px',
          height: '610px',
          background: '#F9F9FF',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
          borderRadius: '24px',
        }}>
          <div style={{ marginLeft: '50px', display: 'flex', }}>
            <Card style={{ width: '500px', height: '200px', top: '30px' }}>
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
          </div>
        </Card>
      </div>
    </>
  );
};
export default Accounting;
