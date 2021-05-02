import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ProfessorReviewPage from '../pages/ProfessorReviewPage';
import ListProfessors from '../pages/ListProfessors';
import ListCourses from '../pages/ListCourses';
import ProfessorOverview from '../pages/ProfessorOverview';
import MainPageProfessor from '../pages/MainPageProfessor';
import LandingUser from '../pages/LandingUser';
import NewReview from '../pages/NewReview';
import AboutUs from '../pages/AboutUs';
import ProfessorProfile from '../pages/ProfessorProfile';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <div style={{ paddingTop: '20px', paddingBottom: '30px' }}>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/signout" component={Signout}/>
              <Route path="/aboutUs" component={AboutUs}/>
              <ProtectedRoute path="/User" component={LandingUser}/>
              <ProtectedRoute path="/mainprofessors" component= {MainPageProfessor}/>
              <ProtectedRoute path="/listprofessor" component={ListProfessors}/>
              <ProtectedRoute path="/courses" component= {ListCourses}/>
              <ProtectedRoute path="/review" component= {ProfessorReviewPage}/>
              <ProtectedRoute path="/overview" component= {ProfessorOverview}/>
              <ProtectedRoute path="/professor/:_id" component= {ProfessorProfile}/>
              <AdminProtectedRoute path="/NewReview" component={NewReview}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
