import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
// import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Professors } from '../../api/professors/Professors';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  image: String,
  title: String,
  course: String,
  office: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class NewReview extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { firstName, lastName, image, title, course, office } = data;
    // const owner = Meteor.user().username;
    Professors.collection.insert({ firstName, lastName, image, title, course, office },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Professor added to the database', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center" >Add a New Professor to the System</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='firstName'/>
              <TextField name='lastName'/>
              <TextField name='image'/>
              <TextField name='title'/>
              <TextField name='office'/>
              <LongTextField name ='course'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewReview;
