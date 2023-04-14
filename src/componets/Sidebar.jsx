
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal, Carousel, Col } from 'antd';
import React, { useState } from "react";
import v1 from './v1.png';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import C1 from './C1.png';
import C2 from './C2.png';
import C3 from './C3.png';
import C4 from './C4.png';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';
import m1 from './m1.png';
import m2 from './m2.png';
import m3 from './m3.png';
import m4 from './m4.png';
import {
  HomeOutlined,
  CalculatorOutlined,
  QrcodeOutlined,
  FundOutlined,
  SwapOutlined,
  UserOutlined,
  TagOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
const StyledSider = styled.div`
  background-color: #eeeeff;
  width: max-content;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: 999;;
  transition: all 0.3s ease;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 25%;
    max-width: 205px;

  }


`;
const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const StyledLink = styled(Link)`
  display: block;
  padding: 16px;
  color: #3b3a82;
  font-weight: 600px;
  font-size: 14px;
  font: "Poppins";
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-image: linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%);
    color: #cccccc;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 90%;
  }
`;

const StyledToggle = styled.button`
  position: absolute;
  top: 10px;
  left: 1px;
  border: none;
  border-radius: 5px;
  color: #3B3A82;
  background-color: #f9f9ff;
  font-size: 18px;
  padding: 8px 16px;
  cursor: pointer;


  @media (max-width: 768px) {
    .ant-modal-content {
      height: 80vh;
      width: 100vw;
    }
  
    .ant-carousel .slick-slide img {
      max-height: 60vh;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .ant-modal-content {
      height: 80vh;
      width: 320px;
    }
  
    .ant-carousel .slick-slide img {
      max-height: 70vh;
    }
  }
  
  @media (min-width: 1025px) {
    .ant-modal-content {
      height: max-content;
      width: 320px;
    }
  
    .ant-carousel .slick-slide img {
      max-height: 80vh;
    }
  }
  
`;
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const images = [''];
  const [visible, setVisible] = useState(false);

  const hasShownModal1 = localStorage.getItem('hasShownModal1');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal1) {
    setVisible(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal1', true);
  }
  const handleSidebarClick = () => {
    setVisible(true);
  };
  const handleModalOk = () => {
    setVisible(false);
  };
  const handleModalCancel = () => {
    setVisible(false);
  };

  const [isvis, issetVis] = useState(false);

  const hasShownModal2 = localStorage.getItem('hasShownModal2');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal2) {
    issetVis(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal2', true);
  }

  const handleClick = () => {
    issetVis(true);
  };
  const handleOk = () => {
    issetVis(false);
  };
  const Cancel = () => {
    issetVis(false);
  };
  const [isvisible, issetVisible] = useState(false);

  const hasShownModal3 = localStorage.getItem('hasShownModal3');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal3) {
    issetVisible(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal3', true);
  }


  const handleSideClick = () => {
    issetVisible(true);
  };
  const handleModalOkay = () => {
    issetVisible(false);
  };
  const handleCancel = () => {
    issetVisible(false);
  };

  const [vis, setVis] = useState(false);

  const hasShownModal4 = localStorage.getItem('hasShownModal4');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal4) {
    setVis(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal4', true);
  }
  const handleC = () => {
    setVis(true);
  };
  const handle = () => {
    setVis(false);
  };
  const cel = () => {
    setVis(false);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dotStyle: {
      borderColor: 'gray',
      borderWidth: 2,
    },
    dotActiveStyle: {
      borderColor: 'blue',
    },
  };
  return (
    <>
      {/* <Row> */}
      <StyledToggle onClick={handleToggle}>
        {isOpen ? <MenuOutlined /> : <MenuOutlined />}
      </StyledToggle>
      <StyledSider breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }} isOpen={isOpen}>

        <StyledMenu>
          <Col><StyledLink to="/dashboard" style={{ fontWeight: 'bold' }}>
            <HomeOutlined />
            &nbsp; Dashboard
          </StyledLink></Col>
          <Col><StyledLink to="/products" style={{ fontWeight: 'bold' }} onClick={handleSideClick}>
            <TagOutlined />
            &nbsp; Products
          </StyledLink>
            <Modal
              visible={isvisible}
              footer={null}
              onOk={handleModalOkay}
              onCancel={handleCancel}
              width={500}
            >
              <div style={{ textAlign: 'center' }}>
                <Carousel autoplay {...settings} dots={false}>
                  {images.map((image) => (
                    <div key={image}>
                      <img
                        src={C1}
                        alt={image}
                        style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                      />
                    </div>
                  ))}
                  {images.map((image) => (
                    <div key={image}>
                      <img
                        src={C2}
                        alt={image}
                        style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                      />
                    </div>
                  ))}
                  {images.map((image) => (
                    <div key={image}>
                      <img
                        src={C3}
                        alt={image}
                        style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                      />
                    </div>
                  ))}
                  {images.map((image) => (
                    <div key={image}>
                      <img
                        src={C4}
                        alt={image}
                        style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Modal>
          </Col>
          <Col><StyledLink to="/purchase" style={{ fontWeight: 'bold' }} onClick={handleClick}>
            <ShoppingCartOutlined />
            &nbsp; Make Purchase
          </StyledLink>
            <Modal
              open={isvis}
              footer={null}
              onOk={handleOk}
              onCancel={Cancel}
              width="320px"
              height="40%"
            >
              <div style={{ maxWidth: '750px', margin: 'auto' }}>
                <Carousel autoplay {...settings}>
                  {images.map(image => (
                    <div key={image}>
                      <img src={i1} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={i2} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={i3} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={i4} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                </Carousel></div>
            </Modal></Col>
          <Col><StyledLink to="/transactions" style={{ fontWeight: 'bold' }}>
            <SwapOutlined />
            &nbsp; Transactions
          </StyledLink></Col>
          <Col><StyledLink to="/sales-report" style={{ fontWeight: 'bold' }}>
            <FundOutlined />
            &nbsp; Sales Report
          </StyledLink></Col>
          <StyledLink to="/accounting-report" style={{ fontWeight: 'bold' }}>
            <CalculatorOutlined />
            &nbsp; Accounting Report
          </StyledLink>
          <Col><StyledLink to="/user-logs" style={{ fontWeight: 'bold' }}>
            <UserOutlined />
            &nbsp; User Logs
          </StyledLink></Col>
          <Col><StyledLink to="/clients" style={{ fontWeight: 'bold' }} onClick={handleSidebarClick}>
            <UsergroupAddOutlined />
            &nbsp; Members/Clients
          </StyledLink>

            <Modal
              visible={visible}
              footer={null}
              onOk={handleModalOk}
              onCancel={handleModalCancel}
              width="320px"
              height="40%"
            > <div style={{ maxWidth: '750px', margin: 'auto' }}>
                <Carousel autoplay {...settings}>
                  {images.map(image => (
                    <div key={image}>
                      <img src={m1} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={m2} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={m3} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={m4} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                </Carousel></div>
            </Modal></Col>
          <Col><StyledLink to="/qr" style={{ fontWeight: 'bold' }} onClick={handleC}>
            <QrcodeOutlined />&nbsp;
            Scan QR Code
          </StyledLink>
            <Modal
              open={vis}
              footer={null}
              onOk={handle}
              onCancel={cel}
              width="320px"
              height="40%"
            >
              <div style={{ maxWidth: '750px', margin: 'auto' }}>
                <Carousel autoplay {...settings}>
                  {images.map(image => (
                    <div key={image}>
                      <img src={v1} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}

                  {images.map(image => (
                    <div key={image}>
                      <img src={s1} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={s2} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}
                  {images.map(image => (
                    <div key={image}>
                      <img src={s3} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                  ))}

                </Carousel></div>
            </Modal></Col>


        </StyledMenu>
      </StyledSider>
      {/* </Row> */}
    </>
  );
}
export default Sidebar;
