import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Grid, Header, Image } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <Container fluid>
        <Container fluid className='signout-background'>
          <Grid className='signout-card' centered>
            <Grid.Column width={3}>
              <Card>
                <Image src='/images/signout-card.jpg'/>
                <Header as='h3' textAlign='center' attached><p>Successfully signed off.</p>
                    Thank you for using  UH Class Critics</Header>
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }
}
