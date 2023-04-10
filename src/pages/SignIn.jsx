import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import logo from "../pages/logo.png";
import signin from "../pages/signin.jpg";
import { EyeTwoTone } from '@ant-design/icons';
import { loginUser } from '../reducers/usersAPI';

const SignInPage = () => {
  const dispatch = useDispatch();
 
  const onFinish = (values) => {
    dispatch(loginUser(values))
      .then(() => {
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Row justify="center" align="middle" style={{ height: '100vh', backgroundColor: '#D6D6E5'}}>
    
    <Col xs={{ span: 24 }} md={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 0 }}>
      <div style={{ marginLeft: '15%', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="chenes">
        <Card style={{ width: '70%', backgroundColor: '#ffffff', borderRadius: '50px 0px 0px 50px' }}>
          <img src={logo} alt="img1" height={60} width={100} />
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={signin} alt="img1" height={300} width={300} />
          </div>
          <h2 style={{ textAlign: 'center', color: '#6A6A80', fontSize: "20px", font: "Poppins" }}>Manage Sales, Inventory and other Transactions</h2>
        </Card>
      </div>
    </Col>
    <Col xs={{ span: 24 }} md={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 0 }}>
    <div style={{ marginLeft:'-15%', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: '70%', backgroundImage: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)', borderRadius: '0px 50px 50px 0px' }}>
          <br></br> <br></br>
          <h2 style={{ textAlign: 'left', color: 'white', fontSize: "24px", font: "Poppins" }}>Welcome!</h2>
          <br/>
          <Form name="signin" onFinish={onFinish}>
            <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "15px", font: "Poppins" }}>Username</label>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input name="username" placeholder="Username" style={{ borderRadius: '30px', border: "1px solid #9494B" }} type="username" />
            </Form.Item>
            <br/>
            <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "15px", font: "Poppins" }}>Password</label>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password
                name="password"
                placeholder="Password"
                style={{
                  borderRadius: '30px', font: 'Poppins',
                  border: "1px solid #9494B"
                }}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                type="password"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox style={{ color: "#F9F9FF", font: 'Poppins' }}>Remember me</Checkbox>
              <a href="/forgot-password" style={{ float: 'right', color: "#A9A9CC", font: 'Poppins' }}>Forgot password?</a>
            </Form.Item>
            <Form.Item>
              <br/>
              <Button htmlType="submit" style={{ width: '100%', backgroundImage: 'linear-gradient(55.91deg, #D6D6E5 9.64%, #A9A9CC 77.84%)', fontWeight: 'bold', borderRadius: '50px', color: "#3B3A82", font: 'Poppins' }} >SIGN IN</Button>
                </Form.Item>
              </Form>
            </Card>
            </div>
            </Col>
      </Row>
  );
};
export default SignInPage;