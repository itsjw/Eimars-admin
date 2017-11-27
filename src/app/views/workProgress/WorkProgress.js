// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCol
}from '../../components';
import Highlight          from 'react-highlight';
import { Link } from 'react-router';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Pagination from 'react-bootstrap/lib/Pagination';
import Tooltip        from 'react-bootstrap/lib/Tooltip';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';




class WorkProgress extends PureComponent {

  state = {
    headers: ['#', <input type="checkbox" /> , 'Username', 'Email', 'Contact No','Joining Date', 'Total Business' ,  'Level Completed' , 'Status' ,'Action', '','','',''],
    content: [
              ['1', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014', '1000000', '1',  'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button>, <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn" ><i className="fa fa-trash" aria-hidden="true"></i></button>  ],
              ['2', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014', '1000000' ,'2', 'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button>, <button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button>],
              ['3', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014', '1000000', '3', 'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button>,<button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
              ['4', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014', '1000000', '4' , 'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button>,<button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button>, <button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
              ['5', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014', '1000000', '5', 'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button>,<button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button>, <button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
              ['6', <input type="checkbox" /> , 'UID', <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>, '8826470777' , '10/10/2014',  '1000000', '6' , 'Active', <button type="button" className="btn"><i className="fa fa-mobile" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-money" aria-hidden="true"></i></button>,<button type="button" className="btn"><i className="fa fa-commenting" aria-hidden="true"></i></button> ,<button type="button" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button>]
            ]
  };



  // handleChange(tags) {
  //   this.setState({tags})
  // }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }



  componentWillMount() {
    const { actions: { enterWorkProgress } } = this.props;
     fetch('http://192.168.4.106:8080/api/v1/users/list&pageNumber=1&pageSize=10', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
    'Authorization': '5c815081-8222-42e5-a596-a34f937a2f76'
  }  
})
.then(res => res.json())
.then((json) => {
  console.info(json);
})
.catch((err) => {
  console.error(err);
});
    enterWorkProgress();
  }

  componentWillUnmount() {
    const { actions: { leaveWorkProgress } } = this.props;
    leaveWorkProgress();
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }



 



  render() {
    const {
      headers,
      content
    } = this.state;


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
      <Tooltip id="edit"><strong>Edit!</strong></Tooltip>
    );
    const tooltip_delete = (
      <Tooltip id="tooltip_delete"><strong>Delete User!</strong></Tooltip>
    );
   const tooltip_email = (
      <Tooltip id="tooltip_email"><strong>palak.sharma@gmail.com</strong></Tooltip>
    ); 

 

  const source = `
      // import
      import { EarningGraph } from './_SOMEWHERE_/components';

      // labels and data (in state for example):
      state = {
        headers: ['#', 'USERID', 'EMAIL', 'JOININD DATE', 'Status', 'Progress'],
        content: [
          ['1', 'Facebook', 'Mark', '10/10/2014', <span className="label label-danger">in progress</span>, <span className="badge badge-info">50%</span>],
          ['2', 'Twitter', 'Evan', '10/8/2014', <span className="label label-success">completed</span>, <span className="badge badge-success">100%</span>],
         
        ]
      };

      // in render():
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <EarningGraphComponent
            labels={this.state.labels}
            datasets={this.state.datasets}
          />
        </div>
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */  }
        
        <Panel
          
          title="USER MANAGEMENT >> App User  "
          hasTitle={true}
          bodyBackGndColor={'#F4F5F6'}
          bodyCustomClass="table-responsive table-bordered">

          <filter-body>

         <div className="row pad-10">
          <div className="col-sm-3">
           <div className="form-group">
                <label for="Username">By Level Completed</label>
                 <select className="selectpicker" data-live-search="true">
                        <option data-tokens="ketchup mustard">Level 1</option>
                            <option data-tokens="mustard">Level 2</option>
                                <option data-tokens="frosting">Level 3</option>
                    </select>
            </div>
            </div>

        <div className="col-sm-3">
           <div className="form-group">
                <label for="Username">By Country</label>
                 <select className="selectpicker" data-live-search="true">
                        <option data-tokens="ketchup mustard">Country</option>
                            <option data-tokens="mustard">India</option>
                                <option data-tokens="frosting">Pakistan</option>
                    </select>
            </div>
            </div>

          <div className="col-sm-3">
           <div className="form-group">
                <label for="Username">By State</label>
                 <select className="selectpicker" data-live-search="true">
                        <option data-tokens="ketchup mustard">Delhi</option>
                            <option data-tokens="mustard">Rajasthan</option>
                                <option data-tokens="frosting">Agra</option>
                    </select>
            </div>
            </div>
            <div className="col-sm-3">
           <div className="form-group">
                <label for="Username">Search:</label>
                <input id="name" type="text" className="form-control" name="Name" placeholder="Search" />
            </div>
            </div>
            </div>

            <div className="row padTop-15">
              <div className="col-sm-12 marPad-0">
              <div className="col-sm-6 marPad-0">
              </div>
              <div className="col-sm-6 marPad-0">
            <div className="col-sm-3 pull-right">
                <OverlayTrigger placement="left" overlay={tooltip}>
                  <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModalGeneral5">Top Up All</button>
                </OverlayTrigger>
              </div>
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
                      <th width="5%">
                         Joining Date
                      </th>
                      <th width="5%">
                       Purchase Package
                      </th>
                      <th width="5%">
                      Total Business
                      </th>
                      <th width="5%">
                      Level Completed
                      </th>
                      <th width="5%">
                      Active Members
                      </th>
                      <th width="5%">
                      Non Active Members
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
                        <a href="#/Dashboard/notifications"> palak.sharma@oodlestechnologies.com</a>
                      </OverlayTrigger></div> </td >
                      <td>8826470777</td>
                      <td>10/10/2014</td>
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn"  data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3" ><i className="fa fa-trash" aria-hidden="true" ></i></button>
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
                      <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true" ></i></button>
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
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true" ></i></button>
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
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3" ><i className="fa fa-trash" aria-hidden="true" ></i></button>
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
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true" ></i></button>
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
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral"><i className="fa fa-money" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_msg}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral2"><i className="fa fa-commenting" aria-hidden="true" ></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
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
                       <td>2</td>
                      <td>100000</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                      <td>
                      <OverlayTrigger placement="left" overlay={tilt_mode}>
                        <button type="button" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={tooltip}>
                        <button type="button" className="btn"><i className="fa fa-money" aria-hidden="true" data-toggle="modal" data-target="#myModalGeneral"></i></button>
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
                <div className="text-center">
                <Pagination
          bsSize="medium"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
        </div>
    
        </Panel>
      </AnimatedView>
    );
  }
}

WorkProgress.propTypes= {
  actions: PropTypes.shape({
    enterWorkProgress: PropTypes.func.isRequired,
    leaveWorkProgress: PropTypes.func.isRequired
  })
};

export default WorkProgress;
