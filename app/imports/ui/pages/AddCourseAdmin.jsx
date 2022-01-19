import React from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import { AutoForm, ErrorsField, TextField, LongTextField, SelectField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Courses } from '../../api/course/Courses';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  courseName: String,
  title: String,
  professor: String,
  description: String,
  attributes: {
    type: String,
    allowedValues: ['FW', 'FQ', 'FS', 'FGA', 'FGB', 'FGC', 'DA', 'DH', 'DL', 'DS', 'DB', 'DP', 'ETH', 'HAP', 'OC', 'WI'],
    defaultValue: 'WI',
  },
  credits: String,
  alpha: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddCourseAdmin extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { courseName, title, professor, description, attributes, credits, alpha } = data;
    Courses.collection.insert({ courseName, title, professor, description, attributes, credits, alpha },
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
        <Grid.Column width={8}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment inverted padded style={{ backgroundColor: '#09543C' }}>
              <Header as="h3" textAlign="center" >Add a New Course to the System</Header>
              <Form.Group widths={'equal'}>
                <TextField label="Course" icon={'book'} name='courseName' placeholder='Ex: ASTR 210'/>
                <TextField label="Course Title" name='title' placeholder='Ex: Foundations of Astronomy'/>
              </Form.Group>
              <TextField label="Instructor's Name" icon={'user'} name='professor'/>
              <LongTextField label="Description" icon={'write'} name='description' placeholder='Give a brief description about the course.'/>
              <Form.Group widths={'equal'}>
                <TextField label="Credits" icon={'clock outline'} name='credits'/>
                <SelectField label="Attributes" name='attributes'/>
              </Form.Group>
              <TextField label="Department" name='alpha' placeholder='Ex: Dep. of Physics and Astronomy'/>
              <Form.Button content="Submit" style={{ backgroundColor: '#356c5a', color: 'white' }} />
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddCourseAdmin;
