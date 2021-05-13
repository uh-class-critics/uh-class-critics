import React from 'react';
import { AutoForm, ErrorsField, SubmitField, HiddenField, NumField, LongTextField, SelectField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';
import { Reviews } from '../../api/review/Reviews';

const bridge = new SimpleSchema2Bridge(Reviews.schema);

/** Renders the Page for adding a document. */
class AddReview extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { review, rating, contactId, createdAt } = data;
    Reviews.collection.insert({ review, rating, contactId, createdAt },
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
        <Segment>
          <Header>Write A Review</Header>
          <SelectField decimal={false} max={5} min={1} label="Rating" name='rating' placeholder='Select Rating'/>
          <LongTextField label="Review" name='review'/>
          <SubmitField centered value='Submit'/>
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
