import React from 'react';
import { Item, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ItemExampleItems = () => (

  <div className="professor-main">
    <Grid columns='4'>
      <Header color='grey' className="professor-header" as='h2' icon='folder open' content='CHOOSE THE DEPARTMENT' />
      <Grid.Row>

        <Grid.Column>
          <Item>
            <Item.Image circular size='medium' src='https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124335/glenn-carstens-peters-203007-unsplash.jpg' />
          </Item>
          <Item.Content>
            <Item.Header>Inf. & Computer Science (ICS)</Item.Header>
            <Link to={'/listprofessor/'}>Professors</Link>
          </Item.Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default ItemExampleItems;
