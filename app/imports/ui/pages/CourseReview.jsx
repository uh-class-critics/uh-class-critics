import React from 'react';
import { Grid, Loader, Card, Rating, Feed, Header, Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Courses } from '../../api/course/Courses';
import Review from '../components/Review';
import { Reviews } from '../../api/review/Reviews';
import AddReview from '../components/AddReview';

/** Renders the Page for editing a single document. */
class CourseReview extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const filter = this.props.reviews.filter(review => review.contactId === this.props.course._id);
    return (
      <Grid container columns={2}>
        <Grid.Column width={4}>
          <Grid.Column>
            <Card>
              <Card.Content style={{ backgroundColor: '#9ab5ad' }}>
                <Card.Header>{this.props.course.courseName}</Card.Header>
                <Card.Meta>{this.props.course.title}</Card.Meta>
                <br/>
                <Card.Description><strong>Instructor: </strong>{this.props.course.professor}</Card.Description>
                <Card.Description>
                  <strong>Department:</strong> {this.props.course.alpha}
                </Card.Description>
                <Card.Description>
                  <strong>Description:</strong> {this.props.course.description}
                </Card.Description>
                <br/>
                <Card.Description>
                  <strong>Credits:</strong> {this.props.course.credits}
                </Card.Description>
                <Card.Description>
                  <strong> Attributes:</strong> {this.props.course.attributes}
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ backgroundColor: '#9ab5ad' }}>
                <Rating disabled icon='star' maxRating={5} defaultRating={4}/>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Column>

        <Grid.Column width={10}>
          <AddReview contactId={this.props.course._id}/>
          <br/>
          <Header textAlign={'center'} as={'h3'}><Icon name={'arrow alternate circle down outline'}/>Reviews for {this.props.course.courseName}</Header>
          <Card fluid>
            <Card.Content style={{ backgroundColor: '#9ab5ad' }}>
            </Card.Content>
            <Card.Content extra style={{ backgroundColor: '#09543C' }}>
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
CourseReview.propTypes = {
  course: PropTypes.object,
  reviews: PropTypes.array.isRequired,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe(Courses.userPublicationName);
  const subscription2 = Meteor.subscribe(Reviews.userPublicationName);
  const ready = subscription.ready() && subscription2.ready();
  const course = Courses.collection.findOne(documentId);
  const reviews = Reviews.collection.find({}).fetch();
  return {
    course,
    reviews,
    ready,
  };
})(CourseReview);
