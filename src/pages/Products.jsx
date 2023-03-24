import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, Modal, DatePicker, Row, Col, Drawer, Typography } from 'antd';
import { getProducts } from '../reducers/productsAPI';
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, RightOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import '../pages/DateRangePicker.css';
import styles from './Transactions.module.css';
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [showModal, setShowModal] = useState(false); // add state for controlling modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const handleButtonClick = () => {
    setIsDrawerVisible(true);
  };
  const onDetailsClose = () => {
    setIsDrawerVisible(false);
  };
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
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const disabledEndDate = (current) => {
    return current && current < startDate;
  };
  const modalContent = (
    <Modal
      open={showModal}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      footer={null}
    >
      <Button className="btn-arrow" onClick={handleButtonClick} style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>View Details {<RightOutlined />} </Button>
      {selectedProduct && (
        <Drawer
          placement="right"
          closable={false}
          open={isDrawerVisible}
          onClose={onDetailsClose}

          width={500}
          style={{ borderRadius: '40px 0px 0px 40px' }} // Add border radius of 20px
        >
          {/* New content for the "View Details" drawer */}
          <Row justify="end">
            <Col>
              <Link to="/edit" >
                <EditOutlined style={{ color: '#9494B2', fontSize: '30px' }} />
              </Link>
              &nbsp;&nbsp;
            </Col>
          </Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <img
              src={selectedProduct.image}
              className="img-fluid"
              width={230}
              height={230}
              alt={selectedProduct.name}
              style={{ display: 'block', margin: 'auto' }}
            />
          </div>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: 'Poppins', fontWeight: 'bold', marginLeft: '10px', fontSize: '23px', marginTop: '0px' }}>

            {selectedProduct.title}
          </p>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Price</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>₱{selectedProduct.price}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Category</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.category}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Variation</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Expiration Date</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Quantity</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Created At</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated At</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated By</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{ }</Typography.Text>
          </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ borderRadius: '50px', borderColor: '#5250B4', color: '#5250B4', font: 'Poppins', fontWeight: 'bold', height: '55px', width: '205px' }} onClick={() => (selectedProduct)}>
              GENERATE QR CODE
            </Button>
          </div>
          <Row justify="end">
            <Col>
              <DeleteOutlined style={{ color: '#9494B2', fontSize: '30px' }} />
              &nbsp;&nbsp;
            </Col>
          </Row>
        </Drawer>
      )}
      <br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Edit {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Delete {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Generate QR Code{<RightOutlined />} </Button>
    </Modal>
  );
  const ActionsContent = ({ record }) => {
    console.log("🚀 ~ file: Products.jsx:183 ~ ActionsContent ~ record: sett", record)
    return (
      <Space>
        <Button onClick={() => {
          setSelectedProduct(record)
          handleShowModal()
        }} style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'bold', font: 'Poppins' }}>...</Button>
      </Space>
    )
  };
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
      render: (text, record,) => <ActionsContent record={record} />,
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
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const BREAKPOINTS = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Row gutter={[16, 16]} style={{ width: '50vw', maxWidth: 1000 }}>
        <Col
          {...BREAKPOINTS}
          style={{ display: 'flex', marginBottom: '16px', justifyContent: 'flex-start' }}
        >
          <DatePicker
             id={styles["input123"]}
            value={startDate}
            onChange={handleStartDateChange}
            placeholder="Start Date"
            style={{ width: '150px', background: '#5250B4', color: '#ffffff', font: "Poppins" }}
            format="YYYY-MM-DD"
          />&nbsp;
          <span style={{ color: '#3B3A82', font: "Poppins", fontWeight: 'bold' }}> to </span>&nbsp;
          <DatePicker
           id={styles["input123"]}
            value={endDate}
            onChange={handleEndDateChange}
            placeholder="End Date"
            disabledDate={disabledEndDate}
            format="YYYY-MM-DD"
            style={{ width: '150px', background: '#5250B4', color: '#ffffff', font: "Poppins" }}
          />
        </Col>
        <Col
          {...BREAKPOINTS}
          style={{ display: 'flex', marginBottom: '16px', justifyContent: 'flex-end' }}>
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
            <Link to='/singleprod'><Button style={{ borderColor: '#5250B4', borderRadius: '50px', color: '#3B3A82', font: "Poppins", fontWeight: 'bold', width: '150px' }}>
              SINGLE
            </Button></Link>
            &nbsp;&nbsp;
            <Link to='/multiple'><Button style={{
              background: '#5250B4',
              borderRadius: '50px',
              display: 'inline-block',
              color: '#ffffff',
              font: "Poppins",
              fontWeight: 'bold',
              width: '150px'
            }}>
              MULTIPLE
            </Button></Link>
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
        </Col>
      </Row>
      <StyledTable columns={columns} dataSource={products} rowKey="id" />
      {modalContent}
    </div>
  );
};
export default Products;
