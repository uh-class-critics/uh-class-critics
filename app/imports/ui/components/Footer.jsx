import React from 'react';
import { Container, Grid, Image, List } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Grid columns={3}>
            <Grid.Column>
              <Image src="/images/class-critics-logo.png" size="small"/>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>About Us</List.Item>
                <hr/>
                <List.Item><a href="https://uh-class-critics.github.io/">GitHub Home Page</a></List.Item>
                <List.Item><a href="https://github.com/uh-class-critics/uh-class-critics">Source Code</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>Contact Us</List.Item>
                <hr/>
                <List.Item><a href="https://acatarinaoaraujo.github.io/">Anna Araujo</a>: acoa@hawaii.edu</List.Item>
                <List.Item><a href="https://johnny-ho1.github.io/">Johnny Ho</a>: johnnyho@hawaii.edu</List.Item>
                <List.Item><a href="https://zijunhuang-1.github.io/">Zi Jun Huang</a>: huangz8@hawaii.edu</List.Item>
                <List.Item><a href="https://sle417.github.io/">Steven Le</a>: stevenle@hawaii.edu</List.Item>
                <List.Item><a href="https://johnsuelen.github.io/">John Suelen</a>: jsuelen@hawaii.edu</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
