import React, { useState } from 'react';
import { Table, Card, Button, Modal, Menu, Dropdown } from 'antd';
import { PlusOutlined,DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '50px'
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="1">BATCH 1</Menu.Item>
      <Menu.Item key="2">BATCH 2</Menu.Item>
      <Menu.Item key="3">BATCH 3</Menu.Item>
    </Menu>
  );
  const CreateModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
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
            marginRight: '-800px',
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
          <Link to='/createnewmember'><Button style={{ borderColor: '#5250B4', borderRadius: '50px', color: '#3B3A82', font: "Poppins", fontWeight: 'bold', width: '150px' }}>
            SINGLE
          </Button></Link>&nbsp;&nbsp;
          <Link to='/batch'><Button style={{
            background: '#5250B4',
            borderRadius: '50px',
            display: 'inline-block',
            color: '#ffffff',
            font: "Poppins",
            fontWeight: 'bold',
            width: '150px'
          }}>
            BATCH
          </Button></Link>
        </Modal>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card
          style={{
            top: '50px',
            backgroundColor: '#FFFFFF',
            width: '1000px',
            height: '810px',
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px',
          }}
        >   <div style={containerStyle}>
            <Dropdown overlay={menu}>
              <Button style={{
                marginLeft: '10px',
                borderRadius: '5px',
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
                width: '150px',
                height: '40px',
              }}>
                BATCH 1 &nbsp; <DownOutlined style={{ fontSize: '14px' }} />
              </Button>
            </Dropdown>
          </div>
          <br />
          <Table columns={columns} dataSource={data} style={{ width: '100%', justifyContent: 'center' }} />
        </Card>
      </div>
    </>
  );
};
export default Members;
