import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

class Car extends Component {
  state = {
    carData: [],
    column: [
      {
        title: 'Brand',
        key: '1',
        dataIndex: 'Brand',
      },
      {
        title: 'Name',
        key: '2',
        dataIndex: 'Model',
      },
      {
        title: 'Price',
        key: '3',
        dataIndex: 'Price',
      },
      {
        title: 'Fuel',
        key: '4',
        dataIndex: 'Fuel',
      },
      {
        title: 'Engine',
        key: '5',
        dataIndex: 'Engine',
      },
      {
        title: 'Body',
        key: '6',
        dataIndex: 'Body',
      },
      {
        title: 'Seats',
        key: '7',
        dataIndex: 'Seats',
      },
    ],
  };
  componentDidMount() {
    console.log(this.props.match.params);
    this.dataRequest(this.props.match.params.CarId);
  }
  dataRequest = (CarId) => {
    fetch(`http://localhost:5000/gaadi/${CarId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ carData: [json] }, () =>
          console.log(this.state.carData)
        );
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        {this.state.carData.length > 0 ? (
          <div>
            <img src={this.state.carData[0].Image} style={{ height: 300 }} />
            <Table
              dataSource={this.state.carData}
              columns={this.state.column}
            />
            <Link to={`/Showrooms/${this.state.carData[0].Brand}`}>
              <button>View showrooms</button>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Car;
