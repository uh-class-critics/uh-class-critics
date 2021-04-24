import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Professors } from '../../api/professors/Professors';
import { Courses } from '../../api/course/Courses';

/* eslint-disable no-console */

/** Defines a new user and associated profile. Error if user already exists. */
function addProfessor({ firstName, lastName, title, picture, email, bio }) {
  console.log(`Defining professor ${email}`);
  // Define the user in the Meteor accounts package.
  /** createUser(email, role); * */
  // Create the profile.
  Professors.collection.insert({ firstName, lastName, title, picture, email, bio });
}

/** Initialize DB if it appears to be empty (i.e. no users defined.) */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultProfessors) {
    console.log('Creating the default profiles');
    Meteor.settings.defaultProfessors.map(professor => addProfessor(professor));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'admin');
  }
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

function addCourse(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Courses.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Courses.collection.find().count() === 0) {
  if (Meteor.settings.defaultCourses) {
    console.log('Creating default courses.');
    Meteor.settings.defaultCourses.map(data => addCourse(data));
  }
}
