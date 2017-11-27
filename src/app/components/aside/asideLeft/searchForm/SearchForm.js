// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';

class SearchForm extends PureComponent {
  static propTypes = {
    onSearchSubmit: PropTypes.func
  };

  // searchinput = null;

  // componentDidMount() {
  //   this.searchinput.focus();
  // }

  render() {
    return (
      <form className="sidebar-form-cls" onKeyPress={this.handlesFormKeyPress}>
        
      </form>
    );
  }

  getRef = (ref) => (this.searchinput = ref)

  handlesFormKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      const { onSearchSubmit } = this.props;
      onSearchSubmit(this.searchinput.value.trim());
    }
  }
}

export default SearchForm;
