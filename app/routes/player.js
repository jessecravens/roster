import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render(); // render the application template
    this.render('player', {
      into: 'teams'
    });
  }
});
