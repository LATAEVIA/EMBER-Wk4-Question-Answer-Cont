import Ember from 'ember';
import moment from 'moment';

export function answerTimestamp(params) {
  var answerTime = params[0].get('time');

  return moment(answerTime).format("dddd, MMMM Do, YYYY, h:mm a");

  // (Ember.String.htmlSafe('<span class="glyphicon glyphicon-time"></span>')) (moment(answerTime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
//
export default Ember.Helper.helper(answerTimestamp);
