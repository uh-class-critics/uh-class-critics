import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

export const teacherTitle = ['Assistant Professor', 'Associate Professor'];

/** Encapsulates state and variable values for this collection. */
class ProfessorsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProfessorsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      image: String,
      title: String,
      course: String,
      office: String,
    }, { tracker: Tracker });
    // Ensure collection documents obey schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Professors = new ProfessorsCollection();
