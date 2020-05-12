import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Footers = () => {
  return (
    <div>
      <Layout>
        <Footer
          style={{
            textAlign: 'center',
            color: 'grey',
          }}
        >
          Website by Prajwal & Asad
        </Footer>
      </Layout>
    </div>
  );
};

export default Footers;
