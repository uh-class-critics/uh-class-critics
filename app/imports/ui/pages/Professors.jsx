import React from 'react';
import { Image, Card, Header, Rating } from 'semantic-ui-react';

const Professors = () => (
  <Card.Group itemsPerRow={6}>
    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2019/02/mahdi.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Mahdi Belcaid</Card.Header>
        <Card.Meta>
          <span className='date'>Assistant Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 434: Data Science Fundamentals
          ICS 691: Topics in Computer Science (Data Science Fundamentals)
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2013/08/Nodari_Sitchinava-2014.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Nodari Sitchinava</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 621: Analysis of Algorithms, ICS 491: Competitive Programming, ICS 443: Parallel Algorithms.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='http://www.ics.hawaii.edu/wp-content/uploads/2013/08/Ravi_Narayan-2014.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Ravi Narayan</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 212: Program Structure, ICS 332: Operating Systems.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2013/08/kim_binsted-square-300x300.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Kim Bisted</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 313: Programming Language Theory.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2013/08/Kyungim_Baek1.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Kyungim Baek</Card.Header>
        <Card.Meta>
          <span className='date'>AssociateProfessor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 241 Discrete Mathematics II, CS 483 Computer Vision.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='http://www.ics.hawaii.edu/wp-content/uploads/2013/08/Jason_Leigh-2014.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Jason Leigh</Card.Header>
        <Card.Meta>
          <span className='date'>Assistant Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 111 Intro to Computer Science I, ICS 685 Virtual and Augmented Reality.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://cammoore.github.io/images/cam-moore.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Carleton Moore</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 211 Intro to Computer Science II, ICS 314 Software Engineering I.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2013/08/edo_biagioni2.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Edoardo Biagioni</Card.Header>
        <Card.Meta>
          <span className='date'>Associate Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 612 Theory of Operating Systems, Sabbatical.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://philipmjohnson.github.io/images/philip2.jpeg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Philip Johnson</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 314 Software Engineering I, ICS 491: Special Topics.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2018/11/gpsmall.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Guylaine Poisson</Card.Header>
        <Card.Meta>
          <span className='date'>Associate Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 491: Special Topics
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='http://www.ics.hawaii.edu/wp-content/uploads/2013/08/Henri_Casanova1.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Henri Casanova</Card.Header>
        <Card.Meta>
          <span className='date'>Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 312 Machine-Level and Systems Programming, ICS 332 Operating Systems, ICS 332 Operating Systems
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='https://www.ics.hawaii.edu/wp-content/uploads/2013/08/Depeng_Li-2014.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Depeng Li</Card.Header>
        <Card.Meta>
          <span className='date'>Associate Professor</span>
        </Card.Meta>
        <Card.Meta>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Header as='h5'>Courses</Header>
        <Card.Description>
          ICS 455: Security and Trust II, ICS 623: Advanced Cryptography.
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default Professors;
