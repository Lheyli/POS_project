import React from "react";
import styled from "styled-components";
import { BellOutlined } from "@ant-design/icons";
import logo from "./logo.png";
import { notification } from 'antd';
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
const handleClick = () => {
  notification.open({
    message: 'Notifications',
    description:
      '',
    icon: <BellOutlined style={{ color: '#108ee9' }} />,
    
  });
};
const Navbar = () => {
  return (
    <StyledHeader>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="i" src={logo} alt="logo" height={50} width={80} />
      <StyledContainer>
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
