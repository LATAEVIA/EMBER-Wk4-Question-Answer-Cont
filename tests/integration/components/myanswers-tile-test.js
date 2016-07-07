import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('myanswers-tile', 'Integration | Component | myanswers tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{myanswers-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#myanswers-tile}}
      template block text
    {{/myanswers-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
