import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Container, Loader, Card, Input, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Professors } from '../../api/professors/Professors';
import Professor from '../components/Professor';
// import { Reviews } from '../../api/review/Reviews';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProfessors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (e, { value }) => this.setState({ search: value });

  ProfessorSearch = (professor) => {
    const { search } = this.state;
    const lowerCase = search.toLowerCase();
    return professor.firstName.toLowerCase().startsWith(lowerCase);
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const allFirstNames = _.filter(this.props.professors, this.ProfessorSearch);
    const sorted = _.sortBy(allFirstNames, 'firstName');

    return (
      <Container>
        <br/><Header as="h2" inverted textAlign="center">Professors</Header><br/>
        <Input inverted type='text' size='large' placeholder='Search here...' icon='search' fluid
          onChange={this.handleChange}/>
        <br/><br/>
        <Card.Group>
          {sorted.map((professors, index) => <Professor key={index} professor={professors}/>)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListProfessors.propTypes = {
  professors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Professors.userPublicationName);
  const ready = subscription.ready();
  return {
    professors: Professors.collection.find({}).fetch(),
    ready,
  };
})(ListProfessors);
