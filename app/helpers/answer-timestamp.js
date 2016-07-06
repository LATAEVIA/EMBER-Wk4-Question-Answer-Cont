import Ember from 'ember';
import moment from 'moment';

export function answerTimestamp(params) {
  var time = params[0];

  return moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

export default Ember.Helper.helper(answerTimestamp);



//   if(city.get('rentals').get('length') >= 5) {
//     return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
//   }
// }
