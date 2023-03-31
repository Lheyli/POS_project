import { DatePicker, Card, Table, Button, Modal, Divider, Row, Col } from 'antd';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftRight } from "react-icons/bs";
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
import { getUserlogs } from '../reducers/usersAPI';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Transactions = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [visible, setVisible] = useState(false);
   const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

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

   useEffect(() => {
    dispatch(getUserlogs());
  }, [dispatch]);
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
      dataIndex: 'user_id',
      key: 'user_id',
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
      }}>First Name</span>,
      dataIndex: 'first_name',
      key: 'first_name',
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
      }}>Last Name</span>,
      dataIndex: 'last_name',
      key: 'last_name',
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
        left: '23%',
        position: 'absolute'
      }}>
        <span>
          {today}</span></div>
      <Row justify="center">
        <Col xs={24} lg={16}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '50%', alignItems: 'center', marginTop: '8%', marginLeft: 105 }}>
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
              onClick={handlePrint}
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
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <Card id="receipt-info"
          style={{
            position: 'absolute',
            justifyContent: 'center',
            maxWidth: '100%',
            alignItems: 'center',
            width: 1000,
            height: 600,
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }}>
            <Table style={{ width: '90%' }} columns={columns} />
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
          }}>{selectedRow && selectedRow.first_name }  {selectedRow && selectedRow.last_name }</p>
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
          }}>UserID: {selectedRow && selectedRow.user_id}</p>
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
            }}>{selectedRow && selectedRow.time} : </p> &nbsp; 
            <p style={{
              font: 'Poppins',
              fontWeight: "bold",
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#000000',
            }}>{selectedRow && selectedRow.activity}</p>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Transactions;
