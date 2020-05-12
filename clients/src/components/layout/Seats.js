import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Seats extends Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidMount() {
    this.dataRequest(this.props.match.params.SeatCount);
  }
  dataRequest = (Seats) => {
    fetch(`http://localhost:5000/ride/${Seats}`, {
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
        <h1>{this.props.match.params.SeatCount} Seater Vehicles</h1>
        {this.state.data
          ? this.state.data.map((element) => {
              return (
                <div>
                  <Link to={`/Car/${element._id}`}>
                    <h1>{element.Model}</h1>
                  </Link>
                  <img
                    src={`${element.Image}`}
                    style={{ height: 100, width: 100 }}
                  ></img>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Seats;
