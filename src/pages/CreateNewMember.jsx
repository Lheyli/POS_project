import React from "react";
import { Card, Input, Space, Typography } from "antd";


const { Text } = Typography;


const CreateNewMember = () => {


    return (
        <Card style={{ width: '1200px', margin: '0 auto' }}>
        <h2 style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '48px',
        textAlign: 'center',
        color: '#30304D'
        
    }}>CREATE NEW MEMBER</h2>
        <Space direction="horizontal">
        <div style={{ marginBottom: '20px' }}>
        <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}}>

  <Text style={{
    font: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#3B3A82',
    marginLeft: '50px'
  }}>Fill out information</Text>
  <Text style={{
    font: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#3B3A82',
    marginRight: '350px'
  }}>BATCH</Text>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <Text style={{ 
    font: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'left',
    color: '#30304D',
    marginLeft: '40px'
  }}>Please fill out new member information below</Text>
  <Input style={{ width: '200px', height: '50px', marginLeft: '350px' }} placeholder="Basic usage" />
</div>

</div></Space></Card>
    );
};

export default CreateNewMember;
