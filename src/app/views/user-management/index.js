// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
import UserView           from './UserView';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterUserView: actions.enterUserView,
        leaveUserView: actions.leaveTwitterFeed
      },
      dispatch)
  };
};

export default User(
  mapStateToProps,
  mapDispatchToProps
)(UserView);


