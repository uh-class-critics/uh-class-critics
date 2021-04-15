import React from 'react';
import { Grid, Input, Container, TextArea, Form } from 'semantic-ui-react';

class ProfessorReview extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container fluid centered className='form'>
          <Grid centered verticalAlign='middle' className='enter'>

            <Grid.Column>
              <Grid.Column textAlign='center' width={0.5}>
                <h>Professor Name:</h>
              </Grid.Column>
              <Grid.Column textAlign='center' width={1}>
                <Input placeholder=''/>
              </Grid.Column>

              <Grid.Column textAlign='center' width={0.5}>
                <h>Rate Professor (1-5):</h>
              </Grid.Column>
              <Grid.Column textAlign='center' width={1}>
                <Input placeholder=''/>
              </Grid.Column>

              <Grid.Column textAlign='center' width={0.5}>
                <h>Describe the Professor:</h>
              </Grid.Column>
              <Grid.Column textAlign='center' width={1}>
                <Form>
                  <TextArea placeholder=''/>
                </Form>
              </Grid.Column>

            </Grid.Column>
          </Grid>
        </Container>

      </Container>
    );
  }
}

export default ProfessorReview;
