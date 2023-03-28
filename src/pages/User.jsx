import { DatePicker, Card, Table, Button, Typography, Modal, Divider, Row, Col } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import {BsArrowLeftRight } from "react-icons/bs";
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Transactions = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [visible, setVisible] = useState(false);
  const showModal = (record) => {
    setSelectedRow(record);
    setVisible(true);
  };
  const handleOk = () => {
    setSelectedRow(null);
    setVisible(false);
  };
  const handleCancel = () => {
    setSelectedRow(null);
    setVisible(false);
  };
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
      dataIndex: 'time',
      key: 'time',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Date</span>,
      dataIndex: 'date',
      key: 'date',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>User ID</span>,
      dataIndex: 'userId',
      key: 'userId',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Name</span>,
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Actions</span>,
      key: 'actions',
      render: (record) => (
        <EyeOutlined onClick={() => showModal(record)} style={{ fontSize: '24px', color: '#3B3A82' }} />
      ),
    },
  ];
  const data = [
    {
      key: '1',
      time: '11:56 am',
      date: '2022-03-15',
      userId: '1535',
      name: 'Vic Tinaliga',
    },
    {
      key: '2',
      time: '11:33 am',
      date: '2022-03-15',
      userId: '14652',
      name: 'Lhey Cruz',
    },
    {
      key: '3',
      time: '10:48 am',
      date: '2022-03-15',
      userId: '487568',
      name: 'Rica De Vera',
    },
    {
      key: '4',
      time: '10:15 am',
      date: '2022-03-15',
      userId: '31424',
      name: 'Jen Fernandez',
    },
    {
      key: '5',
      time: '9:46 am',
      date: '2022-03-15',
      userId: '98947',
      name: 'Gab Fernandez',
    },
    {
      key: '6',
      time: '9:30 am',
      date: '2022-03-15',
      userId: '67967',
      name: 'Josh Garcia',
    },
  ];

  const handlePrint = () => {
    const receiptElement = document.getElementById('receipt-info');
    const printWindow = window.open('', 'Print', 'height=600,width=800');
    printWindow.document.write(receiptElement.innerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };


  return (
    <>
      <div style={{
        top: '15%',
        width: '100%',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#30304D',
        display: 'flex',
        left: '22%',
        position: 'absolute'
      }}>
        <span>
          {today}</span></div>
       <Row justify="center">
  <Col xs={24} lg={8}>
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center', marginTop: '15%' }}>
      <DatePicker
        id={styles["input123"]}
        style={{
          left: '-225px',
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
       left: 0,
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
          left: '-160px',
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
        onClick={handlePrint}
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
          right: '-200px'
        }}
      >
        EXPORT
      </Button>
    </div>
  </Col>
</Row>

      
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card id="receipt-info"
          style={{
            position: 'absolute',
            justifyContent: 'center', 
            maxWidth: '100%', 
            alignItems: 'center' ,
            width: 1100,
            height: 600,
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: 24,
          }}
        >
          <div style={{  display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center'  }}>
            <Table style={{ width: '90%' }} columns={columns} dataSource={data} />
          </div>
        </Card>
        <Modal
          title=""
          open={visible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
              marginBottom: '0px'
            }}>
              ACTIVITY
            </p>
          </div>
          <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px', marginTop: '0px' }} />
          <p style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            color: '#30304D',
            marginBottom: '0px'
          }}>{selectedRow && selectedRow.name}</p>
          <p style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            color: '#656565',
            marginTop: '0px'
          }}>UserID: {selectedRow && selectedRow.userId}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
            }}>
              {selectedRow && selectedRow.date}
            </p>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
            }}>&nbsp; | &nbsp;  </p>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
            }}>{selectedRow && selectedRow.time}</p>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Transactions;
