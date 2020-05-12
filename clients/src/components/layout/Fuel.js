import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Fuel extends Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidMount() {
    this.dataRequest(this.props.match.params.FuelType);
  }
  dataRequest = (Fuel) => {
    fetch(`http://localhost:5000/vehicle/${Fuel}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) =>
        this.setState({ data: json }, () => console.log(this.state.data))
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1 className='heading'>
          {this.props.match.params.FuelType} Engine Vehicles
        </h1>
        {this.state.data
          ? this.state.data.map((element) => {
              return (
                <div className='list'>
                  <img src={`${element.Image}`} style={{ height: 150 }}></img>
                  <Link to={`/Car/${element._id}`}>
                    <h3>{element.Model}</h3>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Fuel;
