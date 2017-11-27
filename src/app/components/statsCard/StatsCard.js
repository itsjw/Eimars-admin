// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const StatsCard = ({
   title,
  children
}) => (
  <section className="panel">
    <header className="panel-heading">
     User Management
    </header>
    <div className="panel-body filter-body"></div>
    <div className="panel-body table-responsive">
      {children}
    </div>
  </section>
);

StatsCard.propTypes = {
  title:    PropTypes.string,
  children: PropTypes.node.isRequired
};

StatsCard.defaultProps = {
  title: 'User Management'
};

export default StatsCard;
