import React from 'react';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Container, Loader, Card, Image, Label, Header, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { AutoForm, SubmitField } from 'uniforms-semantic';
import { Departments } from '../../api/departments/Departments';
import { Professors } from '../../api/professors/Professors';
import { ProfessorsDepartments } from '../../api/professors/ProfessorsDepartments';
import MultiSelectField from '../forms/controllers/MultiSelectField';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (allDepartments) => new SimpleSchema({
  departments: { type: Array, label: 'Departments', optional: true },
  'locations.$': { type: String, allowedValues: allDepartments },
});

function getProfessorData(email) {
  const data = Professors.collection.findOne({ email });
  const departments = _.pluck(ProfessorsDepartments.collection.find({ professor: email }).fetch(), 'department');
  return _.extend({ }, data, { departments });
}

/** Component for layout out a Profile Card. */
const MakeCard = (props) => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src={props.professor.image}/>
      <Card.Header>{props.professor.firstName} {props.professor.lastName}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.professor.title}</span>
      </Card.Meta>
      <Card.Description>
        {props.professor.office}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Header as='h5'>Departments</Header>
      {_.map(props.professor.departments,
        (department, index) => <Label key={index} size='tiny' color='teal'>{department}</Label>)}
    </Card.Content>
  </Card>
);

/** Properties */
MakeCard.propTypes = {
  professor: PropTypes.object.isRequired,
};

/** Renders the Profile Collection as a set of Cards. */
class FindDepartments extends React.Component {

  constructor(props) {
    super(props);
    this.state = { departments: [] };
  }

  submit(data) {
    this.setState({ departments: data.departments || [] });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const allDepartments = _.pluck(Departments.collection.find().fetch(), 'name');
    const formSchema = makeSchema(allDepartments);
    const bridge = new SimpleSchema2Bridge(formSchema);
    const emails = _.pluck(ProfessorsDepartments.collection.find({ department: { $in: this.state.departments } }).fetch(), 'professor');
    const professorData = _.uniq(emails).map(email => getProfessorData(email));
    return (
      <Container id="filter-page">
        <AutoForm schema={bridge} onSubmit={data => this.submit(data)} >
          <Segment>
            <MultiSelectField id='departments' name='departments' showInlineError={true} placeholder={'Choose departments'}/>
            <SubmitField id='submit' value='Submit'/>
          </Segment>
        </AutoForm>
        <Card.Group style={{ paddingTop: '10px' }}>
          {_.map(professorData, (professor, index) => <MakeCard key={index} professor={professor}/>)}
        </Card.Group>
      </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
FindDepartments.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Professors.userPublicationName);
  const sub2 = Meteor.subscribe(Professors.userPublicationName);
  const sub3 = Meteor.subscribe(Professors.userPublicationName);
  return {
    ready: sub1.ready() && sub2.ready() && sub3.ready(),
  };
})(FindDepartments);
