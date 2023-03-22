
import { Card, Table, Button } from 'antd';
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import { DeleteOutlined } from '@ant-design/icons';
import React, {  useEffect } from 'react';
import { Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, removeFromCart } from '../reducers/productSlice';
import { Link } from 'react-router-dom';
const MakeOrders = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const handleDelete = (record) => {
    dispatch(removeFromCart(record.id));
  };
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.products);
  const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.price), 0);
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
    <>  <div style={{
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
    <center>
      <Card style={{ backgroundColor: '#FFFFFF', width: '1000px' }}>
      
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
          <Table.Column
            key='action'
            render={(text, record) => (
              <Button
                style={{ color: '#3B3A82' }}
                type='link'
                danger
                onClick={() => handleDelete(record.id)}
              >
                <DeleteOutlined />
              </Button>
            )}
          />
        </Table>
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
          TOTAL:  ₱{totalPrice.toFixed(2)}
        </div>
        <div style={{
          display: 'flex',
          right: 65,
          color: '#3B3A82',
          borderRadius: 50,
        }}>
     
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
            marginTop: '100px',
            marginLeft: '790px',
            height: '40px',
            width: '135px'
          }} type="primary">CHECKOUT</Button></Link>
        </div>
      </Card>
    </center>
    </>
  );
};
export default MakeOrders;