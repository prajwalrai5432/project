import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Tabs, Slider } from 'antd';
import axios from 'axios';
// import { StickyContainer, Sticky } from 'react-sticky';

const { Search } = Input;

const { TabPane } = Tabs;

// const renderTabBar = (props, DefaultTabBar) => (
//   <Sticky bottomOffset={80}>
//     {({ style }) => (
//       <DefaultTabBar
//         {...props}
//         className='site-custom-tab-bar'
//         style={{ ...style }}
//       />
//     )}
//   </Sticky>
// );

class Landing extends Component {
  state = {
    data: null,
    loading: false,
  };
  dataRequest = (Brand) => {
    fetch(`http://localhost:5000/cars/${Brand}`, {
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
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='large'>Find Your Car</h1>
            <p className='lead'>
              Search from a complete list of cars sold all across Bengaluru
            </p>
            <Search
              style={{ borderRadius: 25, broder: 1, borderColor: 'red' }}
              className='search'
              placeholder='input search text'
              onSearch={() => this.dataRequest()}
              enterButton
            />
            <br />
            <p>
              {/* <StickyContainer>
                <Tabs
                  className='tabs'
                  defaultActiveKey='1'
                  renderTabBar={renderTabBar}
                >
                  <TabPane tab='Tab 1' key='1'>
                    Content of Tab Pane
                    1sddlsbslfnsdlfkdsfkdfa;lma;dmad;lmd;ladm;fns dgnx,vsldfa
                    sdldm;fmewriwffiwfnslsfasijoea;weaksnfdk fnssjweojeo;a;
                    asdldmsad;fnfn;ngn;gsdfn;ef
                  </TabPane>
                  <TabPane tab='Tab 2' key='2'>
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab='Tab 3' key='3'>
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </StickyContainer> */}
              <Tabs>
                <TabPane tab='Brands' key='1'>
                  {this.state.data ? (
                    this.state.data.map((element) => {
                      return (
                        <div>
                          <h1>{element.Model}</h1>
                          <img
                            src={`${element.Image}`}
                            style={{ height: 100, width: 100 }}
                          ></img>
                        </div>
                      );
                    })
                  ) : (
                    <div>
                      <Link to='/Brand/Maruti Suzuki'>
                        <a onClick={() => this.dataRequest('Maruti Suzuki')}>
                          Maruti Suzuki
                        </a>
                      </Link>
                      <Link to='/Brand/Hyundai'>
                        <a onClick={() => this.dataRequest('Hyundai')}>
                          Hyundai
                        </a>
                      </Link>
                      <a onClick={() => this.dataRequest('Tata')}>Tata</a>
                    </div>
                  )}
                </TabPane>
                <TabPane tab='Budget' key='2'>
                  <Slider
                    min={100000}
                    max={5000000}
                    range
                    defaultValue={[200000, 500000]}
                    tooltipVisible
                    mouseEnterDelay={0.1}
                    mouseLeaveDelay={0.1}
                  />
                </TabPane>
                <TabPane tab='Body Type' key='3'>
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab='Fuel Type' key='4'>
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab='Seating Capacity' key='5'>
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Landing;
