import React, { useState } from 'react';
import { Button, Input, Layout, Menu, Select, Table } from 'antd';
const { Header, Content, Sider } = Layout;

import { BorderRightOutlined, ExclamationCircleFilled, FullscreenExitOutlined, HomeFilled, InfoCircleFilled, LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { Group } from 'antd/es/avatar';
import { Option } from 'antd/es/mentions';
import FormItemLabel from 'antd/es/form/FormItemLabel';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';

const Root = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider collapsed={collapse} trigger width={200}>
        <div className="layout-logo">
          <svg style={{ marginLeft: '0px', marginTop: '15px' }} xmlns="http://www.w3.org/2000/svg" width="154" height="36" fill="none" viewBox="0 0 214 46"><g clip-path="url(#logo_svg__a)"><path fill="#BA8D5B" d="m139.664 13.85-1.819.317a58.92 58.92 0 0 0-10.291 2.788V6.973l-.968.438a89.01 89.01 0 0 0-6.276 3.123L120.243.076l-1.053.676c-5.123 3.287-9.821 7.022-14.016 11.133C101.133 8.048 96.579 4.321 91.579.77L90.494 0v10.84a74.367 74.367 0 0 0-6.654-3.333l-.968-.425.046 9.282c-3.319-1.145-6.66-1.893-9.971-2.231l-1.63-.166L84.36 30.343l-.058-11.988a52.785 52.785 0 0 1 6.194 2.916v10.377l.135.184c3.835 5.186 13.923 13.622 14.351 13.978l.436.365.439-.362c.428-.353 10.524-8.702 14.361-14.09l.226-.388-.061-9.661a64.277 64.277 0 0 1 5.798-2.706v11.425l13.483-16.542Zm-12.11 4.58a58.335 58.335 0 0 1 8.676-2.547l-8.676 10.644v-8.098Zm-53.088-2.718a43.7 43.7 0 0 1 8.457 2.127l.041 8.543-8.498-10.67Zm44.409-13.11.013 8.732a69.507 69.507 0 0 0-8.57 5.806 90.134 90.134 0 0 0-1.791-1.92c-.768-.8-1.561-1.596-2.372-2.389 3.827-3.75 8.056-7.148 12.72-10.23ZM95.771 22.886a60.013 60.013 0 0 0-3.903-2.432v-7.21a75.932 75.932 0 0 1 7.381 5.106 83.76 83.76 0 0 0-3.478 4.536Zm4.545-3.687a78.27 78.27 0 0 1 3.921 3.404 75.122 75.122 0 0 0-3.603 3.924c-1.089-.9-2.34-1.87-3.738-2.862a81.976 81.976 0 0 1 3.42-4.466Zm8.941-1.2a67.178 67.178 0 0 0-4.041 3.633 79.537 79.537 0 0 0-4.014-3.49 81.054 81.054 0 0 1 3.987-4.35A93.998 93.998 0 0 1 109.257 18Zm-.207 9.482a51.02 51.02 0 0 0-3.771 3.334 51.417 51.417 0 0 0-3.593-3.398 74.162 74.162 0 0 1 3.554-3.866 78.752 78.752 0 0 1 3.81 3.93Zm-8.255.994c2.521 2.184 3.933 3.772 3.954 3.796l.5.567.516-.553c.021-.023 1.496-1.59 4.204-3.77a80.227 80.227 0 0 1 2.517 3.032l-7.023 6.67-7.132-6.623a86.383 86.383 0 0 1 2.464-3.12Zm5.424-5.894a66.233 66.233 0 0 1 3.958-3.551 77.5 77.5 0 0 1 3.886 4.787c-.129.084-.254.169-.378.252a67.33 67.33 0 0 0-3.551 2.556 80.586 80.586 0 0 0-3.915-4.044Zm5.021-4.41a67.834 67.834 0 0 1 7.653-5.24l.012 7.97a67.584 67.584 0 0 0-3.689 2.17 78.968 78.968 0 0 0-3.976-4.9ZM91.868 2.675c4.547 3.294 8.674 6.701 12.338 10.174a84.408 84.408 0 0 0-2.104 2.21 82.372 82.372 0 0 0-1.968 2.232 77.227 77.227 0 0 0-8.266-5.656v-8.96Zm-5.591 14.988c-.66-.282-1.322-.55-1.985-.801l-.037-7.656a73.166 73.166 0 0 1 6.237 3.223v7.266a54.028 54.028 0 0 0-4.215-2.032Zm8.703 6.352a87.747 87.747 0 0 0-3.111 4.84v-6.803c1.12.66 2.16 1.322 3.11 1.963Zm10.441 20.364c-1.956-1.66-9.957-8.54-13.418-13.014a87.051 87.051 0 0 1 4.102-6.57 62.01 62.01 0 0 1 3.639 2.79 90.223 90.223 0 0 0-2.886 3.68l-.37.499 8.985 8.345 8.867-8.421-.384-.495a80.85 80.85 0 0 0-2.903-3.53 64.23 64.23 0 0 1 3.824-2.73 59.137 59.137 0 0 1 3.969 6.332c-3.445 4.62-11.464 11.466-13.425 13.114Zm13.495-15.783a62.156 62.156 0 0 0-2.886-4.407 66.017 66.017 0 0 1 2.877-1.713l.009 6.12Zm1.454-8.473-.052-8.015a84.957 84.957 0 0 1 5.861-2.993v8.367a64.98 64.98 0 0 0-5.809 2.64Z"></path></g><defs><clipPath id="logo_svg__a"><path fill="#fff" d="M0 0h214v46H0z"></path></clipPath></defs></svg>
          <p>Teacher</p>
        </div>
        <Menu
          mode="inline"
          theme='dark'
          items={[
            {
              key: 1,
              label: 'Guruhlarim',
              icon: <BorderRightOutlined />
            },
            {
              key: 2,
              label: 'Profile',
              icon: <UserOutlined />
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Button
            type="text"
            icon={collapse ? <MenuUnfoldOutlined style={{ color: 'white', fontSize: '20' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}
            onClick={() => setCollapse(!collapse)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div style={{ marginLeft: '700px', gap: '20px' }} className="buttons">
            <Button style={{ background: 'white', color: 'black' }} icon={<ExclamationCircleFilled />} type='primary'>Synchronization</Button>
            <Button icon={<LoginOutlined />} style={{ color: 'white' }} type='text'>Chiqish</Button>
          </div>
        </Header>
        <Layout>

          <Content >

            <div style={{ padding: '24px', display: 'flex', gap: '15px', }}>
              <div className="search">
                <label htmlFor='input'>Guruh nomi</label><br />
                <Input id='input' style={{ width: '200px' }}></Input>

              </div>
              <div className="select">
                <label htmlFor="select">holati</label><br />
                <Select id='select'>
                  <Option>active</Option>
                  <Option>inactive</Option>
                </Select>
              </div>
              <Button style={{ marginTop: '18px' }} type='dashed'>clear</Button>

            </div>
            <Table>
                <Column title="buyurtma" dataIndex="buyurtma" key="buyurtma" />
                <Column title="guruh nomi" dataIndex="guruh" key="guruh" />
                <Column title="holati" dataIndex="holati" key="holati" />
                <Column title="lesson start date" dataIndex="start" key="start" />
                <Column title="lesson end date" dataIndex="end" key="end" />
                <Column title="info" dataIndex="info" key="info" />
            </Table>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Root;