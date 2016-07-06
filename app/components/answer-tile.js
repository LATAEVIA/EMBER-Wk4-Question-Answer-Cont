import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  authorTimestamp: Ember.computed('answer.author', 'answer.time', function() {
  return this.get('answer.author') + ' responded on ' + moment(this.get('answer.time')).format("dddd, MMMM Do YYYY, h:mm:ss a");
  })
});
