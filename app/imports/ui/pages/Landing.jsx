import React from 'react';
import { Grid, Image, Container, Header, Card, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (

      <Container fluid className='body-landing-image'>
        <Grid centered verticalAlign='middle' className='body-grid'>
          <Grid.Row>
            <Grid.Column textAlign='center' width={2}>
              <Button size='huge' as={NavLink} exact to="/signin">Log In</Button>
            </Grid.Column>
            <Grid.Column textAlign='center' width={2}>
              <Button size='huge' as={NavLink} exact to="/signup">Sign Up</Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Card>
                <Image src='/images/landing1.png'/>
                <Header as='h3' textAlign='center' attached>Evaluate Professors</Header>
              </Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card>
                <Image src='/images/landing2.png'/>
                <Header as='h3' textAlign='center' attached>Write Reviews</Header>
              </Card>

            </Grid.Column>
            <Grid.Column width={3}>
              <Card>
                <Image src='/images/landing3.png'/>
                <Header as='h3' textAlign='center' attached>Make Better Choices</Header>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    );
  }
}

export default Landing;
