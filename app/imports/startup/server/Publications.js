import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Courses } from '../../api/course/Courses';
import { Professors } from '../../api/professors/Professors';
import { Reviews } from '../../api/review/Reviews';
import { ProfessorReviews } from '../../api/professorReview/ProfessorReviews';

Meteor.publish(ProfessorReviews.userPublicationName, function () {
  if (this.userId) {
    return ProfessorReviews.collection.find();
  }
  return this.ready();
});

Meteor.publish(Professors.userPublicationName, function () {
  if (this.userId) {
    return Professors.collection.find();
  }
  return this.ready();
});

Meteor.publish(Reviews.userPublicationName, function () {
  if (this.userId) {
    return Reviews.collection.find({});
  }
  return this.ready();
});

Meteor.publish(Courses.userPublicationName, function () {
  if (this.userId) {
    return Courses.collection.find({});
  }
  return this.ready();
});

/* Admin Level */

Meteor.publish(Professors.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Courses.collection.find();
  }
  return this.ready();
});

Meteor.publish(Courses.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Courses.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
