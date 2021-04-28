import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Reviews } from '../../api/review/Reviews';

const bridge = new SimpleSchema2Bridge(Reviews.schema);

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { note, owner, contactId, createdAt } = data;
    Reviews.collection.insert({ note, owner, contactId, createdAt },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Review sent successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment>
          <TextField label="Write a review" name='note'/>
          <SubmitField value='Submit'/>
          <ErrorsField/>
          <HiddenField name='owner' value={this.props.owner}/>
          <HiddenField name='contactId' value={this.props.contactId}/>
          <HiddenField name='createdAt' value={new Date()}/>
        </Segment>
      </AutoForm>
    );
  }
}

AddReview.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default AddReview;
