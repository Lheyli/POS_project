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
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const StyledSider = styled.div`
  background-color: #eeeeff;
  height: 100vh;
  position: fixed;
  width: 205px;
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

const StyledMenuSignout = styled(Link)`
  color: #3b3a82;
  width: 254px;
  height: 31px;

  font: "Poppins";
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
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
          <StyledLink to="/dashboard" style={{ fontWeight: 'bold'  }}>
            <HomeOutlined />
            &nbsp; Dashboard
          </StyledLink>
          <StyledLink to="/products" style={{ fontWeight: 'bold'  }}>
            <TagOutlined />
            &nbsp; Products
          </StyledLink>
          <StyledLink to="/purchase" style={{ fontWeight: 'bold'  }}>
            <ShoppingCartOutlined />
            &nbsp; Make Purchase
          </StyledLink>
          <StyledLink to="/transactions"style={{ fontWeight: 'bold'  }}>
            <SwapOutlined />
            &nbsp; Transactions
          </StyledLink>
          <StyledLink to="/sales-report"style={{ fontWeight: 'bold'  }}>
            <FundOutlined />
            &nbsp; Sales Report
          </StyledLink>
          <StyledLink to="/accounting-report"style={{ fontWeight: 'bold'  }}>
            <CalculatorOutlined />
            &nbsp; Accounting Report
          </StyledLink>
          <StyledLink to="/user-logs"style={{ fontWeight: 'bold'  }}>
            <UserOutlined />
            &nbsp; User Logs
          </StyledLink>
          <StyledLink to="/clients"style={{ fontWeight: 'bold'  }}>
          <UsergroupAddOutlined />
            &nbsp; Members/Clients
          </StyledLink>
          <StyledLink to="/qr"style={{ fontWeight: 'bold'  }}>
            <QrcodeOutlined />&nbsp;
                    Scan QR Code
                </StyledLink>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
                <StyledMenuSignout to="/out" style={{ fontWeight: 'bold'  }}>
                    Sign out
                    &nbsp;<PoweroffOutlined /></StyledMenuSignout>
            </StyledMenu>

        </StyledSider>
        </>
    );
}

export default Sidebar;
