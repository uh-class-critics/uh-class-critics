import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-undef
const searchTerm = (localStorage.getItem('searchTerm') != null) ? localStorage.getItem('searchTerm') : 'ICS 111';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ProfessorData extends React.Component {

  onSelectChange(e) {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    // eslint-disable-next-line no-undef
    localStorage.setItem('searchTerm', e.target.value);
    // eslint-disable-next-line no-undef
    window.location.reload();
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Professor Review</Header>
        <strong>Please select a class:</strong>&nbsp;&nbsp;
        <select className={'ProfessorReviewSelect'} onChange={this.onSelectChange.bind(this)}>
          <option value=''>Select a professor: </option>
          <option value='Philip Johnson'>Philip Johnson</option>
          <option value='Baek Kyungim'>Baek Kyungim</option>
        </select>
        <br/>
        <br />
        <br />
        {(this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>}
      </Container>
    );
  }

  // Render the page once subscriptions have been received.
  renderPage() {

    return (
      <Container>
        <div id={'review'} >
          <Header as="h3" textAlign="center">{searchTerm}</Header><br/>
          <Table basic={'very'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Professor Name</Table.HeaderCell>
                <Table.HeaderCell>Date of Review</Table.HeaderCell>
                <Table.HeaderCell>Review</Table.HeaderCell>
                <Table.HeaderCell>User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.reviews.map((review) => <ProfessorData key={review._id} review={review}/>)}
            </Table.Body>
          </Table>
        </div>
      </Container>
    );
  }
}

// Require an array of Class Review documents in the props.
ProfessorData.propTypes = {
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to ClassReview documents.
  const subscription = Meteor.subscribe(ProfessorData.generalPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the ClassReview documents
  const reviews = ProfessorData.collection.find({ className: searchTerm }).fetch();
  return {
    professorName,
    reviews,
    ready,
  };
})(ProfessorData);
