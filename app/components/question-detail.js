import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers', function () {
    var questionAnswer = this.get('question.answers');
    var answerCount = [];
    questionAnswer.forEach(function (value, i) {
        console.log('%d: %s', i, value);
        answerCount.push(value);
    });
    console.log(answerCount.length);
    return answerCount.length;
  })
})
// fullLocation: Ember.computed('city.name', 'city.country', function() {
//   return this.get('city.name') + ', ' + this.get('city.country');
// }),

// answerCount: Ember.computed('question.id', function() {
//   var ref = new Firebase("https://console.firebase.google.com/project/question-answer-f79de/database/data");
//   ref.once("value", function(snapshot) {
//     var answerCount = snapshot.child("questions" + 'question.id' + "/answers").numChildren()
//   })
// })

// answerCount: Ember.computed('question.id', function() {
//   var ref = new Firebase("https://console.firebase.google.com/project/question-answer-f79de/database/data");
//   ref.once("value", function(snapshot) {
//     var answerCount = snapshot.child("questions").numChildren();
//     console.log (answerCount);
//     return answerCount;
//   })
// })

// answerCount: Ember.computed('question.answers', function () {
//   console.log(Object.keys(this.get('question.answers')));
//   console.log(this.get('question.answers.author'));
//   console.log(Ember.getProperties(this.get('question.answers'), Object.keys(this.get('question.answers'.constructor.prototype))));
//   return (Object.keys(this.get('question.answers')).length);
// })

// getEmberObjectProperties = function (emberObject) {
//     var prototypeProperties = Ember.getProperties(emberObject, Object.keys(emberObject.constructor.prototype)),
//         objectProperties = getPojoProperties(emberObject);
//     return Ember.merge(prototypeProperties, objectProperties);
// },
// getEmberDataProperties = function (emberDataObject) {
//     var attributes = Ember.get(emberDataObject.constructor, 'attributes'),
//         keys = Ember.get(attributes, 'keys.list');
//     return Ember.getProperties(emberDataObject, keys);


// answerCount: Ember.computed('question.id', function() {
//   var ref = new Firebase("https://console.firebase.google.com/project/question-answer-f79de/database/data");
//   ref.once("value", function(snapshot) {
//     var answerCount2 = snapshot.child("questions").numChildren();
//     console.log (answerCount2);
//     return answerCount2;
//   }),

// var ref = new Firebase("https://console.firebase.google.com/project/question-answer-f79de/database/data");
// ref.once("value", function(snapshot) {
//   var answerCount = snapshot.child("questions/" + question.id + "/answers").numChildren());
