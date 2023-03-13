import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart, decreaseCart, increaseCart } from '../reducers/productSlice';
import { Card, Row, Col, Button, Input, Drawer } from 'antd';
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MakePurchase = () => {
  const dispatch = useDispatch();
  const { products, loading, error, cart } = useSelector(state => state.products);
  console.log({ products })
  const [quantity, setQuantity] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  console.log({
    selectedCategory,
    setSelectedCategory
  })

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showDrawer = (product) => {
    setSelectedProduct(product);
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setSelectedProduct(null);
    setIsDrawerVisible(false);
  };

  const handleDecreaseCart = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(decreaseCart(product));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleIncreaseCart = (product) => {
    setQuantity(quantity + 1);
    dispatch(increaseCart(product));
  };


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {

    console.log({
      selectedAll: selectedCategory === 'All',
      selectedCategory: product.category === selectedCategory,
    })
    return (selectedCategory === 'All' || product.category === selectedCategory?.toLowerCase()) &&
      product.title.toLowerCase().includes(searchValue.toLowerCase())
  });

  const categories = ['All', "Men's Clothing", 'Jewelery', 'Electronics', "Women's Clothing"];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Row justify="start" style={{ marginTop: '50px', marginLeft: '130px' }}>
        <Button style={{ background: '#DBDFFD' }}>
          <Link to="/purchase">
            <LeftOutlined style={{ color: '#1A2163' }} />
          </Link>
        </Button>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: "Poppins", fontWeight: 'bold', marginLeft: '10px', fontSize: '20px', marginTop: '0px' }}>MAKE PURCHASE</p>
      </Row>
      <Row justify="end">
        <Col>
          <Link to="/cart" >
            <ShoppingCartOutlined style={{ color: '#5250B4', fontSize: '30px'  }} />
          </Link>
&nbsp;&nbsp;
        </Col>
        <Col>
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearch}
            style={{ width: 200, borderRadius: '15px' }}
          />
        </Col>
      </Row>




      <Row justify="center" style={{ marginLeft: '100px', marginTop: '50px' }}>
        <Col>
          {categories.map((category) => (
            <Button
              key={category}
              type={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
              style={{
                marginRight: '10px',
                borderStyle: 'none',
                borderRadius: '50px',
                color: '#A9A9CC',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                fontSize: '30px',
                height: '50px',
                backgroundColor: selectedCategory === category ? '#5250B4' : 'transparent',
                cursor: 'pointer',
              }}
            >
              {category}
            </Button>

          ))}
        </Col>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Row justify="center">
          <Col md={17} >
            <Row gutter={[16, 16]} justify="center">
              {filteredProducts.map((product, key) => (
                <Col xs={24} sm={12} md={8} lg={8} key={key} style={{ display: 'flex', alignItems: 'center' }}>
                  <Card
                    style={{
                      width: 300,
                      height: 278.33,
                      margin: '10px',
                      borderColor: '#E8E8E8',
                      borderRadius: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <div>
                      <img
                        src={product.image}
                        className="img-fluid"
                        width={90}
                        height={90}
                        alt={product.name}
                        style={{ margin: 'auto', cursor: 'pointer' }}
                        onClick={() => showDrawer(product)}
                      />
                    </div>
                    <p style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins', fontSize: '14px' }}>{product.title}</p>
                    <p style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins', fontSize: '15px' }}>₱{product.price}</p>
                  </Card>
                </Col>

              ))}
              {selectedProduct && (
                <Drawer
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  open={isDrawerVisible}
                  width={500}
                  style={{ borderRadius: '40px 0px 0px 40px' }} // Add border radius of 20px
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                    <img
                      src={selectedProduct.image}
                      className="img-fluid"
                      width={280}
                      height={280}
                      alt={selectedProduct.name}
                      style={{ display: 'block', margin: 'auto' }}
                    />

                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: 'Poppins', fontWeight: 'bold', marginLeft: '10px', fontSize: '23px', marginTop: '0px' }}>

                      {selectedProduct.title}
                    </p>
                    <br></br> 
                    <Button className="btn-arrow" style={{ color: '#9494B2', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}>View Details {<RightOutlined />} </Button><br></br>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <p justify="start" style={{ color: '#30304D', marginRight: '200px', fontWeight: 'bold', font: 'Poppins', fontSize: '20px' }}>Price</p><p style={{ color: '#3B3A82', fontWeight: 'bold', font: 'Poppins', fontSize: '20px' }}>₱{selectedProduct.price}</p>
                    </div>
                    <div justify="end" style={{ display: 'flex', justifyContent: 'center', marginLeft: '220px' }}>
                      <Button className="btn btn-outline-dark" style={{ borderColor: 'gray' }} onClick={() => handleDecreaseCart(selectedProduct)}>
                        -
                      </Button>
                      &nbsp;
                      {quantity} &nbsp;
                      <Button className="btn btn-outline-dark" style={{ borderColor: 'black' }} onClick={() => handleIncreaseCart(selectedProduct)}>
                        +
                      </Button>
                    </div>
                    <br></br> 
                    <Button className="btn btn-outline-dark" style={{ borderRadius: '50px', background: '#5250B4', color: '#ffffff', font: 'Poppins', fontWeight: 'bold', height: '55px', width: '205px' }} onClick={() => handleAddToCart(selectedProduct)}>
                      {<ShoppingCartOutlined />} ADD TO CART
                    </Button>

                  </div>
                </Drawer>
              )}
            </Row>

          </Col>
        </Row>

      </Row>
    </>
  );
};

export default MakePurchase;