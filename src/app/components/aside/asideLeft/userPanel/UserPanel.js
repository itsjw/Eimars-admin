// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const UserPanel = (
  props
) => (
  <div className="user-panel">
    
  </div>
);

UserPanel.propTypes = {
  hello:            PropTypes.string,
  username:         PropTypes.string,
  showUserPicture:  PropTypes.bool,
  userPicture:      PropTypes.any,
  connectionStatus: PropTypes.shape({
    online:         PropTypes.string,
    disconnected:   PropTypes.string
  }),
  online:           PropTypes.bool
};

UserPanel.defaultProps = {
  hello:    'Hello',
  username: 'Jane',
  connectionStatus: {
    online:       'Online',
    disconnected: 'Disconnected'
  },
  online:          false,
  showUserPicture: true
};

export default UserPanel;
