import { DatePicker, Card, Table, Button, Typography, Modal, Divider } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
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
        <span style={{ marginLeft: '430px', }}>
          {today}</span></div>
      <br></br>
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
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          style={{
            width: 1100,
            height: 600,
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
          <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px', marginTop: '0px'}} />
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
