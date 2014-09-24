import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openTeamModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeTeamModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    createTeam: function(team) {
      this.store.createRecord('team', team);
      return this.send('closeTeamModal');

    },
    cancelTeamCreation: function() {
      return this.send('closeTeamModal');
    }
  }
});
