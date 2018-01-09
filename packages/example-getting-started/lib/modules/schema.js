const schema = {

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },

  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },

  name: {
    label: 'Name',
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },

  review: {
    label: 'Review',
    type: String,
    optional: true,
    control: 'textarea',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members']
  },

};

export default schema;
