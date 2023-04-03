import { Card, Typography, Form, Row, Col, Button, Modal, Upload } from "antd";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct, getOne } from "../reducers/productSlice";
import TextInput from "../componets/TextInput";
import TextInput2 from "../componets/TextInput2";
import DateInput from "../componets/DateInput";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


/*

//display component
const VariationComponent = ({
  index,
  title="VARIATION X",
  placeholder = "Variation X",
  onChange
}) => (
  <Row key={`variation_${index}`} gutter={16} style={{ marginBottom: '16px' }}>
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
          VARIATION {index}
        </Typography.Text>
        < TextInput2
          name={`variation.${index}`}// variation.0
          placeholder={placeholder}
          onChange={onChange}
        />
      </Col>
    </Row>
)

// state
create 2 state arrays 
   - values - for passing to backend
       onFinish = (values) => {

        dispatch(createProduct({
          variation: variationValues
          ...value
        }));

       }
   - display 
       - for display 
       - required for onChange
          - modify values state
       - *kung gusto maremove ung specific variation
            kailangan unique ID
          - else pwede Array.pop


  

*/

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [variations, setVariations] = useState(['']); // state to store all variations
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const { product } = useSelector(state => state.products);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    // if (!file.url && !file.preview) {
    //   file.preview = await getBase64(file.originFileObj);
    // }
    if (product?.buffer_file) {
      file.preview = product?.buffer_file;
    }
    // setPreviewImage(file.url || file.preview);
    // setPreviewOpen(true);
    // setPreviewTitle(file.id || file.url.substring(file.url.lastIndexOf('/') + 1));
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


  //set default values 
  useEffect(() => {

    if (params?.isUpdate) {
      dispatch(getOne("46a9d906-7059-4dae-8a7e-7e8a0d51fda4"))
    }
  }, [params?.isUpdate])
  useEffect(() => {

    if (product) {
      form.setFieldsValue({
        product_name: product.product_name,
        product_category: product.product_category,
        quantity: product.quantity,
        // expiration_date: product.expiration_date,
        original_price: product.original_price,
        markup_price: product.markup_price,
        updated_by: product.updated_by
      })
      setFileList([{
        uid: product.buffer_file,
        name: product.image,
        status: 'done',
        url: product.buffer_file,
      }])
    }
  }, [product])
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
      <Form
        form={form}
        onFinish={(value) => {
          const bodyFormData = new FormData();

          const {
            product_name,
            product_category,
            quantity,
            expiration_date,
            original_price,
            markup_price,
            updated_by
            , ...variations } = value;


          if (params.isUpdate) bodyFormData.append('product_id', product.product_id);
          bodyFormData.append('product_name', product_name);
          bodyFormData.append('product_category', product_category);
          bodyFormData.append('quantity', quantity);
          bodyFormData.append('expiration_date', expiration_date);
          bodyFormData.append('original_price', original_price);
          bodyFormData.append('markup_price', markup_price);
          bodyFormData.append('updated_by', updated_by);
          bodyFormData.append('variation', Object.values(variations));
          if (fileList.length > 0) bodyFormData.append('image', fileList[0]);


          if (params?.isUpdate) {
            dispatch(updateProduct(bodyFormData));

          }
          else { dispatch(createProduct(bodyFormData)); }
        }}

      //set default values 
      // initialValues={params?.isUpdate && {
      //   product_name: "product_name",
      //   product_category: "product_category",
      //   quantity: "15",
      //   // expiration_date: new Date("2023-03-28"),
      //   original_price: "12",
      //   markup_price: "15",
      //   updated_by: "updated_by"
      // }}

      >
        <h2 style={headingStyle}>{(params?.isUpdate) ? "UPDATE PRODUCT" : "CREATE NEW PRODUCT"}</h2>
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
            {/* 

            <div>

              <img />

              <button>add image</button>
              </div>
            */}
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
            < TextInput
              name="product_name"
              placeholder="Product Name"
            />
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}>CATEGORY</Typography.Text>
            < TextInput
              name="product_category"
              placeholder="Product Category"
            />
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
              < TextInput
                name="quantity"
                placeholder="Quantity"
              />
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
            < DateInput
              name="expiration_date"
              placeholder="Expiration Date"
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
              color: '#AC4425'
            }}>ORIGINAL PRICE</Typography.Text>
            < TextInput
              name="original_price"
              placeholder="Original Price"
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
            }}>MARKUP PRICE</Typography.Text>
            < TextInput
              name="markup_price"
              placeholder="Markup Price"
            />
          </Col>
        </Row>
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
            Updated By
          </Typography.Text>
          < TextInput2
            name="updated_by"
            placeholder="Updated By"
          />
        </Col>
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
              < TextInput2
                name={`variation.${index}`}// variation.0
                placeholder="Variation"
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
        </div>
      </Form>

    </Card >
  );
};
export default SingleProduct;
