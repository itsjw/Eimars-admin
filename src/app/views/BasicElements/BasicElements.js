// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  AnimatedView,
  BasicForms
}                     from '../../components';

class BasicElements extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterBasicElements: PropTypes.func,
      leaveBasicElements: PropTypes.func
    })
  };

  componentWillMount() {
    const { actions: { enterBasicElements } } = this.props;
    enterBasicElements();
  }

  componentWillUnmount() {
    const { actions: { leaveBasicElements } } = this.props;
    leaveBasicElements();
  }

  render() {
    return(
      <AnimatedView>
       
      </AnimatedView>
    );
  }
}

export default BasicElements;
