import Ember from 'ember';

export default Ember.Component.extend({
  myAnswers: Ember.inject.service(),

  actions: {
    addToMyAnswers(myAnswer) {
      this.get('myAnswers').add(myAnswer);
      // console.log(myAnswer);
    },
  }
});
