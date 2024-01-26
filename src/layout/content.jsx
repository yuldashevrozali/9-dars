import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Mycontent() {
    return (
        <div>
            <Content style={{ background: 'white', padding: 24, borderRadius: 12 }} >
            <Outlet />
            </Content>
        </div>
    )
}
