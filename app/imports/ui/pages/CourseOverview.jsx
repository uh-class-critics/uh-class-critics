import React from 'react';
import { Grid, Loader, Card, Rating, Header, Feed, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Courses } from '../../api/course/Courses';
import Review from '../components/Review';
import { ProfessorReviews } from '../../api/professorReview/ProfessorReviews';

/** Renders the Page for editing a single document. */
class ProfessorProfile extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const filter = this.props.reviews.filter(review => review.contactId === this.props.course._id);
    return (
      <Grid container columns={3}>
        <Grid.Column width={4}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>{this.props.course.courseName}</Card.Header>
                <Card.Meta>{this.props.course.title}</Card.Meta>
                <br/>
                <Card.Description>Instructor: {this.props.course.professor}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Rating disabled icon='star' maxRating={5} defaultRating={4}/>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Button as={NavLink} exact to={`/review/${this.props.course._id}`}>Write Review</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Column>

        <Grid.Column width={2}>
        </Grid.Column>

        <Grid.Column width={10}>
          <Header as='h3'>Reviews for {this.props.course.courseName}</Header>
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
  course: PropTypes.object,
  reviews: PropTypes.array.isRequired,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe(Courses.userPublicationName);
  const subscription2 = Meteor.subscribe(ProfessorReviews.userPublicationName);
  const ready = subscription.ready() && subscription2.ready();
  const course = Courses.collection.findOne(documentId);
  const reviews = ProfessorReviews.collection.find({}).fetch();
  return {
    course,
    reviews,
    ready,
  };
})(ProfessorProfile);
