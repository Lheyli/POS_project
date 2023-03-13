import React, { useState, useEffect } from 'react';
import { DatePicker, Card, Table, Button, Drawer } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined, RightOutlined, CaretDownOutlined, MoreOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);

const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];


const Transactions = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setSelectedProduct(record);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
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
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Time</span>,
      key: 'time',
      dataIndex: 'time',
      render: (time) => <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '36px',
        color: '#3B3A82',
      }}>{new Date(time).toLocaleTimeString()}</span>
    },

    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Orders</span>,
      dataIndex: 'title',
      key: 'productname',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{record.title}</span>
      ),
    },

    {
      title: <span style={{

        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Price <CaretDownOutlined /></span>,
      dataIndex: 'price',
      key: 'price',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`(₱${text})`}</span>
      ),
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Quantity</span>,
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <span style={{
          display: 'flex',
          justifyContent: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`X${Math.floor(Math.random()) + 1}`}</span>
      ),

    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Total</span>,
      key: 'total',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`₱${record.price * record.quantity}`}</span> // add bold font weight to total
      ),
    },
    {
      key: 'action',
      render: (text) => (
        <Button style={{ color: '#3B3A82' }} type="link" >
          <RightOutlined />
        </Button>
      ),
    },
  ];
  return (
    <>

      <div justify='start' style={{
        marginTop: '120px',
        width: '100%',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#30304D',
      }}>
        <span style={{ marginLeft: '350px', }}>
          {today}</span></div>
      <br></br>
      <div justify='start' style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <span style={{ marginLeft: '350px', }}>
          <DatePicker
            id={styles["input123"]}
            style={{
              width: 191,
              height: 48,
              flex: "none",
              order: 0,
              flexGrow: 0,
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
              justifyContent: 'center'
            }}
            suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
            defaultValue={dayjs("01/01/2023", dateFormatList[0])}
            format={dateFormatList[0]}
          />
        </span>
        <Button
          style={{
            width: 191,
            height: 48,
            flex: "none",
            order: 0,
            flexGrow: 0,
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
            marginLeft: '10px'
          }}
        >
          EXPORT
        </Button>
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', background: '#F9F9FF'  }}>
        <Card
          style={{ backgroundColor: '#FFFFFF', width: '1000px', height: '500px' }}
        >
          <Table
            columns={columns}
            dataSource={products}
            rowKey="id"
            onRow={(record) => ({
              onClick: () => {
                showDrawer(record);
              },
            })}
            style={{ margin: 'auto', background: '#F9F9FF' }}
          />
        </Card>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={isDrawerVisible}
        width={600}
        style={{ borderRadius: '40px 0px 0px 40px' }}
      >

        <div style={{ textAlign: 'left', marginLeft: '30px' }}>
          <p
            style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '21px',
              color: '#656565',
            }}
          >
            {`${today}`} | 3:33 pm
          </p>
        </div>

        <div style={{ float: 'right' }}>
          <MoreOutlined style={{ color: '#000000', height: '50px', width: '40px' }} />
        </div>

        <div
          justify="start"
          style={{
            marginTop: '50px',
            width: '100%',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '28px',
            color: '#30304D',
          }}
        >
          <span style={{ marginLeft: '30px' }}>₱398.00 Payment</span>
        </div>

        <div style={{ textAlign: 'left', marginLeft: '30px' }}>
          <p
            style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '21px',
              color: '#656565',
            }}
          >
            {`${today}`} 3:33 pm
          </p>
        </div>
        <div
          justify="start"
          style={{
            marginTop: '50px',
            width: '100%',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '28px',
            color: '#30304D',
          }}
        >
          <Table
            columns={[
              {
                title: '',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => (
                  <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#30304D',
                  }}>{record.title}</span>
                ),
              },
              {
                title: '',
                dataIndex: 'price',
                key: 'price',
                render: (text) => (
                  <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#30304D',
                  }}> {`(₱${text})`}</span>
                ),
              },

              {
                title: '',
                dataIndex: 'quantity',
                key: 'quantity',
                render: (text, record) => (
                  <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#30304D',
                  }}>{`${Math.floor(Math.random()) + 1}`}</span>
                ),

              },
              {
                title: '',
                dataIndex: 'price',
                key: 'price',
                render: (text) => (
                  <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '15px',
                    lineHeight: '36px',
                    color: '#30304D',
                  }}> {`(₱${text})`}</span>
                ),
              },
            ]}
            dataSource={[selectedProduct]}
            rowKey="id"
            pagination={false}
          />
        </div>

        <div style={{
          marginTop: '50px',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '30px',
          textAlign: 'left',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '40px',
          color: '#30304D',
        }}>
          TOTAL:
          <div style={{
            marginLeft: '380px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '40px',
            color: '#30304D',
          }}>
            ₱109.95
          </div>
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
          color: '#30304D',
        }}>
          Tendered
          <div style={{
            marginLeft: '362px', // pushes the element to the right
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '40px',
            color: '#30304D',
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
          color: '#30304D',
        }}>
          Change:
          <div style={{
            marginLeft: '370px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '40px',
            color: '#30304D',
          }}>
            (₱76.55)
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
          color: '#30304D6',
        }}>
          Cash:
          <div style={{
            marginLeft: '394px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '40px',
            color: '#30304D',
          }}>
            ₱398.00
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
      </Drawer>
    </>

  );
};

export default Transactions;
