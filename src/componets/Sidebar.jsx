import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HomeOutlined,
  PoweroffOutlined,
  CalculatorOutlined,
  QrcodeOutlined,
  FundOutlined,
  SwapOutlined,
  UserOutlined,
  TagOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const StyledSider = styled.div`
  background-color: #eeeeff;
  height: 100vh;
  position: fixed;
  width: 200px;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-200px)"};
  transition: transform 0.3s ease-in-out;
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
  font-size: 16px;
  font-family: "Poppins";
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

const StyledMenuSignout = styled(Link)`
  color: #3b3a82;
  width: 254px;
  height: 31px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600px;
  font-size: 20px;
  line-height: 36px;
  margin-top: 200px;
  margin-left: 80px;
  cursor: pointer;
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
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledToggle onClick={handleToggle}>
        {isOpen ? <MenuOutlined /> : <MenuOutlined />}
      </StyledToggle>
      <StyledSider isOpen={isOpen}>
        <StyledMenu>
          <StyledLink to="/dashboard">
            <HomeOutlined />
            &nbsp; Dashboard
          </StyledLink>
          <StyledLink to="/products">
            <TagOutlined />
            &nbsp; Products
          </StyledLink>
          <StyledLink to="/transactions">
            <SwapOutlined />
            &nbsp; Transactions
          </StyledLink>
          <StyledLink to="/sales-report">
            <FundOutlined />
            &nbsp; Sales Report
          </StyledLink>
          <StyledLink to="/accounting-report">
            <CalculatorOutlined />
            &nbsp; Accounting Report
          </StyledLink>
          <StyledLink to="/user-logs">
            <UserOutlined />
            &nbsp; Members/Clients
          </StyledLink>
          <StyledLink to="/qr">
            <QrcodeOutlined />&nbsp;
                    Scan QR Code
                </StyledLink>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
                <StyledMenuSignout to="/out" >
                    Sign out
                    &nbsp;<PoweroffOutlined /></StyledMenuSignout>
            </StyledMenu>

        </StyledSider>
        </>
    );
}

export default Sidebar;
