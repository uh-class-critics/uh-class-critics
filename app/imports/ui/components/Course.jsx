import React from 'react';
import { Button, Card, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Course extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content style={{ backgroundColor: '#9ab5ad' }}>
          <Card.Header>
            <Link to={`/course/${this.props.course._id}`}>
              {this.props.course.courseName}
            </Link>
          </Card.Header>
          <Card.Meta>{this.props.course.title}</Card.Meta>
          <Card.Description>
            <strong>Description: {this.props.course.description}</strong>
          </Card.Description>
          <br/>
          <Card.Description>
            Professor: {this.props.course.professor}
          </Card.Description>
          <br/>
          <Card.Header>
            <Header textAlign='center'>
              <Button size='tiny' color='orange' as={NavLink} exact to={`/course/${this.props.course._id}`}>Read reviews on {this.props.course.courseName}</Button>
            </Header>
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Course.propTypes = {
  course: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Course);
