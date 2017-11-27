// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  Tweet,
  WriteNewTweet,
  ListTweetsContainer
}                         from '../../components';
import Highlight          from 'react-highlight';
import JannieIMG          from '../../img/Jannie.png';
import EmmetIMG           from '../../img/Emmet.png';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip        from 'react-bootstrap/lib/Tooltip';


class TwitterFeed extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterTwitterFeed: PropTypes.func.isRequired,
      leaveTwitterFeed: PropTypes.func.isRequired
    })
  };

  componentWillMount() {
    const { actions: { enterTwitterFeed } } = this.props;
    enterTwitterFeed();
  }

  componentWillUnmount() {
    const { actions: { leaveTwitterFeed } } = this.props;
    leaveTwitterFeed();
  }

  render() {

     const edit = (
      <Tooltip id="edit"><strong>Edit!</strong></Tooltip>
    );
     const save = (
      <Tooltip id="save"><strong>Save!</strong></Tooltip>
    );
    const tooltip_delete = (
      <Tooltip id="tooltip_delete"><strong>Delete!</strong></Tooltip>
    );
    const add = (
      <Tooltip id="add"><strong>Add !</strong></Tooltip>
    );

    const source = `
      // import
      import {
        Tweet,
        WriteNewTweet,
        ListTweetsContainer
      } from './_SOMEWHERE_/components';

      // import image or use relative path as src to image
      // in this example, consider:
      // import JannieIMG          from '../../../img/Jannie.png';
      // import EmmetIMG           from '../../../img/Emmet.png';

      // in render():
      <Panel
        title="Twitter feed"
        hasTitle={true}
        bodyBackGndColor={'#FFF'}>
        <WriteNewTweet />
        <ListTweetsContainer>
          <Tweet
            time={'30 min ago'}
            author={'Emmet'}
            authorAvatar={EmmetIMG}>
            <demoTweetMessage />
          </Tweet>
          <Tweet
            time={'35 min ago'}
            author={'Jannie'}
            authorAvatar={JannieIMG}>
            <demoTweetMessage />
          </Tweet>
        </ListTweetsContainer>
      </Panel>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
             title="Package Settings"
              hasTitle={true}
               bodyCustomClass="table-responsive table-bordered"
              bodyBackGndColor={'#F4F5F6'}>
             <form className="form-horizontal">
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Package Price </label>
               <input type="text" className="form-control" placeholder="Package Price" />
              </div>
              <div className="col-sm-6">
               <label> Coins Per Package </label>
               <input type="text" className="form-control" placeholder="Coins Per Package" />
              </div>
              </div>
              </div>
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Maximum No Of Packages can be Purchased  </label>
               <input type="text" className="form-control" placeholder="Max. Package " />
              </div>
              
              </div>

              </div>
               <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Roi Rate  </label>
               <input type="text" className="form-control" placeholder="Roi Rate" />
              </div>
              <div className="col-sm-6">
               <label> Coins</label>
               <input type="text" className="form-control" placeholder="Coins" />
              </div>
              </div>

              </div>
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> ROI Duration  </label>
               <input type="text" className="form-control" placeholder="ROI Duration" />
              </div>
              <div className="col-sm-6">
               <label> Total Amount</label>
               <input type="text" className="form-control" placeholder="Total Amount" />
              </div>
              </div>

              </div>
              <div className="row padTop-15">
               <div className="col-sm-12">
               <div className="col-sm-6 pull-right">
                <p className="noteTag"> Note:- Total Amount will be given during 18 months</p>
                </div>
               </div>
              </div>
             
           <div className="pad-6">
               <table className="table table-scroll">
                  <thead>
                    <tr>
                      <th>
                       No Of Packages Purchased
                      </th>
                      <th>
                      No Of Direct Children can be added.
                      </th>
                      <th>
                       Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                     <td><input type="text" className="form-control" placeholder="Packages Purchased" /></td>
                     <td><input type="text" className="form-control" placeholder="Direct Children" /></td> 
                     <td>
                     <OverlayTrigger placement="left" overlay={save}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={add}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-plus" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                     </td>
                     </tr>
                       <tr>
                     <td><input type="text"  className="form-control" placeholder="Packages Purchased" /></td>
                     <td><input type="text" className="form-control"  placeholder="Direct Children" /></td> 
                     <td>
                     <OverlayTrigger placement="left" overlay={save}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="left" overlay={add}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-plus" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                     </td>
                     </tr>
                      <tr>
                     <td><input type="text" className="form-control" placeholder="Packages Purchased" /></td>
                     <td><input type="text" className="form-control" placeholder="Direct Children" /></td> 
                     <td>
                     <OverlayTrigger placement="left" overlay={save}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                    <OverlayTrigger placement="left" overlay={edit}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral7"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                   <OverlayTrigger placement="left" overlay={tooltip_delete}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-trash" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                       <OverlayTrigger placement="left" overlay={add}>
                        <button type="button" className="btn" data-toggle="modal" data-target="#myModalGeneral3"><i className="fa fa-plus" aria-hidden="true"></i></button>
                      </OverlayTrigger>
                     </td>
                     </tr>
                   </tbody>
                </table>
                </div>
               <div className="row">
                  <div className="col-sm-12">
                   <div className="text-center">
                    <button type="button" className="btn btn-lg btn-primary">Save All</button>                   </div>
                  </div>
               </div>
   </form>
             
            </Panel>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default TwitterFeed;
