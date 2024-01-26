import React from 'react';
import { Layout, } from 'antd';

import Sidebar from '../layout/sidebar';
import MyHeader from '../layout/myheader';
import Mycontent from '../layout/content';

const Root = () => {

  return (
    <Layout style={{ minHeight: '100%', background: '#00152A' }}>
      <Sidebar />
      <Layout style={{}}>
      <MyHeader />
        <Layout>
        <Mycontent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Root;