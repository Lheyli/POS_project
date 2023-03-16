import { Card, Typography, Input, Form, Row, Col, Button, Divider, } from "antd";
import React, { useState } from 'react';
import { DownOutlined, PlusOutlined, LoadingOutlined, FileAddOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Text } = Typography;

function handleUpload(file) {
}

const csvProps = {
    accept: '.csv',
    beforeUpload: (file) => {
        const isCSV = file.type === 'text/csv';
        if (!isCSV) {
            message.error('You can only upload CSV files!');
            return false;
        }
        handleUpload(file);
        return false;
    },
};
function Batch() {

    const [form] = Form.useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleFormSubmit = (values) => {
        console.log('Form values:', values);
    };

    const [loading, setLoading] = useState(false);

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );


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
        <Card style={{ width: "1000px", margin: "0 auto" }}>
            <h2 style={headingStyle}>CREATE  NEW BATCH MEMBERS</h2>
            <Row gutter={16}>
                <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 22,
                    display: 'flex',
                    color: '#30304D',
                    marginLeft: '50px'
                }}>Upload CSV</Typography.Text>
            </Row>
            <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text
                    style={{
                        font: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "48px",
                        textAlign: "center",
                        color: "#30304D",
                        marginLeft: "50px",
                    }}
                >
                    BATCH
                </Text>
                <Input
                    showSearch
                    style={{
                        marginLeft: '20px',
                        boxSizing: 'border-box',
                        border: '2px solid #A9A9CC',
                        borderRadius: '30px',
                        height: '50px',
                        width: '795px'
                    }}
                    suffix={<DownOutlined />}
                    placeholder="Batch"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        { value: '1', label: 'BATCH 1' },
                        { value: '2', label: 'BATCH 2' },
                        { value: '3', label: 'BATCH 3' },
                        { value: '4', label: 'BATCH 4' }
                    ]}
                />
            </div>
            <br />
            <Card
                style={{ borderStyle: 'dashed', borderWidth: '1px', borderColor: '#53B8F1', width: '900px', height: '400px', marginLeft: '25px' }}
            >
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Upload {...csvProps}>

                        <FileAddOutlined style={{ color: '#53B8F1', fontSize: 100 }} />
                        <br/>

                    </Upload>
                </div>
                <br/>
                <br/>
                <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 22,
                    display: 'flex',
                    color: '#53B8F1',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center'
                }}>Select a CSV file to upload</Typography.Text>
                <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 22,
                    display: 'flex',
                    color: '#7F7F99',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center'
                }}>or drag and drop here</Typography.Text>
            </Card>
            <br />
            <Typography.Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 22,
                display: 'flex',
                color: '#30304D',
                marginLeft: '50px',
                top: '30px'
            }}>or upload from a URL</Typography.Text>
            <div style={{
                display: 'flex',
                right: 65,
                color: '#3B3A82',
                borderRadius: 50,
            }}>
                <br />
                <br />
                <br />
                <Row gutter={16}>
                    <Col span={12}>
                        <Form style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', top: '10px' }}>
                            <Form.Item label="">
                                <Input
                                    style={{
                                        marginLeft: '45px',
                                        boxSizing: 'border-box',
                                        border: '2px solid #A9A9CC',
                                        borderRadius: '30px',
                                        height: '50px',
                                        width: '600px',
                                        top: '20px'
                                    }}
                                    placeholder="Add the file URL"
                                    type="url"
                                />
                            </Form.Item>

                            <Form.Item>
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
                                        top: '20px',
                                        marginLeft: '75px',
                                        height: '50px',
                                        width: '200px'
                                    }}
                                    type="primary"
                                >
                                    UPLOAD
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </div>


        </Card >
    );
}

export default Batch;
