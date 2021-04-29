import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
// import Review from './Review';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Professor extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={this.props.professor.image}
          />
          <Card.Header>
            <Link to={`/professor/${this.props.professor._id}`}>
              {this.props.professor.firstName} {this.props.professor.lastName}
            </Link>
          </Card.Header>
          <Card.Meta>{this.props.professor.title}</Card.Meta>
          <Card.Description>
            <strong> Courses: {this.props.professor.course} </strong>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Professor.propTypes = {
  professor: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Professor);
