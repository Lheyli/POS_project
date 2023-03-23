import styled from "styled-components";
import { BellOutlined, QuestionCircleOutlined, RightOutlined } from "@ant-design/icons";
import logo from "./logo.png";
import { notification } from 'antd';
import { Modal, Divider } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const StyledHeader = styled.header`
  background-color: #f9f9ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 24px;
  border: 0.5px solid #9494b2;
  &:focus {
    outline: none;
    border-color: #9494b2;
    box-shadow: 0 0 0 2px #e6f7ff;
`;
const StyledSearch = styled.input`
  width: 200px;
  border: 1px solid #9494b2;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: #30304d;
  background-color: #fff;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 0.5px #3B3A82;
  }
`;
const StyledBadge = styled.span`
  display: inline-block;
  margin-right: 16px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  .badge-count {
    background-color: #30304d;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    border-radius: 8px;
    padding: 2px 6px;
    position: absolute;
    top: -8px;
    right: -8px;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
`;

const Navbar = () => {
  const handleClick = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This can be a longer text if needed.',
      icon: <BellOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledHeader>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="i" src={logo} alt="logo" height={50} width={80} />
      <StyledContainer>
        <StyledBadge onClick={showModal}>
          <QuestionCircleOutlined style={{ fontSize: "24px", color: "#30304D" }} />
        </StyledBadge>
        <Modal
          title={<h3 style={{
            textAlign: 'center',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'
          }}>User Guides</h3>}
          open={isModalVisible}
          footer={null}
          onOk={handleOk}
          onCancel={handleOk}
        >
          <h1 style={{
            marginBottom: '0px',
            marginTop: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',

            alignItems: 'center',
            color: '#555566',
            fontSize: '20px'
          }}>Products</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Create New Product <Link to='/products'><RightOutlined style={{
              marginLeft: '225px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} /></Link>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',

            alignItems: 'center',
            color: '#555566'
          }}>Make Purchase</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Make Purchase (Manual) <Link to='/make'> <RightOutlined style={{
              marginLeft: '178px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} /></Link>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',

            alignItems: 'center',
            color: '#555566'
          }}>Members/Clients</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Create New Member <Link to='/clients'><RightOutlined style={{
              marginLeft: '220px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} /></Link>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',

            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',

            alignItems: 'center',
            color: '#555566'
          }}>Scan QR Code</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>View Product Details <Link to='/qr'><RightOutlined style={{
              marginLeft: '220px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} /></Link>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',

            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',

            alignItems: 'center',
            color: '#555566'
          }}>Make Purchase</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Make Purchase (Scan QR Code) <Link to='/makeorders'><RightOutlined style={{
              marginLeft: '105px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} /></Link>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '30px', marginTop: '0px' }} />
        </Modal>


        <StyledBadge onClick={handleClick} >
          <BellOutlined style={{ fontSize: "24px", color: "#30304D" }} />
        </StyledBadge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </StyledContainer>
      <StyledSearch
        placeholder="Search..." style={{ font: "Poppins" }}
      />
    </StyledHeader>
  );
};
export default Navbar;
