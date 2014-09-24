import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('teams').findBy('id', params.team_id);
  }
});
