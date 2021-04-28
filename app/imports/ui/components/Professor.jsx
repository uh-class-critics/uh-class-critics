import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from './AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
      <Card>
        <Image floated='right' size='mini' src={this.props.professor.image}/>
        <Card.Content>
          <Card.Header>{this.props.professor.firstName} {this.props.professor.lastName}</Card.Header>
          <Card.Meta>{this.props.professor.bio}</Card.Meta>
          <Card.Description>{this.props.professor.title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/edit/${this.props.professor._id}`}>Edit</Link>
        </Card.Content>
        <Card.Content extra>
          <Feed>
            {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
          </Feed>
        </Card.Content>
        <Card.Content extra>
          <AddNote owner={this.props.professor.owner} contactId={this.props.professor._id}/>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Contact.propTypes = {
  professor: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Contact);
