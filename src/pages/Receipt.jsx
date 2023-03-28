
import { Card, Table, Button, Typography } from 'antd';
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import React, { useEffect, useState } from 'react';
import { Divider, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from 'react-router-dom';
import { updateReceiptNumber } from '../reducers/receiptSlice';
const Receipt = () => {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const now = new Date();
    const currentDateTime = now.toLocaleString(); // e.g. "3/14/2023, 3:30:15 PM"
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.products);
    const [tenderedAmount] = useState(0);
    const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    const change = tenderedAmount - totalPrice;
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const receiptNumber = useSelector(state => state.receipt.receiptNumber);
    useEffect(() => {
        dispatch(fetchProducts(), updateReceiptNumber());
    }, [dispatch]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

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
                    color: '#D6D6E5'
                }}>
                    <TbCircle1Filled style={{ color: '#D6D6E5' }} /> &nbsp; Make orders
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
                    <TbCircle2Filled style={{ color: '#D6D6E5' }} /> &nbsp; Payment
                </h3></Link> &nbsp;
                &nbsp; &nbsp; <TbChevronRight /> &nbsp;
                <Link to='/receipt'><h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '25px',
                    lineHeight: '50px',
                    color: '#3B3A82'
                }}>
                    <TbCircle3Filled style={{ color: '#3B3A82' }} /> &nbsp; Receipt
                </h3></Link> &nbsp;
            </div>
            <div style={{
                marginLeft: '1px',
                textAlign: 'left',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '48px',
                color: '#6A6A80',
            }}>
                {`${today}`}
            </div>
            <br />
            <center>
                <Card id="receipt-info" style={{ backgroundColor: '#FFFFFF', width: '1000px' }}>

                    <Table dataSource={cartItems} style={{ margin: 'auto', maxWidth: '900px', background: '#F9F9FF' }}>
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
                    <Divider />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Total: ₱{totalPrice.toFixed(2)}</Typography.Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Tendered Amount:</Typography.Text>
                            <Typography.Text style={{ width: '200px' }} > {tenderedAmount}</Typography.Text>
                        </div>

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
                </Card>
                <Row justify="flex-start">
                    <Col span={6}>
                        <Button
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
                                height: '40px',
                                width: '30%'
                            }}
                        >
                            PRINT
                        </Button>
                    </Col>
                    <Col span={6} offset={1}>
                        <Button
                            style={{
                                background:
                                    'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
                                borderRadius: '50px',
                                font: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '15px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                color: '#E8E8E8',
                                display: 'block',
                                height: '40px',
                                width: '30%'
                            }}
                            type="primary"
                        >
                            CONFIRM
                        </Button>
                    </Col>
                </Row>
            </center >
        </>
    );
};
export default Receipt;
