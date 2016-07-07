import Ember from 'ember';

export default Ember.Service.extend({
  myAnswersArray: [],

  add(myAnswer) {
    this.get('myAnswersArray').pushObject(myAnswer);
    // console.log(myAnswer);
  },
});
