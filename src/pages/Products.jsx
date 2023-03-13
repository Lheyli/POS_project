import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, Modal, Input, Menu, Dropdown } from 'antd';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [showModal, setShowModal] = useState(false); // add state for controlling modal visibility
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const CreateModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleModalOk = () => {
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = () => {
    // Do something with startDate and endDate values, such as filtering a list of data
    console.log(`Filtering data between ${startDate} and ${endDate}`);
  };

  const modalContent = (
    <Modal
      open={showModal}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      footer={null}
    >
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>View Details {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Delete {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Generate QR Code{<RightOutlined />} </Button>
    </Modal>
  );

  const actionsContent = (
    <Space>
      <Button onClick={handleShowModal} style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'bold', font: 'Poppins' }}>...</Button>
    </Space>
  );

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="product" style={{ height: '50px' }} />,
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Products</span>,
      dataIndex: 'title',
      key: 'title',
      render: (text) => <span style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins' }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Category</span>,
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
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Price</span>,
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins' }}>₱{text}</span>,
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Quantity</span>,
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text) => <span style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins' }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Actions</span>,
      dataIndex: 'id',
      key: 'id',
      render: () => actionsContent,
    },
  ];


  const StyledTable = styled(Table)`
    background-color: #F9F9FF;
    border-color: #E8E8E8;
    max-width: 1000px;
    margin: auto;
    border-radius: 20px;
  `;

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
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <Input type="date" style={{ width: '150px', marginLeft: '230px', background: '#5250B4', color: '#ffffff', font: "Poppins" }} value={startDate} onChange={handleStartDateChange} />&nbsp;
        <span style={{ color: '#3B3A82', font: "Poppins", fontWeight: 'bold' }}> to </span>&nbsp;
        <Input type="date" style={{ width: '150px', background: '#5250B4', color: '#ffffff', font: "Poppins" }} value={endDate} onChange={handleEndDateChange} /> &nbsp; &nbsp;
        <Button style={{ background: '#5250B4', display: 'flex', justifyContent: 'flex-start', color: '#ffffff', font: "Poppins" }} onClick={handleFilterClick}>
          Filter Date
        </Button>
      </div>
      <div justify="end" style={{ display: 'flex', marginBottom: '16px', marginLeft: '1000px' }}>
        <Button onClick={CreateModal} style={{ borderColor: '#5250B4', borderRadius: '50px', display: 'inline-block', color: '#3B3A82', font: "Poppins", fontWeight: 'bold' }}>
          CREATE NEW
        </Button>
        <Modal
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#30304D', font: "Poppins", fontWeight: 'bold' }}>CREATE NEW PRODUCT</p>
          <Button style={{ borderColor: '#5250B4', borderRadius: '50px', color: '#3B3A82', font: "Poppins", fontWeight: 'bold',  width: '150px' }}>
            SINGLE
          </Button>&nbsp;&nbsp;
          <Button style={{
            background: '#5250B4',
            borderRadius: '50px',
            display: 'inline-block',
            color: '#ffffff',
            font: "Poppins",
            fontWeight: 'bold',
            width: '150px'
          }}>
           MULTIPLE
          </Button>
        </Modal>


        &nbsp; &nbsp;
        <Button
          style={{
            background: '#5250B4',
            borderRadius: '50px',
            display: 'inline-block',
            color: '#ffffff',
            font: "Poppins",
            fontWeight: 'bold'
          }}
          icon={<ShoppingCartOutlined />}
        > &nbsp;
          <Link to="/make">MAKE PURCHASE</Link>
        </Button>
      </div>

      <StyledTable columns={columns} dataSource={products} rowKey="id" />
      {modalContent}
    </>
  );
};

export default Products;
