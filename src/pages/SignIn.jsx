import { login } from '../reducers/productSlice';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import logo from "../pages/logo.png";
import signin from "../pages/signin.jpg";
import { EyeTwoTone } from '@ant-design/icons';
import { loginUser } from '../reducers/usersAPI';
const SignInPage = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onFinish = (values) => {
    dispatch(login(values));
  };

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#D6D6E5', width: '100vw', overflow: 'hidden' }}>
      {/* <div style={{ width: 600 }}> */}
      <div style={{ display: 'flex', width: 'max-content', height: '500px' }} id="chenes">
        <Card style={{ width: 400, backgroundColor: '#ffffff', borderRadius: '50px 0px 0px 50px' }}>
          <img src={logo} alt="img1" height={60} width={100} />
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={signin} alt="img1" height={300} width={300} />
          <h2 style={{ textAlign: 'center', color: '#6A6A80', fontSize: "20px", font: "Poppins" }}>Manage Sales, Inventory and other Transactions</h2>
        </Card>
        <div style={{ display: 'flex', width: '500px', height: '500px' }}>
          <Card style={{ width: 400, backgroundImage: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)', borderRadius: '0px 50px 50px 0px' }}>
            <br></br> <br></br>
            <h2 style={{ textAlign: 'left', color: 'white', fontSize: "24px", font: "Poppins" }}>Welcome!</h2>
            <Form name="signin" onFinish={onFinish}>
              <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "15px", font: "Poppins" }}>Username</label>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="Username" style={{ borderRadius: '30px', border: "1px solid #9494B" }} type="username" value={username} onChange={(e) => setUserName(e.target.value)} />
              </Form.Item>
              <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "15px", font: "Poppins" }}>Password</label>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password
                  placeholder="Password"
                  style={{
                    borderRadius: '30px', font: 'Poppins',
                    border: "1px solid #9494B"
                  }}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox style={{ color: "#F9F9FF", font: 'Poppins' }}>Remember me</Checkbox>
                <a href="/forgot-password" style={{ float: 'right', color: "#A9A9CC", font: 'Poppins' }}>Forgot password?</a>
              </Form.Item>
              <Form.Item>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button htmlType="submit" style={{ width: '50%', backgroundImage: 'linear-gradient(55.91deg, #D6D6E5 9.64%, #A9A9CC 77.84%)', fontWeight: 'bold', borderRadius: '50px', color: "#3B3A82", font: 'Poppins' }} onClick={handleLogin} >SIGN IN</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
