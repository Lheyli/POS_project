import React, { useState } from 'react';
import { Table, Card, Button, Modal, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const buttonStyle = {
  borderRadius: '0px',
  background: '#EEEEFF',
  font: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#3B3A82',
  width: '120px',
  height: '32px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '50px'
};

const iconStyle = {
  color: '#3B3A82'
};

const columns = [
  {
    title: (
      <span
        style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '33px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#3B3A82',
          justifyContent: 'center',
        }}
      >
        User ID
      </span>
    ),
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: (text) => (
      <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '36px',
        color: '#38384D',
      }}>{text}</span>
    )
  },
  {
    title: (
      <span
        style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '33px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#3B3A82',
          justifyContent: 'center',
        }}
      >
        Name
      </span>
    ),
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (text) => (
      <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '36px',
        color: '#38384D',
      }}>{text}</span>
    )
  },
  {
    title: (
      <span
        style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '33px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#3B3A82',
          justifyContent: 'center',
        }}
      >
        Email
      </span>
    ),
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    render: (text) => (
      <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '36px',
        color: '#38384D',
      }}>{text}</span>
    )
  },
];

const data = [
  {
    id: '1535',
    name: 'Vic Tinaliga',
    email: 'tinaliga@gmail.com',
  },
  {
    id: '14652',
    name: 'Lhey Cruz',
    email: 'perez@gmail.com',
  },
  {
    id: '487568',
    name: 'Rica De Vera',
    email: 'cruz@yahoo.com',
  },
  {
    id: '31424',
    name: 'Jen Fernandez',
    email: 'dvera@ymail.com',
  },
  {
    id: '98947',
    name: 'Gab Fernandez',
    email: 'pf@yahoo.com',
  },
  {
    id: '67967',
    name: 'Josh Garcia',
    email: 'fer@gmail.com',
  },
  {
    id: '12412',
    name: 'Willard Perez',
    email: 'garcia@ymail.com',
  },
  {
    id: '68865',
    name: 'Camila De Leon',
    email: 'afi@yahoo.com',
  },

];


const Members = () => {

  const [showModal, setShowModal] = useState(false); // add state for controlling modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  
const CreateModal = () => {
  setIsModalVisible(true);
};

const handleCancel = () => {
  setIsModalVisible(false);
};


const handleShowModal = () => {
  setShowModal(!showModal);
};

const handleModalOk = () => {
  setShowModal(false);
};

const handleModalCancel = () => {
  setShowModal(false);
};

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
            onClick={CreateModal}
            style={{
            top: '20px',
            width: 191,
            height: 48,
            flex: "none",
            order: 0,
            flexGrow: 0,
            background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
            borderRadius: '50px',
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
            marginRight: '150px',
          }}
        >
          <PlusOutlined /> &nbsp; &nbsp;CREATE NEW &nbsp;
        </Button>
        <Modal
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#30304D', font: "Poppins", fontWeight: 'bold' }}>CREATE NEW MEMBER</p>
          <Link to='/createnewmember'><Button style={{ borderColor: '#5250B4', borderRadius: '50px', color: '#3B3A82', font: "Poppins", fontWeight: 'bold',  width: '150px' }}>
            SINGLE
          </Button></Link>&nbsp;&nbsp;
          <Button style={{
            background: '#5250B4',
            borderRadius: '50px',
            display: 'inline-block',
            color: '#ffffff',
            font: "Poppins",
            fontWeight: 'bold',
            width: '150px'
          }}>
           BATCH
          </Button>
          </Modal>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card

          style={{
            top: '50px',
            backgroundColor: '#FFFFFF',
            width: '1500px',
            height: '810px',
            marginLeft: '150px',
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px',
          }}
        >   <div style={containerStyle}>
            
            <Button style={buttonStyle}>BATCH 1 <FaAngleDown /> </Button>
           
          </div>
          <br/>
          <Table columns={columns} dataSource={data} style={{ width: '100%', height: 300, justifyContent: 'center' }} />
        </Card>
      </div>
    </>
  );
};

export default Members;
