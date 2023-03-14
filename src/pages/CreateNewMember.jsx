import { Card, Select, Typography } from "antd";

const { Text } = Typography;

function CreateNewMember() {

  const headingStyle = {
    font: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "48px",
    textAlign: "center",
    color: "#30304D",
  };

  const contentStyle = {
    marginLeft: "100px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "left",
    color: "#30304D",
  };

  return (
    <Card style={{ width: "1200px", margin: "0 auto" }}>
      <h2 style={headingStyle}>CREATE NEW MEMBER</h2>
      <div
        style={{
          marginBottom: "100px",
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
            <h2
              style={{
                font: "Poppins",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "50px",
                color: "#3B3A82",
                marginRight: "50px",
              }}
            >
              Fill out information
            </h2>
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
            <Select
              showSearch
              style={{
                width: 200,
                marginLeft: '350px',
                color: '#A9A9CC',
                border: '2px solid #A9A9CC',
                borderRadius: '8px'
              }}
              placeholder="Batch"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[{ value: '1', label: 'BATCH 1' }, { value: '2', label: 'BATCH 2' }, { value: '3', label: 'BATCH 3' }, { value: '4', label: 'BATCH 4' }]}
            />


          </div>
        </div>
      </div>
    </Card>
  );
}

export default CreateNewMember;
