import Ember from 'ember';

export default Ember.Service.extend({
  myAnswers: [],

  add(myAnswer) {
    this.get('myAnswers').pushObject(myAnswer);
    console.log(myAnswer);
  },

});
