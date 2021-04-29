import { Meteor } from 'meteor/meteor';
import { Professors } from '../../api/professors/Professors';
import { Courses } from '../../api/course/Courses';
import { ProfessorReviews } from '../../api/professorReview/ProfessorReviews';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addProfessor(data) {
  console.log(`  Adding: ${data.lastName}`);
  Professors.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Professors.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfessors) {
    console.log('Creating default Professors.');
    Meteor.settings.defaultProfessors.map(data => addProfessor(data));
  }
}

function addCourse(data) {
  console.log(`  Adding: ${data.professor} (${data.owner})`);
  Courses.collection.insert(data);
}

function addProfessorReview(data) {
  console.log(`  Adding: ${data.professorName} (${data.owner})`);
  ProfessorReviews.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Courses.collection.find().count() === 0) {
  if (Meteor.settings.defaultCourses) {
    console.log('Creating default courses.');
    Meteor.settings.defaultCourses.map(data => addCourse(data));
  }
}
if (ProfessorReviews.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfessorReviews) {
    console.log('Creating default Reviews.');
    Meteor.settings.defaultProfessorReviews.map(data => addProfessorReview(data));
  }
}
