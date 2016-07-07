import Ember from 'ember';

export default Ember.Component.extend({
  myAnswers: Ember.inject.service(),

  actions: {
    addToMyAnswers(myAnswer) {
      // var params = {
      //   respuesta: this.get('respuesta') ? this.get('respuesta') : "",
      //   author: this.get('author') ? this.get('author') : "",
      //   time: (new Date().toString()),
      //   pregunta: this.get('question')
      // };
      this.get('myAnswers').add(myAnswer);
      // console.log(myAnswer);
    },
  }
});
