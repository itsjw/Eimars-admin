// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  NotificationPanel,
  Notification
}                         from '../../components';
import Highlight          from 'react-highlight';
import { Link }             from 'react-router';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip        from 'react-bootstrap/lib/Tooltip';



class Notifications extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterNotifications: PropTypes.func.isRequired,
      leaveNotifications: PropTypes.func.isRequired
    })
  };

  componentWillMount() {
    const { actions: { enterNotifications } } = this.props;
    enterNotifications();
  }

  componentWillUnmount() {
    const { actions: { leaveNotifications } } = this.props;
    leaveNotifications();
  }



  render() {

    const tooltip = (
      <Tooltip id="tooltip"><strong>Top-Up User!</strong></Tooltip>
    );
  const tooltip_msg = (
      <Tooltip id="tooltip_msg"><strong>Message User!</strong></Tooltip>
    );
  const tilt_mode = (
      <Tooltip id="tilt_mode"><strong>Stealth Mode!</strong></Tooltip>
    );
   const edit = (
      <Tooltip id="edit"><strong>Edit User!</strong></Tooltip>
    );
    const tooltip_delete = (
      <Tooltip id="tooltip_delete"><strong>Delete User!</strong></Tooltip>
    );
   const tooltip_email = (
      <Tooltip id="tooltip_email"><strong>palak.sharma@gmail.com</strong></Tooltip>
    ); 


    const source = `
      // import
      import { NotificationPanel, Notification } from './_SOMEWHERE_/components';

      // in render():
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <NotificationPanel title="notifications">
              <Notification type={'danger'}>
                <span>
                  <strong>
                    Oh snap!
                  </strong>
                  Change a few things up and try submitting again.
                </span>
              </Notification>

              <Notification type={'success'}>
                <span>
                  <strong>
                    Well done!
                  </strong>
                  You successfully read this important alert message.
                </span>
              </Notification>

              <Notification type={'info'}>
                <span>
                  <strong>
                    Heads up!
                  </strong>
                  This alert needs your attention, but it's not super important.
                </span>
              </Notification>

              <Notification type={'warning'}>
                <span>
                  <strong>
                    Warning!
                  </strong>
                  Best check yo self, you're not looking too good.
                </span>
              </Notification>

              <Notification type={'danger'}>
                <span>
                  <strong>
                    Oh snap!
                  </strong>
                  Change a few things up and try submitting again.
                </span>
              </Notification>

          </NotificationPanel>
        </div>
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
          
          title="USER MANAGEMENT >> Admin User "
          hasTitle={true}
          bodyBackGndColor={'#F4F5F6'}
          bodyCustomClass="table-responsive table-bordered">

          <filter-body>

         <div className="row pad-10">

        <div className="col-sm-3">
           <div className="form-group">
                <label>By Country</label>
                 <select className="selectpicker" data-live-search="true">
                        <option data-tokens="ketchup mustard">Country</option>
                            <option data-tokens="mustard">India</option>
                                <option data-tokens="frosting">Pakistan</option>
                    </select>
            </div>
            </div>

          <div className="col-sm-3">
           <div className="form-group">
                <label>By State</label>
                 <select className="selectpicker" data-live-search="true">
                        <option data-tokens="ketchup mustard">Delhi</option>
                            <option data-tokens="mustard">Rajasthan</option>
                                <option data-tokens="frosting">Agra</option>
                    </select>
            </div>
            </div>
            <div className="col-sm-3 pull-right">
           <div className="form-group">
                <label>Search:</label>
                <input id="name" type="text" className="form-control" name="Name" placeholder="Search" />
            </div>
            </div>
            </div>

            <div className="row ">
              <div className="col-sm-12 marPad-0">
              <div className="col-sm-6 marPad-0">
<div className="col-sm-3 pull-left">
          <button className="btn btn-primary btn-addon btn-sm mar-left" data-toggle="modal" data-target="#myModalGeneral6"><i className="fa fa-plus fa-icon"></i>Add User</button>
          </div>
              </div>
              <div className="col-sm-6 marPad-0">
               <div className="col-sm-3 pull-right">
              <OverlayTrigger placement="left" overlay={tooltip_msg}>
                  <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModalGeneral4">Message All</button>
                </OverlayTrigger>
               </div>
               </div>
               
               </div>
            </div>
          </filter-body>

         


        <table className="table table-scroll">
                  <thead>
                    <tr>
                      <th>
                        #
                      </th>
                      <th>
                       <input type="checkbox" /> 
                      </th>
                      <th>
                        Username
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                      Contact No
                      </th>
                      <th>
                         Joining Date
                      </th>
                      <th>
                      Status
                      </th>
                      <th>
                      Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@gmail.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
                      
                       <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>2</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
                  
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>3</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
                     
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>4</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
        
                      <td>Active</td>
                      <td>
                     
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>5</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div></td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
            
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>6</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true" data-toggle="modal"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                       <tr>
                      <td>7</td>
                      <td><input type="checkbox" /></td>
                      <td>UID</td>
                      <td><div className="ellipsis"><OverlayTrigger placement="left" overlay={tooltip_email}>
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div></td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                      <td>Active</td>
                      <td>
                     
                      <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral2"></i></button>
                      </OverlayTrigger>

                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral3"></i></button>
                      </OverlayTrigger>
                      </td>
                      </tr>
                    
                  </tbody>
                </table>

    
        </Panel>
          </div>
        </div>
        
      </AnimatedView>
    );
  }
}

export default Notifications;
