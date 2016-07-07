import Ember from 'ember';

export default Ember.Component.extend({
  myAnswers: Ember.inject.service(),

  actions: {
    addToMyAnswers(myAnswer) {
      // var paramsAgain = {
      //   respuesta: this.get('respuesta') ? this.get('respuesta') : "",
      //   author: this.get('author') ? this.get('author') : "",
      //   time: (new Date().toString()),
      //   pregunta: this.get('question')
      // };
      console.log("paramsAgain");
      // this.get('myAnswers').add(paramsAgain);
    },
  }
});


import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
