import React from 'react';
import { Grid, Input, Container, TextArea, Form } from 'semantic-ui-react';

class ProfessorReview extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container fluid centered className='form'>
          <Grid centered verticalAlign='middle' className='enter'>


              <Grid.Row textAlign='center'>
                <h>Professor Name:</h>
              </Grid.Row>
              <Grid.Row textAlign='center'>
                <Input placeholder=''/>
              </Grid.Row>


              <Grid.Row textAlign='center'>
                <h>Rate Professor (1-5):</h>
              </Grid.Row>
              <Grid.Row textAlign='center'>
                <Input placeholder=''/>
              </Grid.Row>


              <Grid.Row textAlign='center'>
                <h>Describe the Professor:</h>
              </Grid.Row>
              <Grid.Row textAlign='center'>
                <Form>
                  <TextArea placeholder=''/>
                </Form>
              </Grid.Row>


          </Grid>
        </Container>

      </Container>
    );
  }
}

export default ProfessorReview;
