import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers', function () {
    var questionAnswer = this.get('question.answers');
    var answerCount = [];
    questionAnswer.forEach(function (value, i) {
        // console.log('%d: %s', i, value);
        answerCount.push(value);
    });
    // console.log(answerCount.length);
    return answerCount.length;
  })
})
