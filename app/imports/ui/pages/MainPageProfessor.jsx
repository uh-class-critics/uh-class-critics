import React from 'react';
import { Item, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ItemExampleItems = () => (

  <div className="professor-main">
    <Grid centered columns='3'>
      <Header color='grey' className="professor-header" as='h2' icon='folder open'>CHOOSE THE DEPARTMENT</Header>
      <Grid.Row>
        <Grid.Column width={3}>
          <Item>
            <Item.Image circular size='medium' src='https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124335/glenn-carstens-peters-203007-unsplash.jpg' />
          </Item>
          <Item.Content>
            <Item.Header className="dept-course">Inf. & Computer Science (ICS)</Item.Header>
            <Link to={'/listprofessor/'}>Inf. & Computer Science (ICS)</Link>
          </Item.Content>
        </Grid.Column>
        <Grid.Column width={3}>
          <Item>
            <Item.Image circular size='medium' src='https://wallpaperaccess.com/full/977911.jpg' />
          </Item>
          <Item.Content>
            <Item.Header className="dept-course">Chemistry</Item.Header>
            <Link to={'/NotFound/'}>Chemistry</Link>
          </Item.Content>
        </Grid.Column>
        <Grid.Column width={3}>
          <Item>
            <Item.Image circular size='huge' src='https://i.imgur.com/RYsxHK0.jpg' />
          </Item>
          <Item.Content>
            <Item.Header className="dept-course">Business</Item.Header>
            <Link to={'/NotFound/'}>Business</Link>
          </Item.Content>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </div>
);

export default ItemExampleItems;
