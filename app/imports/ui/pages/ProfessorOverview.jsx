import React from 'react';
import { Image, Card, Header, Rating, Container, Grid, Icon } from 'semantic-ui-react';

class Landing extends React.Component {
  render() {
    return (
      <div className="overviewbg">
        <Container>
          <Grid columns={2}>
            <Grid.Column>
              <Card>
                <Image src='https://philipmjohnson.github.io/images/philip2.jpeg' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Philip Johnson</Card.Header>
                  <Card.Meta>
                    <span className='date'>Professor</span>
                  </Card.Meta>
                  <Card.Meta>
                    <Rating icon='star' defaultRating={4} maxRating={5}/>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Header as='h5'>Courses</Header>
                  <Card.Description>
                    ICS 314 Software Engineering I, ICS 491: Special Topics.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Container style={{ padding: 25 }}>
                <Icon name="user"/> Person A
                <br/>ICS 314
                <br/><Rating icon='star' defaultRating={5} maxRating={5}/>
                <Card fluid>
                  <p>For Credit: Yes
                    Would Take Again: Yes
                    Grade: A
                    Textbook: No</p>
                  <p>Easiest Writing Intensive A class you&apos;ll take only requires 3 paragraphs for each essay.
                    WOD&apos;s
                    are not hard and are really similar to the practice WOD&apos;s he gives.
                    Professor basically hands you an A on a silver platter. The professor is a nice guy also and he is
                    willing to help out at any time.</p>
                  <p>05/30/20</p>
                </Card>
              </Container>
              <Container style={{ padding: 25 }}>
                <Icon name="user"/> Person B
                <br/>ICS 314
                <br/><Rating icon='star' defaultRating={1} maxRating={5}/>
                <Card fluid>
                  <p>For Credit: Yes
                    Attendance: Mandatory
                    Would Take Again: No
                    Textbook: No</p>
                  <p>Very all or nothing type of grader. His Workout of the day assignments are relentless and
                    unforgiving(100 points each and he will give you a 0/100 if your code isnt perfect). If you plan on
                    trying to get an A in this class, you must know how to code Javascipt like a seasoned software
                    developer.</p>
                  <p>01/22/19</p>
                </Card>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Landing;
