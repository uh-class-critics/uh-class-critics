import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Card, Header, Rating, Container, Grid, Icon, Button, Feed } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Professors } from '../../api/professors/Professors';
import { Reviews } from '../../api/review/Reviews';
import Review from '../components/Review';
import { ProfessorReviews } from '../../api/professorReview/ProfessorReviews';

class ProfessorOverview extends React.Component {
  render() {

    const rev = this.props.professorReview.filter(review => review.contactId === this.props.professors._id);

    return (
      <div className="overviewbg">
        <Container>
          <Grid columns={2}>
            <Grid.Column>
              <Card>
                <Image src={this.props.professors.image} wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>{this.props.professors.firstName} {this.props.professors.lastName}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Professor</span>
                  </Card.Meta>
                  <Card.Meta>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Header as='h5'>Courses</Header>
                  <Card.Description>
                    {this.props.professors.bio}
                  </Card.Description>
                  <Button as={Link} to='/review'>
                    Write a Review
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Container style={{ padding: 25 }}>
                <Icon name="user"/>
                <br/>{this.props.professorReview.course}
                <br/><Rating icon='star' defaultRating={this.props.professorReview.rating} maxRating={5}/>
                <Card fluid>
                  <Feed>
                    {rev.map((review, index) => <Review key={index} review={review}/>)}
                  </Feed>
                  <p>{this.props.professorReview.createdAt}</p>
                </Card>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

ProfessorOverview.propTypes = {
  professors: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  professorReview: PropTypes.array.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Professors.userPublicationName);
  const subscription2 = Meteor.subscribe(Reviews.userPublicationName);
  // Determine if the subscription is ready

  // Get the Stuff documents
  const professors = Professors.collection.find({}).fetch();
  const reviews = Reviews.collection.find({}).fetch();
  const professorReview = ProfessorReviews.collection.find({}).fetch();
  return {
    professors,
    reviews,
    professorReview,
    ready: subscription.ready() && subscription2.ready(),
  };
})(ProfessorOverview);
