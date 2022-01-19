import React from 'react';
import { AutoForm, ErrorsField, HiddenField, NumField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Form, Header, Segment } from 'semantic-ui-react';
import { Reviews } from '../../api/review/Reviews';

const bridge = new SimpleSchema2Bridge(Reviews.schema);

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { review, rating, contactId, createdAt, professorName } = data;
    const owner = Meteor.user().username;
    Reviews.collection.insert({ review, rating, contactId, createdAt, professorName, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Review added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <AutoForm placeholder={true} ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment inverted style={{ backgroundColor: '#09543C' }}>
          <Header as={'h3'}>Write A Review</Header>
          <NumField decimal={false} max={5} min={1} label="Rating" name='rating' placeholder='From 1 to 5'/>
          <LongTextField label="Review" name='review'/>
          <Form.Button content="Submit" style={{ backgroundColor: '#356c5a', color: 'white' }} />
          <ErrorsField/>
          <HiddenField name='contactId' value={this.props.contactId}/>
          <HiddenField name='createdAt' value={new Date()}/>
        </Segment>
      </AutoForm>
    );
  }
}

AddReview.propTypes = {
  contactId: PropTypes.string.isRequired,
};

export default AddReview;
