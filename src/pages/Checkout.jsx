import { useDispatch, useSelector } from 'react-redux';
import {
     increaseCart, decreaseCart,
    getTotals,
} from '../reducers/productSlice';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row, Card, Typography, Table, InputNumber } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { TbCircle1Filled, TbCircle2Filled, TbChevronRight } from "react-icons/tb";
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
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const { product } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [tenderedAmount, setTenderedAmount] = useState(0);
    const totalPrice = product.reduce((acc, product) => acc + (product.cartQuantity * product.price), 0);
    const change = tenderedAmount - totalPrice;

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleIncreaseCart = (product) => {
        dispatch(increaseCart(product));
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [product, dispatch]);

    return (
        <>
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



            <div justify='start' style={{ marginLeft: '50px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Link to='/makeorders'><h3 style={{
                        display: 'flex',
                        alignItems: 'center',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '25px',
                        lineHeight: '50px',
                        color: '#3B3A82'
                    }}>
                        <TbCircle1Filled style={{ color: '#3B3A82' }} /> &nbsp; Payment
                    </h3></Link> &nbsp;
                    &nbsp; &nbsp; <TbChevronRight /> &nbsp;
                    <Link to='/payment'><h3 style={{
                        display: 'flex',
                        alignItems: 'center',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '25px',
                        lineHeight: '50px',
                        color: '#D6D6E5'
                    }}>
                        <TbCircle2Filled style={{ color: '#D6D6E5' }} /> &nbsp; Receipt
                    </h3></Link> &nbsp;
                    &nbsp; &nbsp; <TbChevronRight />

                </div>
                <div style={{
                    marginLeft: '1px',
                    textAlign: 'left',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '25px',
                    lineHeight: '48px',
                    color: '#6A6A80',
                }}>
                    {`${today}`}
                </div>
            </div>
            <center>
                
            <Card style={{ width: '1046px', height: '706px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <br /><br /><br /><br /><br /><br />
      <Typography.Title level={1} style={{ color: 'black', textAlign: 'left' }}>Your Order</Typography.Title>

      
      <Table dataSource={product} className="cart-table">
        <Table.Column title="" key="image" render={(text, record) => (
          <img alt={record.time} src={record.image} width={300} height={250} />
        )} />
        <Table.Column title="" dataIndex="title" key="title" />
        <Table.Column title="" dataIndex="price" key="price" />
        <Table.Column title="" key="cartQuantity" render={(text, record) => (
          <>
            <Button style={{ borderColor: "gray" }} col-md-3 onClick={() => handleDecreaseCart(record)}>
              -
            </Button>
            &nbsp; {record.cartQuantity} &nbsp;
            <Button style={{ borderColor: "black" }} onClick={() => handleIncreaseCart(record)}>+</Button>
          </>
        )} />
      </Table>

      <br /><br />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text>Total:</Typography.Text>
          <Typography.Text>???{totalPrice.toFixed(2)}</Typography.Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text>Tendered Amount:</Typography.Text>
          <InputNumber min={0} onChange={setTenderedAmount} style={{ width: '200px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text>Change:</Typography.Text>
          <Typography.Text>???{change.toFixed(2)}</Typography.Text>
        </div>
      </div>
    </Card>

            </center>
            <Button
          
          style={{
            background: '#5250B4',
            borderRadius: '50px',
            display: 'inline-block',
            color: '#ffffff',
            font: "Poppins",
            fontWeight: 'bold',
           
            
          }}
        
        > &nbsp;
          <Link to="/rec">CONFIRM</Link>
        </Button>
        </>

    );
};

export default Checkout;
