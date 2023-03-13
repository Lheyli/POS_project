import React from "react";
import { Table, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'User ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const data = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  // add more data as needed
];


const Members = () => {
    return (
      <>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
          style={{
            width: 191,
            height: 48,
            flex: "none",
            order: 0,
            flexGrow: 0,
            background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
            borderRadius: '50px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 27,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            justifyContent: 'center',
            marginRight: '150px',
          }}
        >
       <PlusOutlined /> &nbsp; &nbsp;CREATE NEW &nbsp;
        </Button>
    </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card title="Example Card" style={{ width: 1500, marginLeft: '150px', top: '50px' }}>
        <Table columns={columns} dataSource={data} style={{ width: '100%', height: 300 }} />
      </Card>
    </div>
</>
    );
  };
  
  export default Members;
  