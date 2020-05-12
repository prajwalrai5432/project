import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Tabs, Slider, Switch } from 'antd';
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
    values: [],
    ModelName: null,
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
            {/* <Link to={`/Model/${this.state.ModelName}`}> */}
            <Search
              style={{ borderRadius: 25, broder: 1, borderColor: 'red' }}
              className='search'
              placeholder='input search text'
              onSearch={(e) => this.setState({ ModelName: e })}
              enterButton
            />
            {/* </Link> */}
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
              <Tabs className='tabs'>
                <TabPane tab='Brands' key='1'>
                  <div>
                    <Link to='/Brand/Maruti Suzuki'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Maruti Suzuki')}
                      >
                        Maruti Suzuki
                      </a>
                    </Link>
                    <Link to='/Brand/Hyundai'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Hyundai')}
                      >
                        Hyundai
                      </a>
                    </Link>
                    <Link to='/Brand/Tata'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Tata')}
                      >
                        Tata
                      </a>
                    </Link>
                    <Link to='/Brand/Toyota'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Toyota')}
                      >
                        Toyota
                      </a>
                    </Link>
                    <Link to='/Brand/Honda'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Honda')}
                      >
                        Honda
                      </a>
                    </Link>
                    <Link to='/Brand/Mahindra'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Mahindra')}
                      >
                        Mahindra
                      </a>
                    </Link>
                    <Link to='/Brand/Ford'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Ford')}
                      >
                        Ford
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Budget' key='2'>
                  {/* <Slider
                    min={100000}
                    max={5000000}
                    range
                    defaultValue={[200000, 500000]}
                    tooltipVisible
                    mouseEnterDelay={0.1}
                    mouseLeaveDelay={0.1}
                  /> */}
                  <Slider
                    onChange={(element) => this.setState({ values: element })}
                    range
                    min={100000}
                    max={5000000}
                    defaultValue={[500000, 1000000]}
                  />
                  <Link
                    to={{
                      pathname: '/Budget/',
                      search: `?greaterthan=${this.state.values[0]}&lessthan=${this.state.values[1]}`,
                    }}
                  >
                    <button>Search</button>
                  </Link>
                </TabPane>
                <TabPane tab='Body Type' key='3'>
                  <div>
                    <Link to='/Types/Hatchback'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Hatchback')}
                      >
                        Hatchback
                      </a>
                    </Link>
                    <Link to='/Types/SUV'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('SUV')}
                      >
                        SUV
                      </a>
                    </Link>
                    <Link to='/Types/MUV'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('MUV')}
                      >
                        MUV
                      </a>
                    </Link>
                    <Link to='/Types/Sedan'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Sedan')}
                      >
                        Sedan
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Fuel Type' key='4'>
                  <div>
                    <Link to='/Fuel/Petrol'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Petrol')}
                      >
                        Petrol
                      </a>
                    </Link>
                    <Link to='/Fuel/Diesel'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Diesel')}
                      >
                        Diesel
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Seating Capacity' key='5'>
                  <div>
                    <Link to='/Cars/5'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('5')}
                      >
                        Five
                      </a>
                    </Link>
                    <Link to='/Cars/6'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('6')}
                      >
                        Six
                      </a>
                    </Link>
                    <Link to='/Cars/7'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('7')}
                      >
                        Seven
                      </a>
                    </Link>
                  </div>
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
