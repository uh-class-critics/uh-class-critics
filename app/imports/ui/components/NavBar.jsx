import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Button, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#024731' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} exact to="/User">
          <Button className='button' animated color ='black'>
            <Button.Content hidden> Home Page</Button.Content>
            <Button.Content visible>
              <Image src='https://cdn.discordapp.com/attachments/828880920642977812/832133131271667722/123131321314142.png'
                width = '40' height = '40'/>
            </Button.Content>
          </Button>

        </Menu.Item>
        <Menu.Item as={NavLink} id="profilesMenuItem" activeClassName="active" exact to="/listprofessor" key='listprofessor'>Browse Professors</Menu.Item>
        <Menu.Item as={NavLink} id="profilesMenuItem" activeClassName="active" exact to="/courses" key='courses'>Browse Courses</Menu.Item>
        <Menu.Item position="left" as={NavLink} id="profilesMenuItem" activeClassName="active" exact to="/aboutUs" key='aboutUs'>Our Team</Menu.Item>

        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} id="adminMenuItem" activeClassName="active" exact to="/NewReview" key='admin'>Add Professor</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} id="adminMenuItem" activeClassName="active" exact to="/AddCourse" key='admin'>Add Course</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter so that links work. */
export default withRouter(NavBarContainer);
