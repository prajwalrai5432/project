import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Price extends Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values);
    this.dataRequest(values);
  }
  dataRequest = ({ lessthan, greaterthan }) => {
    fetch(`http://localhost:5000/range`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lessthan,
        greaterthan,
      }),
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
        <h1 className='heading'>Price Range</h1>
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

export default Price;
