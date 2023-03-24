import { Card, Typography, Input, Form, Row, Col, Button, } from "antd";
import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { createUser } from '../reducers/usersAPI';
import { useDispatch } from 'react-redux';
const CreateNewMember = () => {
  const { Text } = Typography;
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = (userData) => {
    dispatch(createUser(userData));
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleFormSubmit = (values) => {
    console.log('Form values:', values);
  };
  const headingStyle = {
    font: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "48px",
    textAlign: "center",
    color: "#30304D",
  };
  return (
    <Card style={{
      width: "1000px",
      margin: "0 auto",
      marginTop: '50px',
      height: '850px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2 style={headingStyle}>CREATE NEW MEMBER</h2>
      <div
        style={{
          marginBottom: "50px",
          marginLeft: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row gutter={16}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 30,
                display: 'flex',
                color: '#1A2163',
                marginLeft: '10px'
              }}>Fill out information</Typography.Text>
            </Row>
            <Text
              style={{
                font: "Poppins",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "48px",
                textAlign: "center",
                color: "#3B3A82",
                marginLeft: "300px",
              }}
            >
              BATCH
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                font: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "27px",
                textAlign: "left",
                color: "#9494B2",
              }}
            >
              Please fill out new member information below
            </Text>
            <Input
              showSearch
              style={{
                marginLeft: '258px',
                boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '250px'
              }}
              suffix={<DownOutlined />}
              placeholder="Batch"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[{ value: '1', label: 'BATCH 1' }, { value: '2', label: 'BATCH 2' }, { value: '3', label: 'BATCH 3' }, { value: '4', label: 'BATCH 4' }]}
            />
          </div>
          <br />
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                color: '#1A2163'
              }}>FIRST NAME</Typography.Text>
              <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="First Name" />
            </Col>
            <Col span={12}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                color: '#1A2163',
              }}>MIDDLE NAME</Typography.Text>
              <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Middle Name" />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                color: '#1A2163'
              }}>LAST NAME</Typography.Text>
              <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '818px' }} placeholder="Last Name" />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                color: '#1A2163'
              }}>USERNAME</Typography.Text>
              <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '818px' }} placeholder="Username" />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
              marginLeft: '10px'
            }}>CREATE PASSWORD</Typography.Text>
          </Row>
          <Row gutter={16}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 15,
              display: 'flex',
              color: '#9494B2',
              marginLeft: '10px'
            }}>Create a strong password with a mix of letters, numbers and symbols.</Typography.Text>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Form form={form} onFinish={handleFormSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please enter a password', },]}
                    style={{
                      marginBottom: '16px', color: '#1A2163', font: 'Poppins', fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: 15,
                      display: 'flex',
                    }}
                  ><br />
                    <br />
                    <Input.Password
                      style={{
                        boxSizing: 'border-box',
                        border: '2px solid #A9A9CC',
                        borderRadius: '30px',
                        height: '50px',
                        width: '400px',
                        marginLeft: '-80px',
                      }}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? (
                          <EyeTwoTone onClick={togglePasswordVisibility} />
                        ) : (
                          <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                        )
                      }
                      visibilityToggle
                      autoComplete="new-password"
                    />
                  </Form.Item>
                </div>
              </Form>
            </Col>
            <Col span={12}>
              <Form form={form} onFinish={handleFormSubmit}>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  style={{
                    marginBottom: '16px', color: '#1A2163', font: 'Poppins', fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'flex',
                  }}
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The two passwords that you entered do not match')
                        );
                      },
                    }),
                  ]}
                > <br />
                  <br />
                  <Input.Password
                    style={{
                      boxSizing: 'border-box',
                      border: '2px solid #A9A9CC',
                      borderRadius: '30px',
                      height: '50px',
                      width: '400px',
                      marginLeft: '-140px',
                    }}
                    placeholder="Confirm password"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeTwoTone onClick={toggleConfirmPasswordVisibility} />
                      ) : (
                        <EyeInvisibleOutlined onClick={toggleConfirmPasswordVisibility} />
                      )
                    }
                    visibilityToggle
                    autoComplete="new-password"
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div style={{
            display: 'flex',
            right: 65,
            color: '#3B3A82',
            borderRadius: 50,
          }}>
            <Link to='/clients'><Button style={{
              background: '#FFFFFF',
              border: '4px solid #5250B4',
              borderRadius: '50px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '25px',
              textAlign: 'center',
              color: '#5250B4',
              display: 'block',
              marginTop: '30px',
              marginLeft: '5px',
              marginRight: '535px',
              height: '40px',
              width: '145px'
            }} type="primary">CANCEL</Button></Link>
            <Form form={form}>
              <Form.Item>
                <Button
                onClick={handleRegister}
                 style={{
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
                  marginTop: '30px',
                  marginLeft: '0px',
                  height: '40px',
                  width: '135px'
                }} type="primary">ADD MEMBER</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Card >
  );
};
export default CreateNewMember;
