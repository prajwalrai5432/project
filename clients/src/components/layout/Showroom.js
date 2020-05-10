import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

class Showroom extends Component {
  state = {
    showroomData: [],
    column: [
      {
        title: 'Name',
        key: '1',
        dataIndex: 'Name',
      },
      {
        title: 'Contact',
        key: '2',
        dataIndex: 'Contact',
      },
      {
        title: 'Address',
        key: '3',
        dataIndex: 'Location',
      },
    ],
  };
  componentDidMount() {
    console.log(this.props.match.params);
    this.dataRequest(this.props.match.params.Brand);
  }
  dataRequest = (Brand) => {
    fetch(`http://localhost:5000/showrooms/${Brand}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ showroomData: json }, () =>
          console.log(this.state.showroomData)
        );
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <Table
          dataSource={this.state.showroomData}
          columns={this.state.column}
          pagination={{
            total: this.state.showroomData.length,
            pageSize: this.state.showroomData.length,
            hideOnSinglePage: true,
          }}
        />
      </div>
    );
  }
}

export default Showroom;
