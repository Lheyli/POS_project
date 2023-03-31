import React from 'react';
import NetIncome from './NetIncome';
import { DatePicker, Button, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { BsArrowLeftRight } from "react-icons/bs";
import { CalendarOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Accounting = () => {
  return (
    <>
     <div style={{
      position: 'absolute',
      left: '20%',
      marginTop: '10px',
      width: '100%',
      font: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '35px',
      color: '#3B3A82',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <span>
        Accounting Report
      </span>
    </div>
      <Row justify="center">
        <Col xs={24} lg={16}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '50%', alignItems: 'center', marginTop: '8%', marginLeft: 125 }}>
            <DatePicker
              id={styles["input123"]}
              style={{
                marginRight: '2%',
                width: '50%',
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

              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 30,

              color: '#3B3A82',

            }} />
            <DatePicker
              id={styles["input123"]}
              style={{
                marginLeft: '2%',
                width: '50%',
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
                marginLeft: '10%',
                width: '50%',
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

      <NetIncome />

    </>
  );
};
export default Accounting;
