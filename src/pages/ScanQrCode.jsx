import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import QRCode from 'qrcode.react';
import scanImage from './scan.png';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const h1Styles = {
  font: 'Poppins',
  color: '#3B3A82',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '45px'
};
const h2Styles = {
  font: 'Poppins',
  color: '#30304D',
  textAlign: 'left',
  marginBottom: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '42px',
};
function ScanQrCode() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [qrCodeValue] = useState('');
  const showModal = () => {
    setIsModalVisible(true);
    setProductDetails({
      name: 'Sample Product',
      price: '$10.00',
      description: 'This is a sample product description',
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <div style={{
            marginTop: '10px',
            width: '100%',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '35px',
            color: '#3B3A82',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{ marginLeft: '200px', }}>
              Scan Qr Code</span></div></Col>
      </Row>

      <Col xs={24} sm={4} md={6} lg={8} xl={10}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={scanImage}
            alt="scan"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              maxWidth: '100%',
              height: 'auto',
              marginLeft: '525px'
            }}
          />
        </div>
      </Col>

      <Row gutter={[16, 16]} justify="center">
      <Col xs={24} sm={12} md={8} lg={6}>
        <Button
          onClick={showModal}
          style={{
            top: '450px',
            width: '100%',
            height: '100px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '50px',
            color: '#38384D',
            borderRadius: '24px',
          }}
        >
          View Product Details
        </Button>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Link to='/makeorders'>
          <Button
            style={{
              top:'450px',
              width: '100%',
              height: '100px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '30px',
              lineHeight: '50px',
              color: '#38384D',
              borderRadius: '24px',
            }}
          >
            Make Orders
          </Button>
        </Link>
      </Col>
    </Row>
      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        centered
        width={900}
        bodyStyle={{ height: '600px' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '12px',
          lineHeight: '30px',
          color: '#9494B3',
        }}>
          <h3 style={{ color: '#9494B2', font: 'Poppins', cursor: 'pointer' }} onClick={handleCancel}>Scan QR Code</h3>
          &nbsp; <FaAngleRight />  &nbsp;
          <h3>View Product Details</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, padding: '20px' }}>
            <center>
              <QRCode value={qrCodeValue} />
              <br />
              <br />
              <h2>{productDetails.name}</h2>
            </center>
          </div>
          <div style={{ flex: 1, padding: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', background: '#F9F9FF', borderRadius: '24px', height: '475px' }}>
            <div style={{ width: '200px', height: '200px', backgroundColor: '#FFFFFF' }}>
              <h1 style={h1Styles}>Details:</h1>
              <h1 style={h2Styles}>Price:</h1>
              <h1 style={h2Styles}>Category:</h1>
              <h1 style={h2Styles}>Expiration Date:</h1>
              <h1 style={h2Styles}>Quantity:</h1>
              <h1 style={h2Styles}>Created by:</h1>
              <h1 style={h2Styles}>Updated at:</h1>
              <h1 style={h2Styles}>Updated by:</h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ScanQrCode;

