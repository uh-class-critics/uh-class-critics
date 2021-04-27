import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card, Image, Rating, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Link, NavLink } from 'react-router-dom';
import { Professors } from '../../api/professors/Professors';

/** Returns the Profile and associated Projects and Interests associated with the passed user email. */
function getProfessorsData(email) {
  const data = Professors.collection.findOne({ email });
  return _.extend({ }, data);
}

/** Component for layout out a Profile Card. */
const MakeCard = (props) => (
  <Card centered className="profile-professors">
    <Card.Content>
      <Image className="profile-picture" as={NavLink} exact to="/john" src={props.professor.picture} />
      <Card.Header>{props.professor.firstName} {props.professor.lastName}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.professor.title}</span>
      </Card.Meta>
      <Card.Meta>
        <Rating icon='star' defaultRating={4} maxRating={5} />
        <Link to={'/review'}>Write a Review</Link>
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Header as='h5'>Courses</Header>
      <Card.Description>
        {props.professor.bio}
      </Card.Description>
      <Link to={`/edit/${props.professor.firstName} ${props.professor.firstName}`}>Overview</Link>
    </Card.Content>
  </Card>
);

MakeCard.propTypes = {
  professor: PropTypes.object.isRequired,
};

/** Renders the Profile Collection as a set of Cards. */
class ProfessorsPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const emails = _.pluck(Professors.collection.find().fetch(), 'email');
    const professorData = emails.map(email => getProfessorsData(email));

    return (
      <Container centered fluid id="profiles-page" className="professors-page">
        <Card.Group>
          {_.map(professorData, (professor, index) => <MakeCard key={index} professor={professor}/>)}
        </Card.Group>
      </Container>

    );
  }
}

ProfessorsPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Professors.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(ProfessorsPage);
