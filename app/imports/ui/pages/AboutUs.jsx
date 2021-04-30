import React from 'react';
import { Grid, Image, Container, Card, Icon, Button } from 'semantic-ui-react';

class Landing extends React.Component {
  render() {
    return (
      <Container className='aboutUs-background'>
        <Grid columns={5}>
          <Grid.Row>

            <Grid.Column>
              <Card>
                <Image circular src='https://zijunhuang-1.github.io/images/ZiJun.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Zi Jun Huang</Card.Header>
                  <Card.Meta>
                    <span>Junior, ICS Student</span>
                  </Card.Meta>
                  <Card.Description>
                    <p>Interests: Software Engineering, UI/UX Design, Web Development.</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <Icon name='mail' />
                    huangz8@hawaii.edu
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <Icon name='address book outline'/>
                    <a href="https://zijunhuang-1.github.io/">Portofolio</a>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name='github' />
                    <a href="https://github.com/ZijunHuang-1">GitHub</a>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button size="mini" color='linkedin' href="http://www.linkedin.com/in/zi-jun-huang-0002">
                    <Icon name='linkedin' /> LinkedIn</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image circular src='https://johnsuelen.github.io/images/jsuelen.PNG' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>John Suelen</Card.Header>
                  <Card.Meta>
                    <span>Sophomore, ICS Student</span>
                  </Card.Meta>
                  <Card.Description>
                    <p>Interests: Video Games, Software Development, Game Development.</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <Icon name='mail' />
                    jsuelen@hawaii.edu
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <Icon name='address book outline'/>
                    <a href="https://johnsuelen.github.io/">Portofolio</a>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name='github' />
                    <a href="https://github.com/JohnSuelen">GitHub</a>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button size="mini" color='linkedin' href="https://www.linkedin.com/in/john-vicson-suelen-139a71203/">
                    <Icon name='linkedin' /> LinkedIn</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image circular src='https://sle417.github.io//images/pfp.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Steven Le</Card.Header>
                  <Card.Meta>
                    <span>Sophomore, ICS Student</span>
                  </Card.Meta>
                  <Card.Description>
                    <p>Interests: Software Engineering, Computer Graphics, Information Technology.</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <Icon name='mail' />
                    stevenle@hawaii.edu
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <Icon name='address book outline'/>
                    <a href="https://sle417.github.io/">Portofolio</a>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name='github' />
                    <a href="https://github.com/sle417">GitHub</a>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button size="mini" color='linkedin' href="http://linkedin.com/in/sle417">
                    <Icon name='linkedin' /> LinkedIn</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image circular src='https://acatarinaoaraujo.github.io/images/profilePicture.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ana Catarina Araujo</Card.Header>
                  <Card.Meta>
                    <span>Junior, ICS Student</span>
                  </Card.Meta>
                  <Card.Description>
                    <p>Interests: Software Development, Criminal Justice, and Economy.</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <Icon name='mail' />
                    acoa@hawaii.edu
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <Icon name='address book outline'/>
                    <a href="https://acatarinaoaraujo.github.io/">Portofolio</a>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name='github' />
                    <a href="https://github.com/acatarinaoaraujo">GitHub</a>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button size="mini" color='linkedin' href="https://www.linkedin.com/in/acatarinaoaraujo/">
                    <Icon name='linkedin' /> LinkedIn</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image circular src='https://johnny-ho1.github.io/images/Johnny.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Zohnny Ho</Card.Header>
                  <Card.Meta>
                    <span>Sophomore, ICS Student</span>
                  </Card.Meta>
                  <Card.Description>
                    <p>Interests: Data Science, Data Mining, Game Development.</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Meta>
                    <Icon name='mail' />
                    johnnyho@hawaii.edu
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <Icon name='address book outline'/>
                    <a href="https://Johnny-Ho1.github.io">Portofolio</a>
                  </Card.Meta>
                  <Card.Meta>
                    <Icon name='github' />
                    <a href="https://github.com/johnny-ho1">GitHub</a>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button size="mini" color='linkedin' href="https://www.linkedin.com/in/johnny-ho-5b7217204/">
                    <Icon name='linkedin' /> LinkedIn</Button>
                </Card.Content>
              </Card>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>

    );
  }
}

export default Landing;
