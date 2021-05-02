import React from 'react';
import { Grid, Loader, Card, Image, Rating, Header, Feed, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Professors } from '../../api/professors/Professors';
import Review from '../components/Review';
import { Reviews } from '../../api/review/Reviews';

/** Renders the Page for editing a single document. */
class ProfessorProfile extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const filter = this.props.reviews.filter(review => review.contactId === this.props.professor._id);
    return (
      <Grid container columns={3}>
        <Grid.Column width={4}>
          <Grid.Column>
            <Card>
              <Image size='tiny' src={this.props.professor.image} wrapped ui={false}/>
              <Card.Content>
                <Card.Header>{this.props.professor.firstName} {this.props.professor.lastName}</Card.Header>
                <Card.Meta>{this.props.professor.title}</Card.Meta>
                <Card.Meta>office: {this.props.professor.office}</Card.Meta>
                <br/>
                <Card.Description>Courses Taught: {this.props.professor.course}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Rating disabled icon='star' maxRating={5} defaultRating={4}/>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Button as={NavLink} exact to='/review'>Write Review</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Column>

        <Grid.Column width={2}>
        </Grid.Column>

        <Grid.Column width={10}>
          <Header as='h3'>Reviews for {this.props.professor.firstName}</Header>
          <Grid.Row>
            <hr/>
          </Grid.Row>
          <Card fluid>
            <Card.Content>
              <Card.Header>Reviews</Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                {filter.map((review, index) => <Review key={index} review={review}/>)}
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Contact document in the props object. Uniforms adds 'model' to the props, which we use.
ProfessorProfile.propTypes = {
  professor: PropTypes.object,
  reviews: PropTypes.array.isRequired,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe(Professors.userPublicationName);
  const subscription2 = Meteor.subscribe(Reviews.userPublicationName);
  const ready = subscription.ready() && subscription2.ready();
  const professor = Professors.collection.findOne(documentId);
  const reviews = Reviews.collection.find({}).fetch();
  return {
    professor,
    reviews,
    ready,
  };
})(ProfessorProfile);
