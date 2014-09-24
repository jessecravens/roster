import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RosterENV.locationType
});

Router.map(function() {

  this.route('settings');
  this.route('profile');
  this.route('error', {path: '/*wildcard'});
  this.resource('teams', function() {
    this.resource('team', { path: '/:team_id'}, function() {
      this.resource('players', function(){
        this.resource('player', { path: '/:player_id'}, function() {
        });
      });
      this.route('details');
      this.route('data');
    });
  });
});

export default Router;
