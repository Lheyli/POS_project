import { Card, Typography, Input, Form, Row, Col, Button, Divider, } from "antd";
import { FileAddOutlined } from '@ant-design/icons';
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
        <Row justify="center" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                <Card
                    style={{ maxWidth: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}
                >
                    <Typography.Title level={2} style={{
                        font: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "48px",
                        textAlign: "center",
                        color: "#30304D",
                    }}>
                        CREATE NEW BATCH MEMBERS
                    </Typography.Title>
                    <Typography.Text style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 22,
                        display: 'flex',
                        color: '#30304D',
                        marginLeft: '50px'
                    }}>Upload CSV</Typography.Text>
                    <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px' }} />
                    <Row justify="center" align="middle">
                        <Col xs={24} md={4} style={{ textAlign: 'center', right: 40 }}>
                            <Text
                                style={{
                                    font: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    lineHeight: "48px",
                                    textAlign: "center",
                                    color: "#30304D",
                                }}
                            >
                                BATCH
                            </Text>
                        </Col>
                        <Col xs={24} md={16} tyle={{ textAlign: 'center', }}>
                            <Input
                                style={{
                                    boxSizing: 'border-box',
                                    border: '2px solid #A9A9CC',
                                    borderRadius: '30px',
                                    height: '50px',
                                    width: '112%',
                                }}
                            />
                        </Col>
                    </Row>

                    <Card
                        bordered={true}
                        style={{ width: '100%', maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}
                    >
                        <Upload {...csvProps}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FileAddOutlined style={{ color: '#53B8F1', fontSize: 100 }} />
                            </div>
                            <br />
                            <Typography.Title level={4} style={{ color: '#53B8F1', margin: 0 }}>Select a CSV file to upload</Typography.Title>
                            <Typography.Text style={{ color: '#7F7F99' }}>or drag and drop here</Typography.Text>
                        </Upload>
                    </Card>
                    <br />
                    <Typography.Text style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 22,
                        display: 'flex',
                        color: '#30304D',
                        marginLeft: '40px',
                        top: '30px'
                    }}>or upload from a URL</Typography.Text>
                    <div style={{
                        display: 'flex',
                        right: 65,
                        color: '#3B3A82',
                        borderRadius: 50,
                    }}>

                        <Row justify="space-between" align="middle">
                            <Col xs={24} md={4}>
                                <Form style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', top: '10px' }}>
                                    <Form.Item label="">
                                        <Col xs={24} md={16} tyle={{ textAlign: 'center', }}>
                                            <Input
                                                style={{
                                                    boxSizing: 'border-box',
                                                    border: '2px solid #A9A9CC',
                                                    borderRadius: '30px',
                                                    height: '50px',
                                                    width: '400px',
                                                    display: 'flex',

                                                    top: '20px'
                                                }}
                                                placeholder="Add the file URL"
                                                type="url"
                                            /></Col>
                                    </Form.Item>
                                    <Form.Item>
                                        <Col xs={24} md={16} tyle={{ textAlign: 'center', }}>
                                           
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
                                                marginLeft: '55px',
                                                height: '50px',
                                                width: '100%',

                                            }}
                                            type="primary"
                                        >
                                            UPLOAD
                                        </Button></Col>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                    </div>
                </Card>
            </Col>
        </Row>

    );
}
export default Batch;
