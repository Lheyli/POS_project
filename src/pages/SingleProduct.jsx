import { Card, Typography, Input, Form, Row, Col, Button, Modal, Upload, DatePicker } from "antd";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { createProduct } from "../reducers/productSlice";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const SingleProduct = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [variations, setVariations] = useState(['']); // state to store all variations
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const addVariation = () => {
    setVariations([...variations, '']); // add an empty string to the variations array
  };
  const handleVariationChange = (index, event) => {
    const newVariations = [...variations]; // create a copy of the variations array
    newVariations[index] = event.target.value; // update the value of the variation at the given index
    setVariations(newVariations); // update the variations state
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
      width: "950px",
      margin: "0 auto",
      marginTop: '50px',
      marginBottom: '50px',
      height: 'max-content',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <h2 style={headingStyle}>CREATE NEW PRODUCT</h2>
      <Row gutter={16}>
        <Typography.Text style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 30,
          display: 'flex',
          color: '#1A2163',
          marginLeft: '10px'
        }}>Details</Typography.Text>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img
              alt="example"
              style={{
                width: '100%',
              }}
              src={previewImage}
            />
          </Modal>
        </Col>
        <Col span={12}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 15,
            display: 'flex',
            color: '#1A2163',
          }}>PRODUCT NAME</Typography.Text>
          <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Product Name" />
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 15,
            display: 'flex',
            color: '#1A2163',
          }}>CATEGORY</Typography.Text>
          <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Category" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Typography.Text style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 30,
          display: 'flex',
          color: '#1A2163',
          marginLeft: '10px'
        }}>Variations</Typography.Text>
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
          }}>QUANTITY</Typography.Text>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '300px', textAlign: 'center' }}
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            &nbsp;&nbsp;
            <Button
              style={{ marginRight: 8 }}
              onClick={handleQuantityDecrement}
            >
              -
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={handleQuantityIncrement}
            >
              +
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 15,
            display: 'flex',
            color: '#1A2163',
          }}>EXPIRATION DATE</Typography.Text>
          <DatePicker style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Expiration Date" />
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
            color: '#AC4425'
          }}>ORIGINAL PRICE</Typography.Text>
          <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Original Price" />
        </Col>
        <Col span={12}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 15,
            display: 'flex',
            color: '#1A2163',
          }}>MARKUP PRICE</Typography.Text>
          <Input style={{ boxSizing: 'border-box', border: '2px solid #A9A9CC', borderRadius: '30px', height: '50px', width: '400px' }} placeholder="Markup Price" />
        </Col>
      </Row>
      {variations.map((variation, index) => (
        <Row key={index} gutter={16} style={{ marginBottom: '16px' }}>
          <Col span={12}>
            <Typography.Text
              style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 15,
                display: 'flex',
                color: '#1A2163',
              }}
            >
              VARIATION
            </Typography.Text>
            <Input
              style={{
                boxSizing: 'border-box',
                border: '2px solid #A9A9CC',
                borderRadius: '30px',
                height: '50px',
                width: '818px',
              }}
              placeholder="Variation"
              value={variation}
              onChange={(event) => handleVariationChange(index, event)}
            />
          </Col>
        </Row>
      ))}
      <Button style={{
        boxSizing: 'border-box',
        border: '2px solid #A9A9CC',
        borderRadius: '30px',
        height: '50px',
        width: '700px',
        color: '#555566',
        font: 'Poppins',
        fontWeight: 'bold',
        marginLeft: '50px'
      }}
        onClick={addVariation}>
        ADD VARIATION
      </Button>
      <div style={{
        display: 'flex',
        right: 65,
        color: '#3B3A82',
        borderRadius: 50,
      }}>
        <Link to='/products'><Button style={{
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
          marginTop: '100px',
          marginLeft: '5px',
          marginRight: '535px',
          height: '40px',
          width: '145px'
        }} type="primary">CANCEL</Button></Link>
        <Form 
        form={form} 
        onFinish={() => {
          dispatch(createProduct());
        }}>
          <Form.Item>
            <Button style={{
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
              marginTop: '100px',
              marginLeft: '0px',
              height: '40px',
              width: '135px'
            }} type="primary" htmlType="submit">ADD PRODUCT</Button>
          </Form.Item>
        </Form>
      </div>
    </Card >
  );
};
export default SingleProduct;
