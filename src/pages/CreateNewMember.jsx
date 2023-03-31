import { Card, Typography, Input, Form, Row, Col, Button, } from "antd";
import React, { useEffect } from 'react';
import { EyeTwoTone } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";
import { createUser, updateUser, getOneUser } from '../reducers/usersAPI';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from "../componets/TextInput";
import TextInput2 from "../componets/TextInput2";
const CreateNewMember = () => {
  const params = useParams()
  const { Text } = Typography;
  const { user } = useSelector(state => state.user);
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

  useEffect(() => {

    if (params?.isUpdate) {
      dispatch(getOneUser("05c942e4-540f-4ccd-a374-a6b7bfb81a1c"))
    }
  }, [params?.isUpdate])
  useEffect(() => {

    if (user) {
      form.setFieldsValue({
        batch: user.batch,
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        email: user.email,
        username: user.username,
        password: user.password
      })
    }
  }, [user])
  return (
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
        onFinish={({ confirmPassword, ...value }) => {
          const bodyFormData = new FormData();

          const {
            batch,
            first_name,
            middle_name,
            last_name,
            email,
            username,
            password } = value;


          bodyFormData.append('batch', batch);
          bodyFormData.append('first_name', first_name);
          bodyFormData.append('middle_name', middle_name);
          bodyFormData.append('last_name', last_name);
          bodyFormData.append('email', email);
          bodyFormData.append('username', username);
          bodyFormData.append('password', password);



          if (params?.isUpdate) {
            dispatch(updateUser({
              batch,
              first_name,
              middle_name,
              last_name,
              email,
              username,
              password
            }));

          }
          else {
            dispatch(createUser({
              batch,
              first_name,
              middle_name,
              last_name,
              email,
              username,
              password
            }));
          }
        }}
      >
        <Form.Item>
         
          <h2 style={headingStyle}>{(params?.isUpdate) ? "UPDATE MEMBER" : "CREATE NEW MEMBER"}</h2>

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



    </Card >

  );
};
export default CreateNewMember;