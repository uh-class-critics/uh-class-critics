import React from 'react';
import { Grid, Input, Container } from 'semantic-ui-react';

class ProfessorReview extends React.Component {
  render() {
    return (
      <Container fluid centered className='form'>
        <Grid centered verticalAlign='middle' className='enter'>
          <Grid.column textAlign='center' width={0.5}>
            <h>Professor Name:</h>
          </Grid.column>
          <Grid.column textAlign='center' width={1}>
            <Input placeholder='' />
          </Grid.column>
        </Grid>
      </Container>
    );
  }
}

export default ProfessorReview;
