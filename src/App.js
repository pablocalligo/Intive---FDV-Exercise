import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid'
import Form from './containers/Form'
import Visitors from './containers/Visitors'

import './App.css';


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
        <div className="App">
          <Row >
            <Col xs><h1>Intive - FDV Exercise</h1></Col>
          </Row>
          <Row>
            <Col xs>
              <Form />
            </Col>
            <Col xs>
              <Visitors />
            </Col>
          </Row>
          <Row end='xs'>
            <Col xs><h3 className='miNombre'>Pablo Calligo</h3></Col>
          </Row>
        </div>
        </Row>
      </Grid>
    );
  }
}
export default App