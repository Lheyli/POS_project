import { useDispatch, useSelector } from 'react-redux';
import {
    getTotals,
} from '../reducers/productSlice';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row, Card, Typography, Table} from 'antd';
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
const CheckRec = () => {
    const now = new Date();
    const currentDateTime = now.toLocaleString(); // e.g. "3/14/2023, 3:30:15 PM"
    const { product, cartItems } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [tenderedAmount] = useState(0);
    const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    const change = tenderedAmount - totalPrice;
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
                    <Link to='/cart'>
                        <h3 style={{
                            display: 'flex',
                            alignItems: 'center',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '50px',
                            color: '#D6D6E5',
                            textDecoration: 'none',
                        }}>
                            <TbCircle1Filled style={{ color: '#D6D6E5' }} /> &nbsp; Payment
                        </h3>
                    </Link> &nbsp;
                    &nbsp; &nbsp; <TbChevronRight /> &nbsp;
                    <Link to='/cartreceipt'>
                        <h3 style={{
                            display: 'flex',
                            alignItems: 'center',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '50px',
                            color: '#3B3A82',
                            textDecoration: 'none',
                        }}>
                            <TbCircle2Filled style={{ color: '#3B3A82' }} /> &nbsp; Receipt
                        </h3>
                    </Link>
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
                    {`${currentDateTime}`}
                </div>
            </div>
            <center>
                <Card style={{ maxWidth: '1300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                        <Typography.Title level={1} style={{ font: 'Poppins', fontWeight: 'bold' }}> ₱{totalPrice.toFixed(2)} Payment</Typography.Title>
                    </div>
                    <Table dataSource={cartItems} style={{ maxWidth: '1300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Table.Column title="" key="image" render={(text, record) => (
                            <img alt={record.time} src={record.image} width={200} height={150} />
                        )} />
                        <Table.Column title="" dataIndex="title" key="title" />
                        <Table.Column
                            title=""
                            dataIndex="price"
                            key="price"
                            style={{ fontWeight: 'bold' }}
                            render={(text) => (
                                <span>
                                    ₱{text}
                                </span>
                            )}
                        />
                        <Table.Column title="" key="cartQuantity" render={(text, record) => (
                            < >
                                x{record.quantity}
                            </>
                        )} />
                        <Table.Column title="" key="cartQuantity" render={(text, record) => (
                            < >
                                &#8369;{record.quantity * record.price}
                            </>
                        )} />
                    </Table>
                    <br /><br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Total: ₱{totalPrice.toFixed(2)}</Typography.Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Tendered Amount:</Typography.Text>
                            <Typography.Text style={{ width: '200px' }} > {tenderedAmount}</Typography.Text>
                        </div>
                        <Typography.Text style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>Please enter customer tendered amount</Typography.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Change:</Typography.Text>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>₱{change.toFixed(2)}</Typography.Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Cash:</Typography.Text>
                            <Typography.Text style={{ width: '200px' }} > {tenderedAmount}</Typography.Text>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {`${currentDateTime}`}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: 'red' }}>Receipt #</Typography.Text>
                    </div>
                </Card>
            </center>
            <div style={{ justifyContent: 'center', marginTop: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        style={{
                            borderColor: '#5250B4',
                            borderRadius: '50px',
                            display: 'flex',
                            color: '#5250B4',
                            font: "Poppins",
                            fontWeight: 'bold',
                            width: '200px',
                            height: '50px',
                            fontSize: '23px',
                            justifyContent: 'flex-start',
                            marginLeft: '150px'
                        }}>
                        &nbsp;
                        <Link to="">PRINT RECEIPT</Link>
                    </Button>
                    <Button
                        style={{
                            background: '#5250B4',
                            borderRadius: '50px',
                            display: 'flex',
                            color: '#ffffff',
                            font: "Poppins",
                            fontWeight: 'bold',
                            width: '150px',
                            height: '50px',
                            fontSize: '23px',
                            justifyContent: 'flex-end'
                        }}>
                        &nbsp;
                        CONFIRM
                    </Button>
                </div>
                <br />
            </div>
        </>
    );
};
export default CheckRec;
