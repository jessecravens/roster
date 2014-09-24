import DS from 'ember-data';

var Player = DS.Model.extend({
  username: DS.attr('string'),
  dob: DS.attr('date'),
  avatar: DS.attr('string')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 'semper@example.edu',
      dob: '9/21/2009',
      avatar: 'assets/img/demo/demo-avatar9601.jpg'
    },
    {
      id: 2,
      username: 'commodo@example.ca',
      dob: '4/21/2008',
      avatar: 'assets/img/demo/demo-avatar9602.jpg'
    },
    {
      id: 3,
      username: 'nunc.sed@example.ca',
      dob: '4/23/2009',
      avatar: 'assets/img/demo/demo-avatar9603.jpg'
    },
    {
      id: 4,
      username: 'nunc@example.edu',
      dob: '7/21/2008',
      avatar: 'assets/img/demo/demo-avatar9604.jpg'
    },
    {
      id: 5,
      username: 'aliquet@example.com',
      dob: '2/12/2009',
      avatar: 'assets/img/demo/demo-avatar9605.jpg'
    },
    {
      id: 6,
      username: 'm.malesuada@example.org',
      dob: '1/21/2008',
      avatar: 'assets/img/demo/demo-avatar9606.jpg'
    }
  ]
});

export default Player;
