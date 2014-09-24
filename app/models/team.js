import DS from 'ember-data';

var Team = DS.Model.extend({
  sport: DS.attr('string'),
  name: DS.attr('string'),
  coach: DS.attr('string'),
  players: DS.hasMany('player', { async: true })
});

Team.reopenClass({
  FIXTURES: [
    {
      id: 1,
      sport: 'basketball',
      name: 'Celtics',
      coach: 'Jesse Cravens',
      players: [1,2]
    }, {
      id: 2,
      sport: 'basketball',
      name: 'Lakers',
      coach: 'Scott Vandenhey',
      players: [3,4]
    }, {
      id: 3,
      sport: 'basketball',
      name: 'Spurs',
      coach: 'Joaquin Lippincott',
      players: [5,6]
    }, {
      id: 4,
      sport: 'basketball',
      name: 'Heat',
      coach: 'Barrett Olafson',
      players: []
    }, {
      id: 5,
      sport: 'basketball',
      name: 'Thunder',
      coach: 'Dylan Tack',
      players: []
    }, {
      id: 6,
      sport: 'basketball',
      name: 'Ninjas',
      coach: 'Simon Taylor',
      players: []
    }
  ]
});

export default Team;
