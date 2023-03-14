
import { Card, Table, Button } from 'antd';
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import React, { useEffect } from 'react';
import { Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from 'react-router-dom';

const Receipt = () => {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const columns = [
        {
            key: 'image',
            render: (text, record) => (
                <img src={record.image} alt={record.name} style={{ width: '50px', height: '50px' }} />
            ),
        },
        {
            dataIndex: 'title',
            key: 'productname',
            render: (text, record) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#6A6A80',
                }}>{record.title}</span>
            ),
        },

        {
            dataIndex: 'price',
            key: 'price',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: ' #9494B3',
                }}>{`(${text})`}</span> // add bold font weight to price
            ),
        },
        {
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#6A6A80',
                }}>{`X${Math.floor(Math.random() * 10) + 1}`}</span>
            ),
        },
        {
            key: 'total',
            render: (text, record) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#6A6A80',
                }}>{`₱${record.price * record.quantity}`}</span> // add bold font weight to total
            ),
        },
    ];


    return (
        <center>
            <Card style={{ backgroundColor: '#FFFFFF', width: '1000px', height: '1555px' }}>
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
                <Table columns={columns} dataSource={products} rowKey="id" style={{ margin: 'auto', maxWidth: '900px', background: '#F9F9FF' }} />
                <Divider />
                <div style={{
                    marginLeft: '625px',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '40px',
                    color: '#38384D',
                }}>
                    TOTAL: &nbsp; ₱123.45
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center', // optional, centers items vertically
                    marginLeft: '30px',
                    textAlign: 'left',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '40px',
                    color: '#555566',
                }}>
                    Tendered Amount:
                    <div style={{
                        marginLeft: '610px', // pushes the element to the right
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '40px',
                        color: '#38384D',
                    }}>
                        ₱200.00
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '30px',
                    textAlign: 'left',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '40px',
                    color: '#555566',
                }}>
                    Change:
                    <div style={{
                        marginLeft: '705px',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '40px',
                        color: '#38384D',
                    }}>
                        ₱76.55
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '30px',
                    textAlign: 'left',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '40px',
                    color: '#555566',
                }}>
                    Cash:
                    <div style={{
                        marginLeft: '722px',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '40px',
                        color: '#38384D',
                    }}>
                        ₱123.45
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginLeft: '30px', }}>
                    <p style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#656565'
                    }}>
                        {`${today}`} 3:33 pm
                    </p>

                    <p style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#AC4425'
                    }}>Receipt #122DFSR69</p>
                </div>

                <div style={{
                    display: 'flex',
                    right: 65,
                    color: '#3B3A82',
                    borderRadius: 50,
                }}>
                    <Button style={{
                        background: '#FFFFFF',
                        border: '4px solid #5250B4',
                        borderRadius: '50px',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '25px',
                        textAlign: 'center',
                        color: '#5250B4',
                        display: 'block',
                        marginTop: '30px',
                        marginLeft: '30px',
                        marginRight: '625px',
                        height: '40px',
                        width: '145px'
                    }} type="primary">PRINT RECEIPT</Button>
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
        </center >
    );
};

export default Receipt;
