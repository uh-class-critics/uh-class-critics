import React from 'react';
import { Grid, Image, Container, Header, Card, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
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

        <Container fluid centered className='body-landing-image'>
          <Grid centered verticalAlign='middle' className='body-grid'>
            <Grid.Row>
              <Grid.Column textAlign='center' width={2}>
                <Button color='white' size='huge' as={NavLink} exact to="/signin">Log In</Button>
              </Grid.Column>
              <Grid.Column textAlign='center' width={2}>
                <Button color='white' size='huge' as={NavLink} exact to="/signup">Sign Up</Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <Card>
                  <Image src='https://img.freepik.com/free-vector/man-professor-teacher-icon_48369-2696.jpg?size=338&ext=jpg'/>
                  <Header as='h3' textAlign='center' attached>Evaluate Professors</Header>
                </Card>
              </Grid.Column>
              <Grid.Column width={3}>
                <Card>
                  <Image src='https://static.vecteezy.com/system/resources/previews/000/214/903/original/man-hands-typing-an-article-on-a-vintage-typewriter-vector.jpg'/>
                  <Header as='h3' textAlign='center' attached>Write Reviews</Header>
                </Card>

              </Grid.Column>
              <Grid.Column width={3}>
                <Card>
                  <Image src='https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?size=338&ext=jpg&ga=GA1.2.1588707983.1617408000'/>
                  <Header as='h3' textAlign='center' attached>Make Better Choices</Header>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Container>

    );
  }
}

export default Landing;
