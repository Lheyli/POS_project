import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Menu, Table,Select, Row, Col, Tabs } from 'antd';
import { CaretDownOutlined, CalendarOutlined  } from '@ant-design/icons';
import {
  fetchPopularProducts,
  selectPopularProductsForTimePeriod,
} from '../reducers/popularProductsSlice';
import { Line } from '@ant-design/charts';
import moment from 'moment';
import './net.css'
const { TabPane } = Tabs;
const events = [
  {
    date: moment().startOf('day').add(6, 'hours').toISOString(),
    title: 'Meeting with John',
    description: 'Discuss the new project',
    type: 'success',
  },
  {
    date: moment().startOf('day').add(12, 'hours').toISOString(),
    title: 'Lunch with Mary',
    description: 'Try the new restaurant',
    type: 'warning',
  },
  {
    date: moment().startOf('day').add(18, 'hours').toISOString(),
    title: 'Call with Sarah',
    description: 'Follow up on the sales report',
    type: 'error',
  },
];
function getEventsForDay(date) {
  return events.filter(event => moment(event.date).isSame(date, 'day'));
}

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

    <>
<div style={{
  display: 'flex',
  justifyContent: 'center',
  margin: '50px 0'

}}>
   
 
<Card style={{
      background: 'linear-gradient(258.36deg, #9695E8 1.29%, #5250B4 97.24%)',
      boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.25)', borderRadius: '20px', width: '500px'
    }}>
         <Row justify="space-between">
     <Col> <h1 style={{color: '#F9F9FF', font: 'Poppins', fontWeight: 'bold', fontSize: '18px'}}>Summary of Sales Report</h1></Col>
     <Col>
     <Select defaultValue="daily" style={{ width: 120,border: '#7170CF' }} onChange={handleTimeFrameChange}>
            <Option value="daily" style={{ color: '#7170CF' }} >Daily Sales</Option>
            <Option value="weekly" style={{ color: '#7170CF' }} >Weekly Sales</Option>
            <Option value="monthly" style={{ color: '#7170CF' }} >Monthly Sales</Option>
          </Select>
     </Col>
     </Row>
    
      <Line {...chartConfig} style={{ color: 'none', strokeWidth: 0 }} />
    </Card>
   
    <div style={{ width: 50 }}></div>
      <Card style={{
        width: 400,
        height: 400,
        background: '#EEEEFF',
        border: '0.5px solid #E8E8E8',
        boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        display: 'flex'
  
      }}>
        <h1 style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '21px', lineHeight: '38px' }}>Calendar</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tabs defaultActiveKey="1" tabBarStyle={{ color: '#3B3A82', fontWeight: '700', font: 'Poppins', display: 'flex', justifyContent: 'center' }}>
            <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="Today" key="1">
            <h2 style={{marginBottom: '0px', marginTop: '0px', color: '#3B3A82'}}><CalendarOutlined /> {moment().format('MMM ')}</h2>
            <h2 style={{marginBottom: '0px', marginTop: '0px', color: '#3B3A82', marginLeft: '12px'}}> {moment().format(' D ')}</h2>
            <div style={{
            position: 'absolute',
            backgroundColor: '#7170CF',
            border: '1px solid #dddddd',
            padding: 20,
            textAlign: 'center',
            background: '#7170CF',
            borderRadius: 10,
            marginLeft: '-50px', /* Updated marginLeft to marginRight */
            width: 200,
            height: 40,
            left: 135, /* Added right property */
            top: 10,
          }}>
            <h2 className="net-income-month">Product 1 expires </h2>
          </div>
          <div style={{
            position: 'absolute',
            backgroundColor: '#7170CF',
            border: '1px solid #dddddd',
            padding: 20,
            textAlign: 'center',
            background: '#7170CF',
            borderRadius: 10,
            marginLeft: '-50px', /* Updated marginLeft to marginRight */
            width: 200,
            height: 40,
            left: 135, /* Added right property */
            top: 70,
          }}>
            <h2 className="net-income-month">Product 2 low stock</h2>
          </div>
            </TabPane>
            <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="Next Week" key="2">
              <h2 style={{marginBottom: '0px', marginTop: '0px', font: 'Poppins', color: '#3B3A82'}}><CalendarOutlined /> {moment().startOf('day').add(7, 'days').format('MMM ')}</h2>
              <h2 style={{marginBottom: '0px', marginTop: '0px', font: 'Poppins', color: '#3B3A82', marginLeft: '12px'}}> {moment().startOf('day').add(7, 'days').format(' D')}</h2>
            </TabPane>
            <TabPane style={{ color: '#30304D', font: 'Poppins', fontStyle: 'normal', fontWeight: '700', fontSize: '15px', lineHeight: '38px' }} tab="This Month" key="3">
            <h2 style={{marginBottom: '0px', marginTop: '0px', color: '#3B3A82'}}><CalendarOutlined /> {moment().format('MMM ')}</h2>
              <h2 style={{marginBottom: '0px', marginTop: '0px', color: '#3B3A82', marginLeft: '8px'}}> {moment().format(' YYYY ')}</h2>
            </TabPane>
          </Tabs>
        </div>
      </Card>

</div>
   
<div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
 
      <Card style={{ width: '960px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', borderRadius: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 style={{ margin: '0', color: '#30304D', font: 'Poppins', fontWeight: 'bold' }}>Most Popular Products</h1>
          <Button
            style={{ background: '#7170CF', color: '#F9F9FF', font: ' Poppins', fontWeight: 'bold' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {timeRange} {<CaretDownOutlined />}
          </Button>
        </div>
        {menuOpen && menu}
        <br></br>
        <Table
          dataSource={popularProducts || [{}]}
          style={{ maxWidth: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
            dataIndex='category'
            key='category'
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
            }
            } />
          <Table.Column
            title=""
            dataIndex="title"
            key="title" render={(text) => (
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
            key="order" render={(text) => (
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
      </Card>
      </div>
      </>
  );
}

export default Dashboard;
