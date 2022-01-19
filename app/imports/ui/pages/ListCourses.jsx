import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Container, Header, Loader, Card, Input } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Course from '../components/Course';
import { Courses } from '../../api/course/Courses';
import { Reviews } from '../../api/review/Reviews';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (e, { value }) => this.setState({ search: value });

  CourseSearch = (course) => {
    const { search } = this.state;
    const lowerCase = search.toLowerCase();
    return course.courseName.toLowerCase().startsWith(lowerCase);
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const allCoursesNames = _.filter(this.props.courses, this.CourseSearch);
    const sorted = _.sortBy(allCoursesNames, 'courseName');
    return (
      <Container>
        <br/><Header as="h2" textAlign="center">Courses</Header><br/>
        <Input inverted type='text' size='large' placeholder='Search here...' icon='search' fluid
          onChange={this.handleChange}/>
        <br/><br/>
        <Card.Group>
          {sorted.map((course, index) => <Course key={index} course={course} reviews={this.props.reviews.filter(review => (review.contactId === course._id))}/>)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListCourses.propTypes = {
  courses: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Courses.userPublicationName);
  const subscription2 = Meteor.subscribe(Reviews.userPublicationName);
  const ready = subscription.ready() && subscription2.ready();
  return {
    courses: Courses.collection.find({}).fetch(),
    reviews: Reviews.collection.find({}).fetch(),
    ready,
  };
})(ListCourses);
