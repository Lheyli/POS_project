import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';
import { LeftOutlined} from '@ant-design/icons';

const StyledHeader = styled.header`
  background-image: linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%);
  border-bottom: 0.5px solid #656565;
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
  }
`;




const Checkout = () => {
    return (
        <StyledHeader>

            <Row justify="start" style={{ marginTop: '10px', marginLeft: '30px' }}>
                <Button style={{ background: '#DBDFFD' }}>
                    <Link to="/purchase">
                        <LeftOutlined style={{ color: '#1A2163' }} />
                    </Link>
                </Button>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', font: "Poppins", fontWeight: 'bold', marginLeft: '10px', fontSize: '20px', marginTop: '0px' }}>MAKE PURCHASE</p>
            </Row>
        </StyledHeader>
    );
};

export default Checkout;
