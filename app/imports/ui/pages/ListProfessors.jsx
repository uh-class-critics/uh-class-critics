import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card, Image, Rating, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Link } from 'react-router-dom';
import { Profiles } from '../../api/profiles/Profiles';

/** Returns the Profile and associated Projects and Interests associated with the passed user email. */
function getProfilesData(email) {
  const data = Profiles.collection.findOne({ email });
  return _.extend({ }, data);
}

/** Component for layout out a Profile Card. */
const MakeCard = (props) => (
  <Card centered className="profile-professors">
    <Card.Content>
      <Image src={props.profile.picture} />
      <Card.Header>{props.profile.firstName} {props.profile.lastName}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.profile.title}</span>
      </Card.Meta>
      <Card.Meta>
        <Rating icon='star' defaultRating={4} maxRating={5} />
        <Link to={'/review/'}>Write a Review</Link>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Header as='h5'>Courses</Header>
      <Card.Description>
        {props.profile.bio}
      </Card.Description>
    </Card.Content>
  </Card>
);

MakeCard.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Renders the Profile Collection as a set of Cards. */
class ProfilesPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const emails = _.pluck(Profiles.collection.find().fetch(), 'email');
    const profileData = emails.map(email => getProfilesData(email));
    return (
      <Container centered fluid id="profiles-page" className="professors-page">
        <Card.Group>
          {_.map(profileData, (profile, index) => <MakeCard key={index} profile={profile}/>)}
        </Card.Group>
      </Container>
    );
  }
}

ProfilesPage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Profiles.userPublicationName);
  return {
    ready: sub1.ready(),
  };
})(ProfilesPage);
