import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Menu, Table, Select, Row, Col, Tabs, Typography } from 'antd';
import { CaretDownOutlined, CalendarOutlined } from '@ant-design/icons';
import {
  fetchPopularProducts, selectPopularProductsForTimePeriod,
} from '../reducers/popularProductsSlice';
import { Line } from '@ant-design/charts';
import moment from 'moment';
import './net.css'
const { TabPane } = Tabs;
const { Title } = Typography;


const { Option } = Select;
const dailyData = [
  { date: '9:00AM', sales: 300 },
  { date: '12:00PM', sales: 400 },
  { date: '3:00PM', sales: 250 },
  { date: '6:00PM', sales: 550 },

];
const weeklyData = [
  { week: 'Week 1', sales: 1800 },
  { week: 'Week 2', sales: 2400 },
  { week: 'Week 3', sales: 2000 },
  { week: 'Week 4', sales: 2800 },
];
const monthlyData = [
  { month: 'January', sales: 10000 },
  { month: 'February', sales: 12000 },
  { month: 'March', sales: 14000 },
  { month: 'April', sales: 11000 },
  { month: 'May', sales: 13000 },
  { month: 'June', sales: 15000 },
];
const salesData = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
};
const { Item } = Menu;
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts('Today'));
    dispatch(fetchPopularProducts('Week'));
    dispatch(fetchPopularProducts('Month'));
  }, [dispatch]);
  const [timeRange, setTimeRange] = useState('Today');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = (e) => {
    setTimeRange(e.key);
    setMenuOpen(false);
  };
  const todayPopularProducts = useSelector(selectPopularProductsForTimePeriod('Today'));
  const weekPopularProducts = useSelector(selectPopularProductsForTimePeriod('Week'));
  const monthPopularProducts = useSelector(selectPopularProductsForTimePeriod('Month'));
  let popularProducts = [];
  if (timeRange === 'Today') {
    popularProducts = todayPopularProducts;
  } else if (timeRange === 'Week') {
    popularProducts = weekPopularProducts;
  } else if (timeRange === 'Month') {
    popularProducts = monthPopularProducts;
  }
  console.log("🚀 ~ file: Dashboard.jsx:36 ~ Dashboard ~ popularProducts:", popularProducts)
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Item key="Today">Today</Item>
      <Item key="Week">This Week</Item>
      <Item key="Month">This Month</Item>
    </Menu>
  );
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('daily');
  const handleTimeFrameChange = (value) => {
    setSelectedTimeFrame(value);
  };
  const data = salesData[selectedTimeFrame];
  const chartConfig = {
    data,
    xField: selectedTimeFrame === 'daily' ? 'date' : selectedTimeFrame === 'weekly' ? 'week' : 'month',
    yField: 'sales',
    height: 250,
    tooltip: {
      title: 'Sales',
    },
  };
  return (
    <div
      style={{
        paddingLeft: "20%",
        marginTop: '10px',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll',
      }}
    >
      <div style={{
        marginTop: '16px',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '30px',
        color: '#3B3A82',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span>
          Dashboard
        </span>
      </div>
      <Row justify="center" gutter={[16, 16]}>


          <Card style={{
            background: 'linear-gradient(258.36deg, #9695E8 1.29%, #5250B4 97.24%)',
            boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: 500,
            marginTop: '16px',
            height: '400px', // Set an initial height
          }}>
            <Row gutter={[16, 16]} justify="space-between" align="middle">
              <Col xs={24} md={12}>
                <h1 style={{ color: '#F9F9FF', font: 'Poppins', fontWeight: 'bold', fontSize: '15px' }}>Summary of Sales Report</h1>
              </Col>
              <Col xs={24} md={8}>
                <Select defaultValue="daily" style={{ border: '#7170CF' }} onChange={handleTimeFrameChange}>
                  <Option value="daily" style={{ color: '#7170CF' }} >Daily Sales</Option>
                  <Option value="weekly" style={{ color: '#7170CF' }} >Weekly Sales</Option>
                  <Option value="monthly" style={{ color: '#7170CF' }} >Monthly Sales</Option>
                </Select>
              </Col>
            </Row>

            <div style={{ width: '100%', height: '100%' }}>
              <Line {...chartConfig} style={{ color: 'none', strokeWidth: 0 }} />
            </div>
          </Card>

     
        <Col xs={24} md={12}>
          <Card style={{
                width: '100%',
                marginTop: '16px',
                maxWidth: 500, // Set initial width to 100% so that it stretches to the container
            height: '400px', // Set an initial height
            background: '#EEEEFF',
            border: '0.5px solid #E8E8E8',
            boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: 20,

          }}>
             <div>
      <h1 style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '21px', lineHeight: '38px' }}>Calendar</h1>
      
      <Tabs defaultActiveKey="1" tabBarStyle={{ color: '#3B3A82', fontWeight: '700', font: 'Poppins', display: 'flex', justifyContent: 'center' }}>
        <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="Today" key="1">
          <Row gutter={[16, 16]} justify="center" align="middle">
            <Col xs={24} sm={12} md={8} lg={6}>
              <h2 style={{ marginBottom: '0px', marginTop: '0px', color: '#3B3A82' }}><CalendarOutlined /> {moment().format('MMM ')}</h2>
              <h2 style={{ marginBottom: '0px', marginTop: '0px', color: '#3B3A82', marginLeft: '12px' }}> {moment().format(' D ')}</h2>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <div style={{
                backgroundColor: '#7170CF',
                border: '1px solid #dddddd',
                padding: 10,
                textAlign: 'center',
                background: '#7170CF',
                borderRadius: 10,
                width: '100%',
                height: 60,
              }}>
                <h2 className="net-income-product">Product 1 expires </h2>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <div style={{
                backgroundColor: '#7170CF',
                border: '1px solid #dddddd',
                padding: 10,
                textAlign: 'center',
                background: '#7170CF',
                borderRadius: 10,
                width: '100%',
                height: 60,
              }}>
                <h2 className="net-income-product">Product 2 low stock</h2>
              </div>
            </Col>
          </Row>
        </TabPane>
   
                <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="Next Week" key="2">
                  <h2 style={{ marginBottom: '0px', marginTop: '0px', font: 'Poppins', color: '#3B3A82' }}><CalendarOutlined /> {moment().startOf('day').add(7, 'days').format('MMM ')}</h2>
                  <h2 style={{ marginBottom: '0px', marginTop: '0px', font: 'Poppins', color: '#3B3A82', marginLeft: '12px' }}> {moment().startOf('day').add(7, 'days').format(' D')}</h2>
                </TabPane>
                <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="This Month" key="3">
                  <h2 style={{ marginBottom: '0px', marginTop: '0px', color: '#3B3A82' }}><CalendarOutlined /> {moment().format('MMM ')}</h2>
                  <h2 style={{ marginBottom: '0px', marginTop: '0px', color: '#3B3A82', marginLeft: '8px' }}> {moment().format(' YYYY ')}</h2>
                </TabPane>
              </Tabs>
            </div>
          </Card>
        </Col>
      </Row >

      <Row justify="start" style={{ marginTop: '30px' }}>
        <Col xs={22} sm={20} md={16} lg={14} xl={12}>
          <Card style={{ borderRadius: '20px', marginLeft: 70, width: 'max-content' }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={2} style={{ margin: '0', color: '#30304D', font: 'Poppins', fontWeight: 'bold', fontSize: 20 }}>Most Popular Products</Title>
              </Col>
              <Col>
                <Button
                  type="primary"
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{ fontWeight: 'bold', background: '#7170CF' }}
                >
                  {timeRange} <CaretDownOutlined />
                </Button>
              </Col>
            </Row>
            {menuOpen && menu}
            <br></br>
            <Row justify="center" style={{ marginTop: '30px' }}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Table
                  dataSource={popularProducts || [{}]}
                  style={{ maxWidth: '1000px' }}
                  pagination={false}
                >
                  <Table.Column
                    title={<span style={{ color: '#3B3A82', fontWeight: 'regular' }}>Product</span>}
                    key="image"
                    render={(text, record) => (
                      <img alt={record.time} src={record.image} width={50} height={50} />
                    )}
                  />
                  <Table.Column
                    title={<span style={{ color: '#3B3A82', fontWeight: 'regular' }}>Category</span>}
                    dataIndex="category"
                    key="category"
                    render={(text) => {
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
                    }}
                  />
                  <Table.Column
                    title=""
                    dataIndex="title"
                    key="title"
                    render={(text) => (
                      <span style={{ fontWeight: 'semiBold', color: '#3B3A82', font: 'Poppins' }}>{text}</span>
                    )}
                  />
                  <Table.Column
                    title={<span style={{ color: '#3B3A82', fontWeight: 'regular' }}>Price</span>}
                    dataIndex="price"
                    key="price"
                    style={{ fontWeight: 'bold' }}
                    render={(text) => (
                      <span style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins' }}>₱{text}</span>
                    )}
                    sorter={(a, b) => a.price - b.price}
                    sortDirections={['descend', 'ascend']}
                  />
                  <Table.Column
                    title="Orders"
                    dataIndex="order"
                    key="order"
                    render={(text) => (
                      <span style={{ fontWeight: 'semiBold', color: '#3B3A82', font: 'Poppins' }}>{text}</span>
                    )}
                  />
                  <Table.Column
                    title={<span style={{ color: '#3B3A82', fontWeight: 'regular' }}>Total Sales</span>}
                    key="totalSales"
                    render={() => {
                      const totalSales = popularProducts.reduce((acc, cur) => acc + cur.price, 0);
                      return <span style={{ fontWeight: 'bold', font: 'Poppins', color: '#3B3A82' }}>₱{totalSales}</span>;
                    }}
                  />
                </Table>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default Dashboard;