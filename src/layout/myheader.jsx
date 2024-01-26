import {  ExclamationCircleFilled, LoginOutlined, } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

export default function MyHeader() {
  return (
    <div>
        <Header style={{ minHeight:'100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <Button
            type="text"
            // icon={collapse ? <MenuUnfoldOutlined style={{ color: 'white', fontSize: '20' }} /> : <MenuFoldOutlined style={{ color: 'white' }} />}

            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div style={{ marginLeft: '700px', gap: '20px', display:'flex' }} className="buttons">
            <Button style={{ background: 'white', color: 'black' }} icon={<ExclamationCircleFilled />} type='primary'>Synchronization</Button>
            <Button icon={<LoginOutlined />} style={{ color: 'white' }} type='text'>Chiqish</Button>
          </div>
        </Header>
    </div>
  )
}
