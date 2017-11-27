import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


const Modals = () => {


  return(
    <section>
      {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) */}
      <div id="generalViewModals">
        {/* <!-- Modal --> TOP UP MODAL */}
         <div
          className="modal fade"
          id="myModalGeneral"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  TOP-UP
                </h4>
              </div>
              <div className="modal-body msg_box">
              <div className="row">
              <div className="col-sm-12">
              <label> Select Users </label>
               <input type="text" placeholder="Selected Coin" />
              </div>
                </div>
                <div className="row padTop-15">
              <div className="col-sm-12">
              <label> No of Coins Allocated</label>
              <input type="text" placeholder="Coins Selected" />
              </div>
                </div>
                 <div className="row padTop-15">
              <div className="col-sm-12">
              <label>Top Up (CYC)</label>
                <input type="text" placeholder="TOP-UP" disabled />
              </div>
                </div>
                 <div className="row padTop-15">
              <div className="col-sm-12">
               <label>Message</label>
             <input type="text" placeholder="Type your Message here ..." /> 
              </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button className="btn btn-warning" data-dismiss="modal" data-toggle="modal" data-target="#myModalGeneral3" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>



            <div
          className="modal fade"
          id="myModalGeneral2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  MESSAGE
                </h4>
              </div>
              <div className="modal-body msg_box">
                <div className="row">
                  <div className="col-sm-12">
                  <label> Select Users </label>
               <input type="text" placeholder="Selected Email" />
              </div>
                </div>
                 <div className="row padTop-15">
                  <div className="col-sm-12">
                  <label>Message</label>
                    <input type="text" placeholder="Type your Message here ..." /> 
              </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-warning"
                  type="button">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModalGeneral3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  Confirmation Modal
                </h4>
              </div>
              <div className="modal-body">
                Are you sure you want to continue ? 
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  type="button">
                   Ok
                </button>
                <button
                  className="btn btn-danger"
                  type="button" data-dismiss="modal">
                   Cancel
                </button>
              </div>
            </div>
          </div>
        </div>


         <div
          className="modal fade"
          id="myModalGeneral4"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  MESSAGE ALL
                </h4>
              </div>
              <div className="modal-body msg_box">
              <div className="row">
              <div className="col-sm-12">
              <label> Select Users </label>
               <input type="text" placeholder="Select Email" />
              </div>
                </div>
                 <div className="row padTop-15">
              <div className="col-sm-12">
                <label>Message</label>
             <input type="text" placeholder="Type your Message here ..." /> 
              </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button className="btn btn-warning" data-toggle="modal" data-target="#myModalGeneral3" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

         <div
          className="modal fade"
          id="myModalGeneral5"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  TOP-UP ALL
                </h4>
              </div>
              <div className="modal-body msg_box">
              <div className="row">
              <div className="col-sm-12">
              <label> Select Users </label>
              <input type="text" placeholder="Selected Coin" />
              </div>
                </div>
                <div className="row padTop-15">
              <div className="col-sm-12">
              <label> No of Coins Allocated</label>
              <input type="text" placeholder="Coins Selected" />
              </div>
                </div>
                 <div className="row padTop-15">
              <div className="col-sm-12">
              <label>Top Up (CYC)</label>
                <input type="text" placeholder="TOP-UP" disabled />
              </div>
                </div>
                 <div className="row padTop-15">
              <div className="col-sm-12">
                <label>Message</label>
             <input type="text" placeholder="Type your Message here ..." /> 
              </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-warning"
                  type="button"  data-dismiss data-toggle="modal" data-target="#myModalGeneral3">
                  Submitt
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModalGeneral6"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  ADD USER
                </h4>
              </div>
              <div className="modal-body">
              <form className="form-horizontal">
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Username </label>
               <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="col-sm-6">
               <label> First Name </label>
               <input type="text" className="form-control" placeholder="First Name" />
              </div>
              </div>
              </div>
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Last Name  </label>
               <input type="text" className="form-control" placeholder="Last Name " />
              </div>
              <div className="col-sm-6">
               <label> Contact No</label>
               <input type="text" className="form-control" placeholder="Contact No" />
              </div>
              </div>

              </div>
               <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Joining Date </label>
               <input type="text" className="form-control" placeholder="Joining Date" />
              </div>
               <div className="col-sm-6">
               <label> Country </label>
               <input type="text" className="form-control" placeholder="Country" />
              </div>
              </div>
              </div>
             
             
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> State </label>
               <input type="text" className="form-control" placeholder="State" />
              </div>
              <div className="col-sm-6">
               <label>City </label>
               <input type="text" className="form-control" placeholder="City" />
              </div>
              </div>
              </div>
                <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Pin Code</label>
               <input type="text" className="form-control" placeholder="Pin Code" />
              </div>
              </div>
              </div>
              <div className="row pad-6">
              <div className="col-sm-12">
               <label> Address </label>
               <input type="text" className="form-control" placeholder="Address" />
              </div>
              </div>
               <div className="row pad-6">
              <div className="col-sm-12">
                  <label>Home Address</label>
               <input type="text" className="form-control" placeholder="Home Address" />
              </div>
              </div>
             </form>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-warning"
                  type="button" data-dismiss="modal"  data-toggle="modal" data-target="#myModalGeneral3">
                  Submitt
                </button>
              </div>
            </div>
          </div>
        </div>


        <div
          className="modal fade"
          id="myModalGeneral7"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  EDIT USER
                </h4>
              </div>
              <div className="modal-body">
              <form className="form-horizontal">
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Username </label>
               <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="col-sm-6">
               <label> First Name </label>
               <input type="text" className="form-control" placeholder="First Name" />
              </div>
              </div>
              </div>
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Last Name  </label>
               <input type="text" className="form-control" placeholder="Last Name " />
              </div>
              <div className="col-sm-6">
               <label> Contact No</label>
               <input type="text" className="form-control" placeholder="Contact No" />
              </div>
              </div>

              </div>
               <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Joining Date </label>
               <input type="text" className="form-control" placeholder="Joining Date" />
              </div>
               <div className="col-sm-6">
               <label> Country </label>
               <input type="text" className="form-control" placeholder="Country" />
              </div>
              </div>
              </div>
             
             
              <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> State </label>
               <input type="text" className="form-control" placeholder="State" />
              </div>
              <div className="col-sm-6">
               <label>City </label>
               <input type="text" className="form-control" placeholder="City" />
              </div>
              </div>
              </div>
                <div className="row padTop-15">
              <div className="col-sm-12">
              <div className="col-sm-6">
               <label> Pin Code</label>
               <input type="text" className="form-control" placeholder="Pin Code" />
              </div>
              </div>
              </div>
              <div className="row pad-6">
              <div className="col-sm-12">
               <label> Address </label>
               <input type="text" className="form-control" placeholder="Address" />
              </div>
              </div>
               <div className="row pad-6">
              <div className="col-sm-12">
                  <label>Home Address</label>
               <input type="text" className="form-control" placeholder="Home Address" />
              </div>
              </div>
             </form>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Close
                </button>
                <button
                  className="btn btn-warning"
                  type="button" data-dismiss="modal"  data-toggle="modal" data-target="#myModalGeneral3">
                  Submitt
                </button>
              </div>
            </div>
          </div>
        </div>

            <div
          className="modal fade"
          id="myModalGeneral8"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true">
                  ×
                </button>
                <h4 className="modal-title">
                  ADD ROLE
                </h4>
              </div>
              <div className="modal-body">
              <form className="form-horizontal">
              <div className="row padTop-15">
              <div className="col-sm-12">
               <label> Role Name </label>
               <input type="text" className="form-control" placeholder="Role Name" />
               </div>
              </div>
              <div className="row padTop-15">
              <div className="col-sm-12">
               <label> Access Rights</label>
               <input type="text" className="form-control" placeholder="Access Rights" />
               </div>
              </div>
             </form>
              </div>

              <div className="modal-footer">
                <button
                  data-dismiss="modal"
                  className="btn btn-default"
                  type="button">
                  Cancel
                </button>
                <button
                  className="btn btn-warning"
                  type="button" data-dismiss="modal"  data-toggle="modal" data-target="#myModalGeneral3">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- modal --> */}
        {/* <!-- Modal --> */}
      </div>
      <div id="basicElementsModals">
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">
                      File input
                    </label>
                    <input
                      type="file"
                      id="exampleInputFile3"
                    />
                    <p className="help-block">
                      Example block-level help text here.
                    </p>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                       Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements-1"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
                <form
                  className="form-horizontal"
                  role="form">
                  <div className="form-group">
                    <label
                      htmlFor="inputEmail1"
                      className="col-lg-2 col-sm-2 control-label">
                      Email
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputPassword1"
                      className="col-lg-2 col-sm-2 control-label">
                      Password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" />
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <button
                        type="submit"
                        className="btn btn-default">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabIndex="-1"
          id="myModalBasicElements-2"
          className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  aria-hidden="true"
                  data-dismiss="modal"
                  className="close"
                  type="button">
                  ×
                </button>
                <h4 className="modal-title">
                  Form Tittle
                </h4>
              </div>
              <div className="modal-body">
                <form
                  className="form-inline"
                  role="form">
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="exampleInputEmail2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control sm-input"
                      id="exampleInputEmail5"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="exampleInputPassword2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control sm-input"
                      id="exampleInputPassword5"
                      placeholder="Password"
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />
                       Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-default">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Modals;
