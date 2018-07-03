import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;


export default Model.extend({

userId: attr('string'), // the name of the model has to be same as the API
title: attr('string'),  // you can also use this instead of attr('string')
body: attr('string'),

//this property is used to combine the mixed datas
content: Ember.computed('title', 'body', function() {
    return `${this.get('title')} ${this.get('body')}`;
  })

});
