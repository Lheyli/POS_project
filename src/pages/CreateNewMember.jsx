import { Card, Typography, Input, Form, Row, Col, Button, } from "antd";
import React, { useState } from 'react';
import { EyeTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { createUser } from '../reducers/usersAPI';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import TextInput from "../componets/TextInput";
import TextInput2 from "../componets/TextInput2";
=======
const { Title } = Typography;
>>>>>>> bb6210bf2f1058a54c83bbdf9c53bf9ee0d877b4
const CreateNewMember = () => {
  const { Text } = Typography;
  const [form] = Form.useForm();

  const dispatch = useDispatch();

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
<<<<<<< HEAD
    <Card style={{
      width: "950px",
      margin: "0 auto",
      marginTop: '50px',
      marginBottom: '50px',
      height: 'max-content',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Form form={form}
        onFinish={({confirmPassword, ...value}) => {
          /*
          value = {
            password, 
            confirmPassword,
            ...
          }
          const {confirmPassword, ...values} = value
          */
          dispatch(createUser(value));
        }}>
        <Form.Item>
          <h2 style={headingStyle}>CREATE NEW MEMBER</h2>


          <Row gutter={16}>
            <Col span={12}>
              <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 30,
                display: 'flex',
                color: '#1A2163',
                marginLeft: '10px'
              }}>Fill out information</Typography.Text>
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
            </Col>
            <Col span={12}>
              <Text
                style={{
                  font: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "#3B3A82",

                }}
              >
                BATCH
              </Text>
              < TextInput
                name="batch"
                placeholder="Batch"
              />
            </Col>
          </Row>

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
              < TextInput
                name="first_name"
                placeholder="First Name"
              />
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
              < TextInput
                name="middle_name"
                placeholder="Middle Name"
              />
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
              < TextInput2
                name="last_name"
                placeholder="Last Name"
              />
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
              < TextInput2
                name="username"
                placeholder="Username"
              />
            </Col>
          </Row>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163'
            }}>EMAIL</Typography.Text>
            < TextInput2
              name="email"
              placeholder="Email"
            />
          </Col>
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

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    id="password"
                    name="password"
                    placeholder="Password"
                    style={{
                      borderRadius: '30px',
                      font: 'Poppins',
                      boxSizing: 'border-box',
                      border: '2px solid #A9A9CC',
                      height: '50px',
                      width: '400px',
                    }}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                    type="password"
                  />
                </Form.Item>

              </div>

            </Col>
            <Col span={12}>



              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  style={{
                    borderRadius: '30px',
                    font: 'Poppins',
                    boxSizing: 'border-box',
                    border: '2px solid #A9A9CC',
                    height: '50px',
                    width: '400px',
                  }}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                  type="password"
                />
              </Form.Item>


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
            <Button

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
              }} type="primary" htmlType="submit">ADD MEMBER</Button>
          </div>

        </Form.Item>
      </Form>
=======

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px',  }}>
       
            <Form form={form}
              onFinish={(value) => {
                dispatch(createUser(value));
              }}>
              <Form.Item>
                <Title level={2} style={{
                  textAlign: 'center',
                  margin: '2rem',
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 30,

                  color: '#30304D'
                }}>CREATE NEW MEMBER</Title>
                <Row justify="space-between" align="middle" style={{ marginBottom: '50px', marginLeft: '50px' }}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Typography.Text style={{ font: 'Poppins', fontStyle: 'normal', fontWeight: 700, fontSize: 30, display: 'flex', color: '#1A2163' }}>
                      Fill out information
                    </Typography.Text>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ display: 'flex', alignItems: 'center', left: 80 }}>
                    <Text style={{ font: 'Poppins', fontStyle: 'normal', fontWeight: 700, fontSize: '18px', lineHeight: '48px', textAlign: 'center', color: '#3B3A82' }}>
                      BATCH
                    </Text>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col style={{ left: 50, bottom: 40 }}>
                    <Typography.Text
                      style={{
                        font: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "27px",
                        textAlign: "left",
                        color: "#9494B2",
                        left: 50
                      }}
                    >
                      Please fill out new member information below
                    </Typography.Text>
                  </Col>
                  <Col style={{ right: 65, bottom: 50 }}>
                    <Input
                      showSearch
                      style={{
                        boxSizing: 'border-box',
                        border: '2px solid #A9A9CC',
                        borderRadius: '30px',
                        height: '50px',
                        width: '250px',
                      }}
                      placeholder="Batch"
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={[{ value: "1", label: "BATCH 1" }, { value: "2", label: "BATCH 2" }, { value: "3", label: "BATCH 3" }, { value: "4", label: "BATCH 4" },]}
                    />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} sm={12} style={{ bottom: 10 }}>
                    <Typography.Text style={{
                      font: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: 15,
                      display: 'flex',
                      color: '#1A2163'
                    }}>FIRST NAME</Typography.Text>
                    <Input id="first_name" style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '100%' }} placeholder="First Name" />
                  </Col>
                  <Col xs={24} sm={12} style={{ bottom: 10 }}>
                    <Typography.Text style={{
                      font: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: 15,
                      display: 'flex',
                      color: '#1A2163',
                    }}>MIDDLE NAME</Typography.Text>
                    <Input id="middle_name" style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '100%' }} placeholder="Middle Name" />
                  </Col>
                </Row>
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163',
                }}>LAST NAME</Typography.Text>
                <Input id="last_name" style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '818px' }} placeholder="Last Name" />
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163',
                  marginTop: 10
                }}>USERNAME</Typography.Text>
                <Input id="username" style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '818px' }} placeholder="Username" />
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163',
                  marginTop: 10
                }}>CREATE PASSWORD</Typography.Text>
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 15,
                  display: 'flex',
                  color: '#9494B2',
                }}>Create a strong password with a mix of letters, numbers and symbols.</Typography.Text>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
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
                            id="password"
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
                  <Col xs={24} sm={12}>
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
                <Row justify="space-between" style={{ marginTop: '30px', marginRight: '20px' }}>
                  <Col>
                    <Link to='/clients'>
                      <Button
                        type="primary"
                        style={{
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
                          borderRadius: '50px',
                          height: '40px',
                          width: '145px',
                          left: 10
                        }}
                      >
                        CANCEL
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      style={{
                        borderRadius: '50px',
                        height: '40px',
                        width: '135px',
                        background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
                        left: 15,
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '25px',
                        textAlign: 'center',
                        color: '#E8E8E8',
                        display: 'block',
                      }}
                    >
                      ADD MEMBER
                    </Button>
                  </Col>
                </Row>
>>>>>>> bb6210bf2f1058a54c83bbdf9c53bf9ee0d877b4


              </Form.Item>
            </Form>
    
      </Card >
    </div >
  );
};
export default CreateNewMember;