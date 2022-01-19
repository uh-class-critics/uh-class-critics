import React from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Professors, teacherTitle } from '../../api/professors/Professors';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  image: String,
  title: {
    type: String,
    allowedValues: teacherTitle,
    defaultValue: 'Associate Professor',
  },
  course: String,
  office: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddProfessorAdmin extends React.Component {

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
        <Grid.Column width={8}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment inverted padded style={{ backgroundColor: '#09543C' }}>
              <Header as="h3" textAlign="center" >Add a New Professor to the System</Header>
              <Form.Group widths={'equal'}>
                <TextField label='First Name' name='firstName'/>
                <TextField label='Last Name' name='lastName'/>
              </Form.Group>
              <TextField name ='course' icon={'book'} placeholder='Ex: Biology'/>
              <SelectField name='title'/>
              <TextField name='office' icon={'building'} placeholder='Ex: POST 300'/>
              <TextField label='Image URL' name='image' icon={'image outline'} placeholder='https://www.ics.hawaii.edu/uploads/image.jpg'/>
              <Form.Button content="Submit" style={{ backgroundColor: '#356c5a', color: 'white' }} />
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddProfessorAdmin;
