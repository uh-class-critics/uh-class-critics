import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Review from './Review';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Professor extends React.Component {
  render() {
    return (
      <Card>
        <Image size='small' src={this.props.professor.image}/>
        <Card.Content>
          <Card.Header>
            {this.props.professor.firstName} {this.props.professor.lastName}
          </Card.Header>
          <Card.Meta>{this.props.professor.bio}</Card.Meta>
          <Card.Description>{this.props.professor.title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Feed>
            {this.props.notes.map((note, index) => <Review key={index} note={note}/>)}
          </Feed>
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
