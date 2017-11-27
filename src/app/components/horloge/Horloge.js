// @flow weak

import React, {
  PureComponent
}                 from 'react';
import moment     from 'moment';

const CENTIEME_SEC = 1000;
const DATE_FORMAT  = 'MM/DD/YYYY';
const TIME_FORMAT  = 'HH:mm:ss';

class Horloge extends PureComponent {
  state = {
    date: moment().format('DD/MM/YYYY'),
    time: moment().format('HH:MM:SS')
  };

  horloge = null;

  componentDidMount() {
    this.horloge = setInterval(
      () => this.ticTac(),
      CENTIEME_SEC
    );
  }

  componentWillUnmount() {
    clearInterval(this.horloge);
    this.horloge = null;
  }

  render() {
    const { time, date } = this.state;
    return (
      <div
        className="row horlogeContainer dateAndTimeContainer text-center"
        style={{marginLeft: 0, marginRight: 0}}>
        
      </div>
    );
  }

  ticTac() {
    this.setState({
      date: moment().format(DATE_FORMAT),
      time: moment().format(TIME_FORMAT)
    });
  }
}

export default Horloge;
