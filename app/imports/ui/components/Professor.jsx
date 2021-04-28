import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Review from './Review';
import AddReview from './AddReview';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Professor extends React.Component {
  render() {
    return (
      <Card>
        <Image size='small' src={this.props.professor.image}/>
        <Card.Content>
          <Card.Header>
            <Link to={`/overview/${this.props.professor._id}`}>{this.props.professor.firstName} {this.props.professor.lastName}</Link>
          </Card.Header>
          <Card.Meta>{this.props.professor.bio}</Card.Meta>
          <Card.Description>{this.props.professor.title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Feed>
            {this.props.notes.map((note, index) => <Review key={index} note={note}/>)}
          </Feed>
        </Card.Content>
        <Card.Content extra>
          <AddReview owner={this.props.professor.owner} contactId={this.props.professor._id}/>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Professor.propTypes = {
  professor: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Professor);
