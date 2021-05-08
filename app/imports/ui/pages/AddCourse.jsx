import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
// import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Courses } from '../../api/course/Courses';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  courseName: String,
  professor: String,
  review: String,
  owner: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddCourse extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { courseName, professor, review, owner } = data;
    // const owner = Meteor.user().username;
    Courses.collection.insert({ courseName, professor, review, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Course added to the database', 'success');
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
          <Header as="h2" textAlign="center" >Add a New Course to the System</Header>
          <br/><br/>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='courseName'/>
              <TextField name='professor'/>
              <LongTextField name='review'/>
              <TextField name='owner'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddCourse;
