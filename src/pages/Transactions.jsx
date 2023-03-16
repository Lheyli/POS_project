import React from 'react';
import { DatePicker, Card, Table, Button } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined, RightOutlined, CaretDownOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);

const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const Transactions = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const columns = [
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Time</span>,
      key: 'time',
      dataIndex: 'time',
      render: (time) => <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '36px',
        color: '#3B3A82',
      }}>{new Date(time).toLocaleTimeString()}</span>
    },

    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Orders</span>,
      dataIndex: 'title',
      key: 'productname',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{record.title}</span>
      ),
    },

    {
      title: <span style={{

        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Price <CaretDownOutlined /></span>,
      dataIndex: 'price',
      key: 'price',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`(₱${text})`}</span>
      ),
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Quantity</span>,
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <span style={{
          display: 'flex',
          justifyContent: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`X${Math.floor(Math.random()) + 1}`}</span>
      ),

    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Total</span>,
      key: 'total',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`₱${record.price * record.quantity}`}</span> // add bold font weight to total
      ),
    },
    {
      key: 'action',
      render: (text) => (
        <Button style={{ color: '#3B3A82' }} type="link" >
          <RightOutlined />
        </Button>
      ),
    },
  ];
  return (
    <>

      <div justify='start' style={{
        marginTop: '50px',
        width: '100%',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#30304D',
      }}>
        <span style={{ marginLeft: '450px', }}>
          {today}</span></div>
      <br></br>
      <div justify='start' style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <span style={{ marginLeft: '450px', }}>
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
            marginLeft: '10px'
          }}
        >
          EXPORT
        </Button>
      </div>
      <br></br>
    
        <Card
          style={{
            backgroundColor: '#FFFFFF',
            width: '1000px',
            height: '500px',
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px',
            margin: '0 auto'
          }}
        >
          <Table
            columns={columns}
            rowKey="id"
            style={{ margin: 'auto', background: '#F9F9FF' }}
          />
        </Card>

    </>

  );
};

export default Transactions;
