import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, Modal, DatePicker, Row, Col, Drawer, Typography } from 'antd';
import { getProducts, getOne, deleteOneProduct, getProductDate } from '../reducers/productSlice';
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, RightOutlined, EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import '../pages/DateRangePicker.css';
import styles from './Transactions.module.css';
const { RangePicker } = DatePicker;
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [setProducts] = useState([]);
  const products = useSelector((state) => state.products?.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [showModal, setShowModal] = useState(false); // add state for controlling modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const handleDeleteClick = (product_id) => {
    dispatch(deleteOneProduct(product_id));
  };

  const handleDateChange = async (date) => {
    const [start, end] = date.map(date => date.format('YYYY-MM-DD'));
    try {
      const response = await dispatch(getProductDate({ start, end }));
      setProducts(response.payload); // update products state with the fetched data
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleButtonClick = (product) => {
    setIsDrawerVisible(true);
    dispatch(getOne(product.id));
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

              <EditOutlined onClick={() => navigate(`/singleprod/${selectedProduct.product_id}`)} style={{ color: '#9494B2', fontSize: '30px' }} />

              &nbsp;&nbsp;
            </Col>
          </Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <img
              src={selectedProduct.image || "https://picsum.photos/230/230/"}
              className="img-fluid"
              width={230}
              height={230}
              alt={selectedProduct.name}
              style={{ display: 'block', margin: 'auto' }}
            />
          </div>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: 'Poppins', fontWeight: 'bold', marginLeft: '10px', fontSize: '23px', marginTop: '0px' }}>

            {selectedProduct.product_name}
          </p>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }} >Price</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>₱{selectedProduct.markup_price}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Category</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.product_category}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Variation</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.variation}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Expiration Date</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.expiration_date}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Quantity</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.quantity}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Created At</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.createdAt}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated At</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.updatedAt}</Typography.Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated By</Typography.Text>
            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.updated_by}</Typography.Text>
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
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }} onClick={() => navigate(`/singleprod/${selectedProduct.product_id}`)} >Edit {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }} onClick={() => handleDeleteClick(selectedProduct.product_id)}>Delete {<RightOutlined />} </Button><br></br>
      <Button className="btn-arrow" style={{ color: '#3B3A82', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>Generate QR Code{<RightOutlined />} </Button>
    </Modal>
  );
  const ActionsContent = ({ record }) => {

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
      dataIndex: 'buffer_file',
      key: 'buffer_file',
      render: (text) => <img src={`data:image/jpeg;base64, ${text}` || "https://picsum.photos/50/50/"} alt="product" style={{ height: '50px', width: '50px' }} />,
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Products</span>,
      dataIndex: 'product_name',
      key: 'product_name',
      render: (text) => <span style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins' }}>{text}</span>,
    },
    {
      title: <span style={{ fontWeight: 'bold', color: '#3B3A82', fontSize: '18px', font: 'Poppins' }}>Category</span>,
      dataIndex: 'product_category',
      key: 'product_category',
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
      dataIndex: 'markup_price',
      key: 'markup_price',
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

      <Row gutter={[16, 16]} style={{ width: 'max-content', maxWidth: 1000 }}>
        <Col
          {...BREAKPOINTS}
          style={{ display: 'flex', marginBottom: '16px', justifyContent: 'flex-start' }}
        >
          <RangePicker
            id={styles["input123"]}
            style={{
              left: '-225px',
              width: '100%',
              height: 48,
              background: '#5250B4',
              borderRadius: '10px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 27,
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#FFFFFF',
              justifyContent: 'center',
            }}
            suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
            format={dateFormatList[0]}
            onChange={handleDateChange}
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