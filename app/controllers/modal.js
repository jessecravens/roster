import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  actions: {
    cancel: function() {
      return this.get('controllers.application').send('cancelTeamCreation');
    },
    submitTeam: function() {
      return this.get('controllers.application').send('createTeam', {
        name: this.get('name')
      });
    },
    submitPlayer: function() {
      console.log('submitPlayer');
      // return this.get('controllers.application').send('createPlayer', {
      //   name: this.get('name')
      // });
    }
  }
});
