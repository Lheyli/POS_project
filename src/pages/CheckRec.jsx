import { useDispatch, useSelector } from 'react-redux';
import {
    getTotals,
} from '../reducers/productSlice';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row, Card, Typography, Table } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { TbCircle1Filled, TbCircle2Filled, TbChevronRight } from "react-icons/tb";
import { updateReceiptNumber } from '../reducers/receiptSlice';
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
    const receiptNumber = useSelector(state => state.receipt.receiptNumber);
    useEffect(() => {
        dispatch(getTotals(), updateReceiptNumber());
    }, [product, dispatch]);

    const handlePrint = () => {
        const receiptElement = document.getElementById('receipt-info');
        const printWindow = window.open('', 'Print', 'height=600,width=800');
        printWindow.document.write(receiptElement.innerHTML);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
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
                <Card id="receipt-info" style={{ maxWidth: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                        <Typography.Title level={1} style={{ font: 'Poppins', fontWeight: 'bold' }}> ₱{totalPrice.toFixed(2)} Payment</Typography.Title>
                    </div>
                    <Table dataSource={cartItems} style={{ maxWidth: '900px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Table.Column title="" key="image" render={(text, record) => (
                            <img alt={record.time} src={record.image} width={50} height={50} />
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
                        <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: 'red' }}>Receipt #{receiptNumber}</Typography.Text>
                    </div>
                    <div style={{
                        display: 'flex',
                        right: 65,
                        color: '#3B3A82',
                        borderRadius: 50,
                    }}> <Button
                    onClick={handlePrint}
                    style={{
                       background: '#FFFFFF',
                       border: '4px solid #5250B4',
                       borderRadius: '50px',
                       font: 'Poppins',
                       fontStyle: 'normal',
                       fontWeight: 'bold',
                       fontSize: '15px',
                       textAlign: 'center',
                       color: '#5250B4',
                       display: 'block',
                       marginTop: '30px',
                       marginLeft: '30px',
                       marginRight: '625px',
                       height: '40px',
                       width: '145px'
                   }} >PRINT </Button>
                        
                        <Button style={{
                            background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
                            borderRadius: '50px',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '25px',
                            textAlign: 'center',
                            color: '#E8E8E8',
                            display: 'block',
                            marginTop: '30px',
                            marginLeft: '0px',
                            height: '40px',
                            width: '135px'
                        }} type="primary">CONFIRM</Button>
                    </div>
                </Card>
            </center>
         
        </>
    );
};
export default CheckRec;
