// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  EarningGraph as EarningGraphComponent
}                         from '../../components';
import Highlight          from 'react-highlight';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class EarningGraph extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterEarningGraph: PropTypes.func.isRequired,
      leaveEarningGraph: PropTypes.func.isRequired
    })
  };

  state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };


  

  componentWillMount() {
    const { actions: { enterEarningGraph } } = this.props;
    enterEarningGraph();
  }


  componentWillUnmount() {
    const { actions: { leaveEarningGraph } } = this.props;
    leaveEarningGraph();
  }

   handleBtnClick() {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }
    

  render() {
    const {labels, datasets} = this.state;
     const order = 'desc';
     const products = [{
          id: 1,
          name: "Product1",
          email:"palak.sharma@oodlestechnologies.com",
          loginIn: "1",
          logOut:"7",
          loginIp:"180.153.151.19",
          totalLogged:"8"
       }, {
          id: 2,
          name: "Product2",
          email:"palak.sharma@oodlestechnologies.com",
           loginIn: "1",
          logOut:"7",
          loginIp:"180.153.151.19",
          totalLogged:"8"
      }];
   
    const source = `
      // import
      import { EarningGraph } from './_SOMEWHERE_/components';

      // labels and data (in state for example):
      state = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      // in render():
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <EarningGraph
            labels={this.state.labels}
            datasets={this.state.datasets}
          />
        </div>
      </div>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Login Summary >> App User"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>
              <div>
        <BootstrapTable ref='table' data={ products }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>S.No</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>User</TableHeaderColumn>
            <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
             <TableHeaderColumn dataField='loginIn' dataSort={ true }>Login Time</TableHeaderColumn>
              <TableHeaderColumn dataField='logOut' dataSort={ true }>Logout Time</TableHeaderColumn>
               <TableHeaderColumn dataField='loginIp' dataSort={ true }>Login Ip</TableHeaderColumn>
                <TableHeaderColumn dataField='totalLogged' dataSort={ true }>Total Log In Time</TableHeaderColumn>
        </BootstrapTable>
      </div>
             
            </Panel>
          </div>
        </div>
     
      </AnimatedView>
    );
  }
}

export default EarningGraph;
