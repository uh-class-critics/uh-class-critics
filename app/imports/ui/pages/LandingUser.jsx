import React from 'react';
import { Grid, Image, Container, Header, Card, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class LandingUser extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container fluid className='class-critics-background'>
          <Grid centered>
            <Grid.Column width={2}>
              <Image verticalAlign='middle' src="/images/class-critics-logo.png" size='small'/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={4}>
              <Header as='h1' inverted>Welcome to UH Class Critics!</Header>
            </Grid.Column>
          </Grid>
        </Container>

        <Container fluid className='body-landing-image-user'>
          <Grid centered verticalAlign='middle' className='body-grid'>
            <Grid.Row>
              <Grid.Column width={3}>
                <Card>
                  <Image src='/images/landing1.png'/>
                  <Header as='h3' textAlign='center' attached>Evaluate Professors </Header>
                  <Header as='h5' textAlign='center' attached> By clicking on &quot;Browse Professors&quot;,
                    you will be able to search for professors within UH Manoa.</Header>
                </Card>
              </Grid.Column>
              <Grid.Column width={3}>
                <Card>
                  <Image src='/images/landing2.png'/>
                  <Header as='h3' textAlign='center' attached>Write Reviews</Header>
                  <Header as='h5' textAlign='center' attached> After finding a professor,
                  you will be able to click on their profiles and have the option to write a detailed review.</Header>
                </Card>

              </Grid.Column>
              <Grid.Column width={3}>
                <Card>
                  <Image src='/images/landing3.png'/>
                  <Header as='h3' textAlign='center' attached>Make Better Choices</Header>
                  <Header as='h5' textAlign='center' attached>You will know what to expect from these professors
                    when signing up for future courses!</Header>
                </Card>
              </Grid.Column>
            </Grid.Row>
              <Grid.Row className='get-started'>
                <Grid.Column textAlign='center' >
                  <Button size = 'huge' className='button' animated color ='black'
                          as={NavLink} exact to="/mainprofessors">
                    <Button.Content hidden> <i className="arrow right icon"></i> </Button.Content>
                    <Button.Content visible>Get Started Now!</Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
      </Container>

    );
  }
}

export default LandingUser;
