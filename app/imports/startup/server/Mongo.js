import { Meteor } from 'meteor/meteor';
import { Courses } from '../../api/course/Courses';

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
