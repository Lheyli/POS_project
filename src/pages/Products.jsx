import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button } from 'antd';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from "react-router-dom";

const columns = [
  {
    title: 'Products',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <img src={text} alt="product" style={{ height: '50px' }} />,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text) => {
      let color = '';

      switch (text) {
        case 'electronics':
          color = '#53B8F1';
          break;
        case 'jewelery':
          color = '#C77E11';
          break;
        case 'men clothing':
          color = '#25B053';
          break;
        case 'women clothing':
          color = '#F1536E';
          break;
        default:
          color = 'default';
      }

      return <Button type="primary" ghost style={{ borderColor: color, color: color }}>{text}</Button>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => `₱${text}`,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Actions',
    dataIndex: 'id',
    key: 'id',
    render: (id) => (
      <Space>

        <Button type="primary">View More</Button>

      </Space>
    ),
  },
];

const Products = () => {
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

  return (
    <>
      <Button style={{ background: '#5250B4' }}>Filter</Button>
      <Button style={{ borderColor: '#5250B4', borderRadius: '50px' }}>
        <Link to="/create">+ CREATE NEW
        </Link></Button>
      <Button style={{ background: '#5250B4',borderRadius: '50px' }}>
        <Link to="/purchase" > MAKE PURCHASE
        </Link>
      </Button>
      <Table columns={columns} dataSource={products} rowKey="id" style={{ margin: 'auto', maxWidth: '900px', background: '#F9F9FF' }} />
    </>
  );
};

export default Products;
