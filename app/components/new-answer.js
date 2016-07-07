import Ember from 'ember';

export default Ember.Component.extend({
  myAnswers: Ember.inject.service(),
  addNewAnswer: false,

  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        respuesta: this.get('respuesta') ? this.get('respuesta') : "",
        author: this.get('author') ? this.get('author') : "",
        time: (new Date().toString()),
        pregunta: this.get('question')
      };
      console.log(params.time );
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },

  }
});
