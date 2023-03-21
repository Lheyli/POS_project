import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Menu, Table } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import {
  fetchPopularProducts,
  selectPopularProductsForTimePeriod,
} from '../reducers/popularProductsSlice';

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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', borderRadius: '20px' }}>
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
  );
}

export default Dashboard;
