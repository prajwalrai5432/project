import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Layout>
        <Header className='navbar'>
          <Title style={{ color: 'white' }} className='title' level={2}>
            <i className='fas fa-car'></i>
            <a href='/'>&nbsp;theAutobahn</a>
          </Title>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
