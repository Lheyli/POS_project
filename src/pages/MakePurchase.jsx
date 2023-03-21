import React from 'react';
import { Button } from 'antd';
import image from '../pages/image.png';
import { Link } from 'react-router-dom';
function MakePurchase() {
  return (
    <>
      <div justify='start' style={{
        marginTop: '10px',
        width: '100%',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '35px',
        color: '#3B3A82',
      }}>
        <span style={{ marginLeft: '270px', }}>
          Make Purchase</span></div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '230px' }}>
        <img src={image} alt="scan" style={{ position: 'absolute', width: '665px', height: '450px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
        <Button
          style={{
            width: '270px',
            height: '100px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#3B3A82',
            borderRadius: '24px',
          }}
        >
          <Link to="/make">Manual Purchase</Link>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          style={{
            width: '270px',
            height: '100px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#3B3A82',
            borderRadius: '24px',
          }}
        >
         &nbsp;&nbsp;  <Link to="/makeorders">Scan QR Code</Link>
        </Button>
      </div>
    </>
  );
}
export default MakePurchase;
