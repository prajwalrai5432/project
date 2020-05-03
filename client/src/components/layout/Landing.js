import React from 'react';
//import Xyz from './Xyz';
import { Slider, Switch } from 'antd';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='large'>Find Your Car</h1>
          <p className='lead'>
            Search from a complete list of cars sold all across Bengaluru
          </p>
          <form>
            <div className='search'>
              <input
                type='text'
                className='search-field'
                placeholder='Search by model name'
              />
              <button className='search-btn'>Search</button>
            </div>
          </form>
          <h1>
            <br />
            <br />
          </h1>

          <div className='tabs'>
            <div className='tab-2'>
              <label for='tab2-1'>One</label>
              <input
                id='tab2-1'
                name='tabs-two'
                type='radio'
                defaultChecked='checked'
              />
              <div>
                <h4>Tab One</h4>
                <p>
                  Donec interdum ante ut enim consequat, quis varius nulla
                  dapibus. Vivamus mollis fermentum augue a varius. Vestibulum
                  in sapien at lectus gravida lobortis vulputate sed metus. Duis
                  scelerisque justo et maximus efficitur. Donec eu eleifend
                  quam. Curabitur aliquet commodo sapien eget vestibulum.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Vestibulum vel aliquet nunc,
                  finibus posuere lorem. Suspendisse consectetur volutpat est ut
                  ornare.
                </p>
              </div>
            </div>
            <div className='tab-2'>
              <label for='tab2-2'>Two</label>
              <input id='tab2-2' name='tabs-two' type='radio' />
              <div>
                <h4>Tab Two</h4>
                {/* class Xyz extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }; */}

                {/* render() {
    const { disabled } = this.state;
    return ( */}
                <div>
                  <Slider defaultValue={30} disabled={true} />
                  <Slider range defaultValue={[20, 50]} disabled={true} />
                  Disabled:{' '}
                  <Switch
                    size='small'
                    // checked={d}
                    // onChange={this.handleDisabledChange}
                  />
                </div>
                {/* );
  } */}
                {/* } */}
              </div>
            </div>
            <div className='tab-2'>
              <label for='tab2-3'>Three</label>
              <input id='tab2-3' name='tabs-two' type='radio' />
              <div>
                <h4>Tab Three</h4>
                <p>
                  Quisque sit amet turpis leo. Maecenas sed dolor mi.
                  Pellentesque varius elit in neque ornare commodo ac non
                  tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi
                  tristique lorem eget iaculis consectetur. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Aenean at tellus eget risus tempus ultrices. Nam
                  condimentum nisi enim, scelerisque faucibus lectus sodales at.
                </p>
              </div>
            </div>
            <div className='tab-2'>
              <label for='tab2-4'>Four</label>
              <input id='tab2-4' name='tabs-two' type='radio' />
              <div>
                <h4>Tab Four</h4>
                <p>
                  Quisque sit amet turpis leo. Maecenas sed dolor mi.
                  Pellentesque varius elit in neque ornare commodo ac non
                  tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi
                  tristique lorem eget iaculis consectetur. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Aenean at tellus eget risus tempus ultrices. Nam
                  condimentum nisi enim, scelerisque faucibus lectus sodales at.
                </p>
              </div>
            </div>
          </div>
          {/* <Form inline>
            <FormGroup>
              <Input
                type='search'
                name='search'
                id='exampleSearch'
                placeholder='search placeholder'
              />
            </FormGroup>
            <Button>Search</Button>
          </Form> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
