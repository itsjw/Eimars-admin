// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  TeamMates,
  TeamMember,
  TeamMateAddButton
}                         from '../../components';
import Highlight          from 'react-highlight';
import DamonIMG           from '../../img/Damon.png';
import JoeIMG             from '../../img/Joe.png';
import EmmaIMG            from '../../img/Emma.png';
import JannieIMG          from '../../img/Jannie.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TeamMatesView extends PureComponent {
  enterAnimationTimer = null;

  state = {
    members: [
      {
        picture:      DamonIMG,
        firstname:    'Damon',
        lastname:     'Parker',
        profile:      'Admin',
        profileColor: 'danger'
      },
      {
        picture:      JoeIMG,
        firstname:    'Joe',
        lastname:     'Waston',
        profile:      'Member',
        profileColor: 'warning'
      },
      {
        picture:      JannieIMG,
        firstname:    'Jannie',
        lastname:     'Davis',
        profile:      'Editor',
        profileColor: 'warning'
      },
      {
        picture:      EmmaIMG,
        firstname:    'Emma',
        lastname:     'Welson',
        profile:      'Editor',
        profileColor: 'success'
      }
    ]
  };

  componentWillMount() {
    const { actions: { enterTeamMatesView } } = this.props;
    enterTeamMatesView();
  }

  componentWillUnmount() {
    const { actions: { leaveTeamMatesView } } = this.props;
    leaveTeamMatesView();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { members } = this.state;
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
      import {
        Panel,
        TeamMates,
        TeamMember,
        TeamMateAddButton
      } from './_SOMEWHERE_/components';

      // import images (or just set a string as a path)
      // import DamonIMG           from '../../img/Damon.png';
      // import JoeIMG             from '../../img/Joe.png';
      // import EmmaIMG            from '../../img/Emma.png';
      // import JannieIMG          from '../../img/Jannie.png';

      // team members (in state for example):
      state = {
        members: [
          {
            picture:      DamonIMG,
            firstname:    'Damon',
            lastname:     'Parker',
            profile:      'Admin',
            profileColor: 'danger'
          },
          {
            picture:      JoeIMG,
            firstname:    'Joe',
            lastname:     'Waston',
            profile:      'Member',
            profileColor: 'warning'
          },
          {
            picture:      JannieIMG,
            firstname:    'Jannie',
            lastname:     'Davis',
            profile:      'Editor',
            profileColor: 'warning'
          },
          {
            picture:      EmmaIMG,
            firstname:    'Emma',
            lastname:     'Welson',
            profile:      'Editor',
            profileColor: 'success'
          }
        ]
      };

      // in render():
      <Panel
        hasTitle={true}
        title={'Teammates'}>
        <TeamMates>
          {
            members.map(
              (member, memberIndex) => {
                return (
                  <TeamMember
                    key={memberIndex}
                    picture={member.picture}
                    firstname={member.firstname}
                    lastname={member.lastname}
                    profile={member.profile}
                    profileColor={member.profileColor}
                  />
                );
              }
            )
          }
        </TeamMates>
        <TeamMateAddButton />
      </Panel>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
           title="Login Summary >> Admin User"
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

TeamMatesView.propTypes= {
  actions: PropTypes.shape({
    enterTeamMatesView: PropTypes.func.isRequired,
    leaveTeamMatesView: PropTypes.func.isRequired
  })
};

export default TeamMatesView;
