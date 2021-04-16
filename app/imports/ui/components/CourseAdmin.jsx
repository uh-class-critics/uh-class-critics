import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CourseAdmin extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{this.props.course.courseName} {this.props.course.professor}</Card.Header>
          <Card.Description>
            {this.props.course.review}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          {this.props.course.owner}
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
CourseAdmin.propTypes = {
  course: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(CourseAdmin);
