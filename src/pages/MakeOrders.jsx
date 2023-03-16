
import { Card, Table, Button } from 'antd';
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from 'react-router-dom';
const data = [
  {
    key: '1',
    productname: 'SkyFlakes Crackers',
    price: '(199.00)',
    quantity: 'x2',
    total: '₱398.00',
  },
  {
    key: '2',
    productname: 'Jack n Jill V-Cut Spicy Ba...',
    price: '(34.25)',
    quantity: 'x1',
    total: '₱34.25',
  },
  {
    key: '3',
    productname: 'Del Monte 100% Pineapple...',
    price: '(96.50)',
    quantity: 'x2',
    total: '₱193.00',
  },
];

const MakeOrders = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const [tableData, setTableData] = useState(data);

  const handleDelete = (record) => {
    const newData = tableData.filter((item) => item.key !== record.key);
    setTableData(newData);
  };


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
    {
      key: 'action',
      render: (text, record) => (
        <Button style={{ color: '#3B3A82' }} type="link" danger onClick={() => handleDelete(record)}>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];



  return (
    <center>
      <Card style={{ backgroundColor: '#FFFFFF', width: '1000px', height: '1425px' }}>
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
            <TbCircle1Filled style={{ color: '#3B3A82' }} /> &nbsp; Make orders
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
            color: '#D6D6E5'
          }}>
            <TbCircle3Filled style={{ color: '#D6D6E5' }} /> &nbsp; Receipt
          </h3></Link> &nbsp;

        </div>
        <div style={{
          marginLeft: '1px',
          textAlign: 'left',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '32px',
          color: '#9494B3',
        }}>
          Please scan product to make orders <br />
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
          lineHeight: '48px',
          color: '#38384D',
        }}>
          TOTAL: &nbsp; ₱123.45
        </div>
        <div style={{
          display: 'flex',
          right: 65,
          color: '#3B3A82',
          borderRadius: 50,
        }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to='/payment'><Button style={{
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
            marginTop: '50px',
            marginLeft: '790px',
            height: '40px',
            width: '135px'
          }} type="primary">CHECKOUT</Button></Link>
        </div>
      </Card>
    </center>
  );
};

export default MakeOrders;
