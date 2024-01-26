import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const columns = [
  {
    title: 'sinf',
    dataIndex: 'sinf',
    key: 'sinf'
  },
  {
    title: 'fanlar',
    dataIndex: 'fanlar',
    key: 'fanlar'
  }
]

export default function Classes() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm(); 

  const onFinish = values => {
    // Create an array of fanlar values
    const fanlarArray = Array.from({ length: 5 }, (_, index) => values[`fan${index + 1}`]);

    // Add the new data to the existing data array
    setData([...data, { ...values, fanlar: fanlarArray }]);

    // Close the drawer
    setOpen(false);
  }

  const onClose = () => {
    form.resetFields(); 
    setOpen(false);
  }

  return (
    <div>
      <Flex>
        <h1>Classes</h1>
        <Button style={{ marginLeft: '60%' }} type="primary" onClick={() => setOpen(true)} size="large" icon={<PlusCircleFilled />}></Button>
      </Flex>

      <Table columns={columns} dataSource={data} />

      <Drawer placement='right' visible={open} onClose={onClose} title='add new class'>
        <Form form={form} onFinish={onFinish} name="add new class" layout="vertical">
          <Form.Item label='sinf' name={'sinf'}>
            <Input />
          </Form.Item>
          <Form.Item label='fanlar'>
            <Input.Group>
              {[1, 2, 3, 4, 5].map(index => (
                <Input key={index} style={{ marginBottom: '15px' }} name={`fan${index}`} />
              ))}
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">add</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
