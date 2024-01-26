import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { useState } from "react";

const columns = [
  {
    title: 'ism',
    dataIndex: 'firstname',
    key: 'firstname'
  },
  {
    title: 'familya',
    dataIndex: 'lastname',
    key: 'lastname'
  }
]

export default function Teachers() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm(); // Use Form hook to get form instance

  const onFinish = values => {
    setData([...data, values]);
    setOpen(false);
  }

  const onClose = () => {
    form.resetFields(); // Reset form fields when Drawer is closed
    setOpen(false);
  }

  return (
    <div>
      <Flex>
        <h1>Teachers</h1>
        <Button style={{marginLeft:'60%'}} type="primary" onClick={() => setOpen(true)} size="large" icon={<PlusCircleFilled />}></Button>
      </Flex>

      <Table columns={columns} dataSource={data} />

      <Drawer placement='right' visible={open} onClose={onClose} title='add new teacher'>
        <Form form={form} onFinish={onFinish} name="add new teacher" layout="vertical">
          <Form.Item label='ism' name={'firstname'}>
            <Input />
          </Form.Item>
          <Form.Item label='familya' name={'lastname'}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">add</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
