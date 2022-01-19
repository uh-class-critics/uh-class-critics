import React from 'react';
import { Button, Card, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
// import Review from './Review';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Professor extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content style={{ backgroundColor: '#9ab5ad' }}>
          <Image
            floated='right'
            size='tiny'
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
          <br/>
          <Card.Header>
            <Header textAlign='center'>
              <Button size='tiny' color='orange' as={NavLink} exact to={`/professor/${this.props.professor._id}`}>Read reviews on {this.props.professor.firstName}</Button>
            </Header>
          </Card.Header>
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
