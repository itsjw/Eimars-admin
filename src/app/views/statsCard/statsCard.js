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
}                         from '../../components';
import Highlight          from 'react-highlight';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip        from 'react-bootstrap/lib/Tooltip';


class StatsCard extends PureComponent {

  state = {
    headers: ['#', 'Role Name', 'Access Rights', 'Action',''],
    content: [
  ['1', 'ROLE A' , '', <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral6"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
 ['2',  'ROLE A'  ,'', <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral6"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
 ['3',  'ROLE A' , '',<button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral6"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button> , <button type="button" className="btn"><i className="fa fa-trash" aria-hidden="true"></i></button> ],
      
    ]
  };

  componentWillMount() {
    const { actions: { enterStatsCard } } = this.props;
    enterStatsCard();
  }

  componentWillUnmount() {
    const { actions: { leaveStatsCard } } = this.props;
    leaveStatsCard();
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
      import { StatsCard } from './_SOMEWHERE_/components';

      // in render():
      <div className="col-md-3">
        <StatsCard
          statValue={'3200'}
          statLabel={'Total Tasks'}
          icon={<i className="fa fa-check-square-o"></i>}
          backColor={'red'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'2200'}
          statLabel={'Total Messages'}
          icon={<i className="fa fa-envelope-o"></i>}
          backColor={'violet'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'100,320'}
          statLabel={'Total Profit'}
          icon={<i className="fa fa-dollar"></i>}
          backColor={'blue'}
        />
      </div>
      <div className="col-md-3">
        <StatsCard
          statValue={'4567'}
          statLabel={'Total Documents'}
          icon={<i className="fa fa-paperclip"></i>}
          backColor={'green'}
        />
      </div>`;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="ROLE MANAGEMENT"
              hasTitle={true}
               bodyCustomClass="table-responsive table-bordered"
              bodyBackGndColor={'#F4F5F6'}>
                <filter-body>
                
          <div className="row">
          <div className="col-sm-3 pull-left">
          <button className="btn btn-primary btn-addon btn-sm" data-toggle="modal" data-target="#myModalGeneral8"><i className="fa fa-plus fa-icon"></i>Add Role</button>
          </div>
          <div className="col-sm-3 pull-right">
         <div className="input-group ">
     
      <input id="userId" type="text" className="form-control" name="password" placeholder="Search" />
       <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
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
                       Role Name
                      </th>
                      <th>
                        Access Rights
                      </th>
                      <th>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                     <td>1</td>
                     <td>ROLE A</td> 
                     <td></td> 
                     <td>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                     </td>
                     </tr>
                      <tr>
                     <td>2</td>
                     <td>ROLE A</td> 
                     <td></td> 
                     <td>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                     </td>
                     </tr>
                      <tr>
                     <td>3</td>
                     <td>ROLE A</td> 
                     <td></td> 
                     <td>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
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

StatsCard.propTypes= {
  actions: PropTypes.shape({
    enterStatsCard: PropTypes.func.isRequired,
    leaveStatsCard: PropTypes.func.isRequired
  })
};

export default StatsCard;
